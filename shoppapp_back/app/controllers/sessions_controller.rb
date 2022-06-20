class SessionsController < ApplicationController
  skip_before_action :authenticate_user_from_token!

  def create
      user = User.find_by_email(params[:user][:email])
      if user && user.authenticate(params[:user][:password])
          if request.format.json?
              data = {
              token: user.authentication_token,
              email: user.email
              }
              render json: data, status: 201 and return
          end
      else
          render json: {:error => "Failed"}, status: 403 and return
      end
  end
end