class CreateScoresTzs < ActiveRecord::Migration
  def change
    create_table :scores_tzs do |t|
    	t.string :username
    	t.integer :scoreamount
      t.timestamps null: false
    end
  end
end
