import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

const { service } = Ember.inject;

export default Ember.Route.extend(AuthenticatedRouteMixin, {
    session: service('session'),
    currentUser: service('currentUser'),
    
    beforeModel(){
        if(!this.currentUser.user.is_admin){
            this.transitionTo('dashboard');
        }
    },

    model(params){
        return this.store.createRecord('product');
    }
});
