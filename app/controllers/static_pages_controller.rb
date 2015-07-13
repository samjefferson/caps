class StaticPagesController < ApplicationController
  def home
  end

  def contact
  end

  def leaderboard
  end

  def logcheck
  	if logged_in?
  		redirect_to quiz_path
  	end
  end
end
