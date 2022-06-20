class RemoveIsDiabledAndAddIsShownToProducts < ActiveRecord::Migration[7.0]
  def change
    remove_column :products, :is_disabled
    add_column :products, :is_shown, :boolean, default: true
  end
end
