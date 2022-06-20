class ProductSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :price, :quantity, :images, :is_shown
end
