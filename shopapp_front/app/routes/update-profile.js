import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

const { service } = Ember.inject;

export default Ember.Route.extend(AuthenticatedRouteMixin, {
    currentUser: service('currentUser'),

    beforeModel() {
        if(this.currentUser.user.is_admin){
            this.transitionTo('adminPanel');
        }
    },

    model(){
        return this.currentUser.user
    }
});
