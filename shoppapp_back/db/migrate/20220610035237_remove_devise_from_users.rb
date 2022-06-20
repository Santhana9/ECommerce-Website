class RemoveDeviseFromUsers < ActiveRecord::Migration[7.0]
  def change
    remove_column :users, :encrypted_password
    remove_column :users, :reset_password_sent_at
    remove_column :users, :reset_password_token
  end
end
