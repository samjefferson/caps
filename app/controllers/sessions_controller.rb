class SessionsController < ApplicationController
  def new
  end

  def create
  	
  	user = User.ci_find('username', params[:session][:username])
    if !user.is_a?(User::ActiveRecord_Relation)
  	 if user.authenticate(params[:session][:password])
  	 	log_in user
  	  redirect_to root_url
  	 else
  	   invalid
     end
    else
    invalid

    end
  end

  def destroy
    log_out 
    redirect_to root_url
  end

  private

  def invalid
    flash.now[:danger] = 'Invalid username/password combination' #not quite finished yet
    render 'new'
  end

end
