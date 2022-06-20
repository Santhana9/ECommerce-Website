class ProductsController < ApplicationController
    def index
        if params[:id]
            render json: Product.find(params[:id]) 
        else
            render json: Product.all.order(:created_at)
        end
        
    end

    def show
        render json: Product.find(params[:id])
    end
    def create
        if(@user.is_admin)
            product = Product.new()

            product.title = params[:product][:title]
            product.description = params[:product][:description]
            product.price = params[:product][:price]
            product.quantity = params[:product][:quantity]
            product.images = params[:product][:images]

            if product.save()
                render json: product, status: 200
            else
                render json: {:errors => product.error.full_messages}, status: 400
            end
        else
            render json: {:errors => "Unauthorized"}, status: 400
        end
    end

    def update
        if(@user.is_admin)
            product = Product.find(params[:id])

            product.title = params[:product][:title]
            product.description = params[:product][:description]
            product.price = params[:product][:price]
            product.quantity = params[:product][:quantity]
            product.images = params[:product][:images]
            product.is_shown = params[:product][:is_shown]

            if product.save()
                render json: product, status: 200
            else
                render json: {:errors => product.errors.full_messages}, status: 400
            end
        else
            render json: {:errors => "Unauthorized"}, status: 400
        end
    end

    def destroy
        if(@user.is_admin)
            product = Product.find(params[:id])
            product.destroy!
        else
            render json: {:errors => "Unauthorized"}, status: 400
        end
    end
end