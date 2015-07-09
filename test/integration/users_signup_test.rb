require 'test_helper'

class UsersSignupTest < ActionDispatch::IntegrationTest
  
  test "invalid signup information" do 
  	get signup_path
  	assert_no_difference 'User.count' do
  		post users_path, user: { username: "", password: "john",
  								password_confimation: "snow"}
  	end
  	assert_template 'users/new'  	
  end

  test "valid signup information" do
  	get signup_path
  	assert_difference 'User.count' do
  		post_via_redirect users_path, user: {username: "JohnSnow", password: "johnsnow",
  								 password_confimation: "johnsnow"}
  	end
  	assert_template "users/leaderboard"
  end

end
