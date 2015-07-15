class CreateScores < ActiveRecord::Migration
  def change
    create_table :scores do |t|
    	t.string :username
    	t.integer :scoreamount
      t.timestamps null: false
    end
  end
end
