import Route from '@ember/routing/route';
import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin'
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
        return this.currentUser.user
    }
});
