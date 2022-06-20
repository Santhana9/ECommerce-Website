// app/routes/product.js
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
    model(params){
        const param = params;
        console.log(params);
        return this.store.findRecord('product', params.product_id);
    }
    
});
