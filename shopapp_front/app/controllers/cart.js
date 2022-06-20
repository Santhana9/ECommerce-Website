import Controller from '@ember/controller';
import order from '../models/order';
import { tracked } from '@glimmer/tracking';

const { service } = Ember.inject;

export default Controller.extend({
    session: service('session'),
    currentUser: service('currentUser'),
    store: service('store'),
    shoppingCart: service('shopping-cart'),
    productFetch: service('product-fetch'),
    quantity: 1,
    price: 0,
    cartDialogBox: false,
    orderId: 0,
    actions: {
        removeItem(itemId){
            this.shoppingCart.remove(itemId);
        },
        clearCart(){
            this.shoppingCart.clear();
        },
        order(){
            if(this.shoppingCart.itemsIds.content.length > 0){
                const self = this
                function success(orders){
                self.set('orderId', orders.get('id')); 
                }
                this.set('cartDialogBox', true);
                const user_id = this.currentUser.user;
                let date = new Date();
                date.setDate(date.getDate() + 2);
                const orders = this.store.createRecord('order',{
                    deliveryDate: date,
                    processing: true,
                    user_id: user_id
                });

                orders.save().then(success);
                
            }
            else{
                alert("Cart is Empty");
            }

        },
        orderItem(){
            const self = this;
            function success(){
                alert('Order Created Successfully!');
            }

            function failure(error){
                alert(error.errors);
            }
            this.set('cartDialogBox', false);
            const itemArray = this.shoppingCart.itemsIds.content;
            const length = itemArray.length;
            console.log(itemArray);
            let productArray = [];

            for(let index = 0; index < length-1; index ++){
                let id = itemArray[index].id;
                let quantity = itemArray[index].quantity;
                let productId = itemArray[index].id;
                let price = itemArray[index].price;
                let product_record = this.store.peekRecord('product',id);
                if(product_record.is_shown){                    
                    console.log(itemArray[index]);
                    const orderItems = this.store.createRecord('order-item', {
                        quantity,
                        productId,
                        price,
                    });
    
                    orderItems.save().then(success, failure);
                    this.shoppingCart.remove(itemArray[index])
                }
                else{
                    alert("product is not available");
                    this.shoppingCart.remove(itemArray[index]);

                }
            }

            if(itemArray.length == 1){
                let id = itemArray[0].id
                let product_record = this.store.peekRecord('product',id);
                if(product_record.is_shown){
                    const orderItems = this.store.createRecord('order-item', {
                        quantity : itemArray[0].quantity,
                        productId : itemArray[0].id,
                        price: itemArray[0].price,
                    });
                    orderItems.save().then(success, failure);
                    this.shoppingCart.remove(itemArray[0]);
                }
                else{
                    alert("Product is not avialable");
                    this.shoppingCart.remove(itemArray[0]);
                }
            }

        },

        hideDialog(){
            this.set('cartDialogBox', false);
        },
        fetch_product(id){
            this.productFetch.fetchProduct(id);
        }
    }
});
