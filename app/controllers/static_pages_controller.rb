class StaticPagesController < ApplicationController
  def home
  end

  def contact
  end

  def leaderboard
  end

  def logcheck

    if !URI(request.referer).host == "thecapitalcitiesquiz.com" && !URI(request.referer).path == "/"
      redirect_to root_url
    end

  	if logged_in?
  		redirect_to quiz_url
  	end
  end

  
end
