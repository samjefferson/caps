class UsersController < ApplicationController
  def new
  	@user = User.new
  end

  def create
  	@user = User.new(user_params)
  	if @user.save
      log_in @user
      flash[:success] = "Congratulations, your registration was successful."
      redirect_to leaderboard_url
  	else
  		render 'new'
  	end
  end

  def edit
    @user = current_user
  end

  def update
    @user = current_user
    if @user.update_attributes(user_params)

    else
    end
  end



  private

  def user_params
  	params.require(:user).permit(:username, :password,
  								 :password_confirmation)
  end
end

