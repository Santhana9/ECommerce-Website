class OrderSerializer < ActiveModel::Serializer
  attributes :id, :deliveryDate, :processing, :paymentMethod, :user_id
end
