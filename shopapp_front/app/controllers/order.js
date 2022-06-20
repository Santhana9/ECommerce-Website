import Controller from '@ember/controller';

const { service } = Ember.inject;
export default Controller.extend({
    session: service('session'),
    currentUser: service('currentUser'),
    shoppingCart: service('shoppingCart'),

    actions: {
        cancelOrder(order_id){
            this.store.findRecord('order', order_id).then((order) =>{
                order.set('processing', false);
                order.save().then((response)=>{
                    alert(`Cancelled Successfully`)
                });
            });
        }
    }
});
