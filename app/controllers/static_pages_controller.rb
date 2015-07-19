class StaticPagesController < ApplicationController
  def home
  end

  def contact
  end

  def leaderboard
  end

  def logcheck

    url = request.referer

    if !url.include? "thecapitalcitiesquiz.com/"
      redirect_to root_url
    end

  	if logged_in?
  		redirect_to quiz_url
  	end
  end

  
end
