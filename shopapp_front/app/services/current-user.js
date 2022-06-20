import { resolve } from 'rsvp';
import { tracked } from '@glimmer/tracking';
import order from '../models/order';

const { service } = Ember.inject;

export default Ember.Service.extend({
    session: service('session'),
    store: service('store'),
    user: tracked,

    async fetchUser(){
        let email = this.session.data.authenticated.email;

        if(email){
            this.user = await this.store.queryRecord('user', {email: email});
            this.store.queryRecord('order', {user_id: this.user.id});
            this.store.findAll('product');
            //this.store.queryRecord('order_item', {order_id: 1})
        }
        else{
            return resolve();
        }
    }
    
});
