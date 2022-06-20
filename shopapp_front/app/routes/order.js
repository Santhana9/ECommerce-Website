import Route from '@ember/routing/route';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';
const { service } = Ember.inject;
export default Route.extend(AuthenticatedRouteMixin, {
    session: service('session'),
    currentUser: service('currentUser'),
    beforeModel() {
        if(this.currentUser.user.is_admin){
            this.transitionTo('adminPanel');
        }
    },
    model(){
        // let order = this.store.query('order', {});
        // console.log(order);
        let order_items = this.store.query('order-item', {user_id: this.currentUser.user.id})
        return order_items
    }

});
