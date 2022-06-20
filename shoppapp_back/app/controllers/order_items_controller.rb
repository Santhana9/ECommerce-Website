class OrderItemsController < ApplicationController
    def index
        if params[:user_id]
            user = User.find(params[:user_id])
            orders = Order.where(user: user)
            render json: OrderItem.where(order: orders).order(created_at: :desc)
        else
            if(@user.is_admin)
                render json:OrderItem.all.order(created_at: :desc)
            end
        end
    end

    def create
        puts params
        quantity = params[:orderItem][:quantity]
        product_id = params[:orderItem][:productId]
        price = params[:orderItem][:price]
        order_id = Order.last.id
        product = Product.find(product_id)

        if(product.quantity >= quantity)
            orderItems = OrderItem.create!(
                quantity: quantity,
                product_id: product_id,
                order_id: order_id,
                price: price
            )
            product.quantity -= quantity
            product.save()
            #product.update!(quantity: (product_quantity - quantity))
            render json: orderItems, status: 201

        else
            render json: {:errors => "We don't have enough quantity"}, status: 400
        end
    end
end