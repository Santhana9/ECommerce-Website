import Ember from 'ember';

const { service } = Ember.inject;

export default Ember.Controller.extend({
    session: service('session'),
    currentUser: service('currentUser'),


    actions: {
        addProduct(product){
            let self = this;
            function success(){
                alert("Product Updated !!");
                self.transitionToRoute('adminPanel');
            }
            function failed(){
                alert(error.errors);
            }
            product.save().then(success, failed);
        },
    }
});
