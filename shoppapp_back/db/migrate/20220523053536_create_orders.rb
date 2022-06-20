class CreateOrders < ActiveRecord::Migration[7.0]
  def change
    create_table :orders do |t|
      t.date "deliveryDate"
      t.boolean "processing" , default: true
      t.decimal "price"
      t.string "paymentMethod", default: "Cash on Delivery"

      t.timestamps
    end
  end
end
