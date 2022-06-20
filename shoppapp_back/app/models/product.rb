class Product < ApplicationRecord
    # belongs_to: orders
    has_many :order_items, dependent: :destroy
end