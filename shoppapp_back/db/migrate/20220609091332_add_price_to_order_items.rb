class AddPriceToOrderItems < ActiveRecord::Migration[7.0]
  def change
    add_column :order_items, :price, :decimal
    remove_column :orders, :price, :decimal
  end
end
