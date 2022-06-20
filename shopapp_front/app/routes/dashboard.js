import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';
import currentUser from '../services/current-user';

const { service } = Ember.inject;

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  session: service('session'),
  currentUser: service('currentUser'),

  beforeModel() {
    if(this.currentUser.user.is_admin){
        this.transitionTo('adminPanel');
    }
  },
  model(){
    let products = this.store.findAll('Product')
    return products
    return this.currentUser.user;
  },
  
});