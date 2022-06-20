import Controller from '@ember/controller';

const { service } = Ember.inject;

export default Controller.extend({
    session: service('session'),
    currentUser: service('currentUser'),
    openProducts: true,
    openUser: false,
    openOrders:false,
    actions: {
        toggleProducts(){
            this.set('openProducts', true);
            this.set('openOrders', false);

        },
        toggleOrders(){
            this.set('openProducts', false);
            this.set('openOrders', true);
        },
        deleteProduct(product){
            product.destroyRecord().then(() => {
                alert("Product is deleted");
                window.location.reload(true);
            });
        },

    }
});
