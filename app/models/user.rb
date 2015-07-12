class User < ActiveRecord::Base
	validates :username, presence: true, length: { maximum: 16 },
						format:{ with: /\A[\w+\-.]+\z/i}, uniqueness: { case_sensitive: false }

	has_secure_password

	validates :password, presence: true, length:{ minimum: 6, maximum: 12}

	scope :ci_find, lambda { |attribute, value| where("lower(#{attribute}) = ?", value.downcase).first}

	# Returns the hash digest of the given string.
  def User.digest(string)
    cost = ActiveModel::SecurePassword.min_cost ? BCrypt::Engine::MIN_COST :
                                                  BCrypt::Engine.cost
    BCrypt::Password.create(string, cost: cost)
  end
  
end
