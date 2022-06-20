import Ember from 'ember';

const { service } = Ember.inject;

export default Ember.Controller.extend({
    session: service('session'),
    currentUser: service('currentUser'),
    shoppingCart: service('shopping-cart'),

    // action:{
    //     increaseCount(a, b) {
    //         var input = b.previousElementSibling;
    //         var value = parseInt(input.value, 10);
    //         value = isNaN(value) ? 0 : value;
    //         value++;
    //         input.value = value;
    //     },

    //     decreaseCount(a, b) {
    //         var input = b.nextElementSibling;
    //         var value = parseInt(input.value, 10);
    //         if (value > 1) {
    //           value = isNaN(value) ? 0 : value;
    //           value--;
    //           input.value = value;
    //         }
    //     }

        
    //}
});
