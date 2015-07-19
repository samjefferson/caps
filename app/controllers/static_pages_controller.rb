class StaticPagesController < ApplicationController
  def home
  end

  def contact
  end

  def leaderboard
  end

  def logcheck

    url = request.original_url

    if !url.include? "thecapitalcitiesquiz.com/"
      redirect_to root_path
    end

  	if logged_in?
  		redirect_to quiz_path
  	end
  end

  
end
