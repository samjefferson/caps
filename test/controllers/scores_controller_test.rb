require 'test_helper'

class ScoresControllerTest < ActionController::TestCase
  
	 test "should get new" do
    get :new
    assert_response :success
    assert_select "title", "The Capital Cities Quiz"
  end
  

end
