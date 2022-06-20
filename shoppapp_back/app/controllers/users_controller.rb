class UsersController < ApplicationController
    skip_before_action :authenticate_user_from_token!, only: [:create]


    def index
        render json: User.find_by_email(params[:email])
    end
    
    def create
        first_name = params[:user][:firstName]
        last_name = params[:user][:lastName]
        email = params[:user][:email]
        address = params[:user][:address]
        password = params[:user][:password]
        password_confirmation = params[:user][:password_confirmation]

        user = User.new(
            firstName: first_name, 
            lastName: last_name, 
            email: email, 
            address: address,
            password: password,
            password_confirmation: password_confirmation
        )

        if user.save()
            render json: user, status: 200
        else
            render json: {:errors => user.errors.full_messages}, status: 400
        end
    end

    def update
        user = User.find(params[:id])

        if(params[:user][:password] && !@user.is_admin)
            return change_password(user)
        elsif(params[:user][:password])
            user.password = params[:user][:password]
        end
        
        user.firstName = params[:user][:firstName]
        user.lastName = params[:user][:lastName]
        user.address = params[:user][:address]

        if user.save()
            render json: user, status: 200
        else
            render json: {:errors => user.errors.full_messages}, status: 400
        end
    end

    def change_password(user)
        if(user.authenticate(params[:user][:old_password]))
            user.password = params[:user][:password]
            user.password_confirmation = params[:user][:password_confirmation]
            
            if user.save()
                render json: user, status: 200
            else
                render json: {:errors => user.errors.full_messages}, status: 400
            end
        else
            render json: {:errors => "Old Password is not correct!"}, status: 400
        end
    end

    def show
        render json: User.find(params[:id])
    end
end