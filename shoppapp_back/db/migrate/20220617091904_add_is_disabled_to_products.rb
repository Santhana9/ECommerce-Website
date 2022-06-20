class AddIsDisabledToProducts < ActiveRecord::Migration[7.0]
  def change
    add_column :products, :is_disabled, :boolean, default: false
  end
end
