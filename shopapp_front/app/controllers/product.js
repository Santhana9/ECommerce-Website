// app/controllers/product.js
import Controller from '@ember/controller';
import { computed } from '@ember/object';
import { getOwner } from '@ember/application';

const { service } = Ember.inject;
export default Controller.extend({
    session: service('session'),
    currentUser: service('currentUser'),
    shoppingCart: service('shoppingCart'),
    quantity: 1,
    price: 0,
    dialogBox: false,
    actions:{
        addToItem(model){
            const id = this.model.id;
            const title = this.model.title;
            const quantity = this.quantity;
            const images = this.model.images;
            const price = quantity * model.price;
            this.shoppingCart.addItem({
                id,
                title, 
                price,
                quantity,
                images,
            });
        },

        clearCart(){
            this.shoppingCart.clear();
        },
        
        removeItem(item){
            this.shoppingCart.remove(item);
        },

        order(){
            var self = this;
            function setPrice(){
                self.set('price', (self.model.price * self.quantity));
            }
            this.set('dialogBox', true);
            const user_id = this.currentUser.user;
            let date = new Date();
            date.setDate(date.getDate() + 2);
            const orders = this.store.createRecord('order',{
                deliveryDate: date,
                processing: true,
                user_id: user_id
            });
            orders.save().then(setPrice());
        },

        orderItem(){
            const self = this;
            function success(){
                alert('Order Created Successfully!');
                self.transitionTo('dashboard');
            }

            function failure(error){
                alert(error.errors);
            }
            this.set('dialogBox', false);
            console.log(this.model);
            const orderItems = this.store.createRecord('order-item', {
               quantity: this.quantity,
               productId: this.model.id,
               price: this.quantity * this.model.price

           })
           orderItems.save().then(success, failure);
           
        },

        hideDialog(){
            this.set('dialogBox', false);
        },
        cancel(){
            
        }
    }
});
