class StaticPagesController < ApplicationController
  def home
  end

  def contact
  end

  def leaderboard
  end

  def logcheck

  	if logged_in?
  		redirect_to quiz_url
  	end
  end

  def logcheck_tz

    if logged_in?
      redirect_to quiz_timezones_url
    end
  end
  
end
