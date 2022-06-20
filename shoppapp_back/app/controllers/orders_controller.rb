class OrdersController < ApplicationController
    def index
        # puts(params)
        if params[:user_id]
            user = User.find(params[:user_id])
            render json:user.orders
        else
            render json: Order.all
        end
    end

    def show
        render json: Order.find(params[:id])
    end

    def create
        puts params
        deliveryDate = params[:order][:deliveryDate]
        processing = params[:order][:processing]
        user_id = params[:order][:user_id]

        order = Order.create!(
            deliveryDate: deliveryDate,
            processing: processing,
            user_id: user_id
        )
        render json: order, status: 201
    end

    def update
        order = Order.find(params[:id])
        deliveryDate = order.deliveryDate
        order.processing = params[:order][:processing]
        if order.save()
            render json: order, status: 200
        else
            render json: {:errors => order.errors.full_messages}, status: 400
        end
    end
end