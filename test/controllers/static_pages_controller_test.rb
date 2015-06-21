require 'test_helper'

class StaticPagesControllerTest < ActionController::TestCase
  test "should get home" do
    get :home
    assert_response :success
    assert_select "title", "The Capital Cities Quiz"
  end

  test "should get contact" do
    get :contact
    assert_response :success
    assert_select "title", "Contact | The Capital Cities Quiz"
  end

  test "should get quiz" do
    get :quiz
    assert_response :success
    assert_select "title", "The Capital Cities Quiz"
  end

  test "should get leaderboard" do
    get :leaderboard
    assert_response :success
    assert_select "title", "Leaderboard | The Capital Cities Quiz"
  end
end
