import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';
import currentUser from '../services/current-user';
import order from './order';
const { service } = Ember.inject;
export default Ember.Route.extend(AuthenticatedRouteMixin, {
    session: service('session'),
    currentUser: service('currentUser'),
    beforeModel() {
        if(!this.currentUser.user.is_admin){
            this.transitionTo('dashboard');
        }
        
    },
    model(){
        const products = this.store.findAll('product');
        const orders = this.store.findAll('order-item')

        return{
            orders,
            products,
        }

    }
});
