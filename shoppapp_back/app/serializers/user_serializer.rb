class UserSerializer < ActiveModel::Serializer
  attributes :id, :firstName, :lastName, :email, :address, :is_admin
end
