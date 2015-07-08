require 'test_helper'

class UserTest < ActiveSupport::TestCase
  def setup
  	@user = User.new(username: "samjefferson43", password: "hello5", password_confirmation: "hello5")
  end

  test "should be valid" do
  	assert @user.valid?
  end

  test "username should be present" do
  	@user.username = "    "
  	assert_not @user.valid?
  end

  test "username should not be too long" do
  	@user.username = "a" * 17
  	assert_not @user.valid?
  end

  test "username should not use special characters" do
  	@user.username = "sj*)"
		assert_not @user.valid?
	end

	test "username should be unique" do
		duplicate_user = @user.dup
		duplicate_user.username = @user.username.upcase
		@user.save
		assert_not duplicate_user.valid?
	end

	test "password should be nonblank" do
		@user.password = @user.password_confirmation = "  " * 6
		assert_not @user.valid?
	end

	test "password should be 6 or more characters" do
		@user.password = @user.password_confirmation = "a" * 5
		assert_not @user.valid?
	end

	test "password should be 12 or less characters" do
		@user.password = @user.password_confirmation = "a" * 13
		assert_not @user.valid?
	end

end
