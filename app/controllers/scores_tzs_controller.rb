class ScoresTzsController < ApplicationController
  def new
		#if !URI(request.referer).path == "/logcheck_timezones"
		#	redirect_to logcheck_url
		#end
		@score = ScoresTz.new
	end

	def create
		prev = ScoresTz.find_by(username: params[:scores_tz][:username])
		@score = ScoresTz.new(score_params)
		if prev.nil?
			@score.save 
			new_high
			redirect_to leaderboard_timezones_path
		elsif prev.scoreamount < @score.scoreamount
			prev.update_attributes(score_params)
			new_high
			redirect_to leaderboard_timezones_path
			
		else
			flash[:danger] = "Unfortunately you did not beat your best score."
			redirect_to leaderboard_timezones_path
		end
	end

	def index
		@score = ScoresTz.all 
	end

	private

	def score_params
		params.require(:scores_tz).permit(:username, :scoreamount)

	end

	def new_high
		flash[:success] = "New personal best, saved to the leaderboard!"
	end
end
