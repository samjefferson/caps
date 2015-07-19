class ScoresController < ApplicationController
	
	def new
		if !URI(request.referer).path == "/logcheck"
			redirect_to logcheck_url
		end
		@score = Score.new
	end

	def create
		prev = Score.find_by(username: params[:score][:username])
		@score = Score.new(score_params)
		if prev.nil?
			@score.save 
			new_high
			redirect_to leaderboard_path
		elsif prev.scoreamount < @score.scoreamount
			prev.update_attributes(score_params)
			new_high
			redirect_to leaderboard_path
			
		else
			flash[:danger] = "Unfortunately you did not beat your best score."
			redirect_to leaderboard_path
		end
	end

	def index
		@score = Score.all 
	end

	private

	def score_params
		params.require(:score).permit(:username, :scoreamount)

	end

	def new_high
		flash[:success] = "New personal best, saved to the leaderboard!"
	end
end
