class User < ActiveRecord::Base
	validates :username, presence: true, length: { maximum: 16 },
						format:{ with: /\A[\w+\-.]+\z/i}, uniqueness: { case_sensitive: false }

	has_secure_password

	validates :password, presence: true, length:{ minimum: 6, maximum: 12}
end
