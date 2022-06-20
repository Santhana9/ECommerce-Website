class ApplicationController < ActionController::Base
  before_action :authenticate_user_from_token!

  private

  def authenticate_user()
    authenticate_with_http_token do |token, options|
      user_email = options[:email].presence
      @user = user_email && User.find_by_email(user_email)
      unless @user && Devise.secure_compare(@user.authentication_token, token)
        render json: {:msg => "Unauthorized"}, status: 401
      end
    end
  end

  def authenticate_user_from_token!
    if(request.headers['Authorization'])
      authenticate_user()
    else
      render json: {:msg => "Unauthorized"}, status: 401
    end
  end
end
