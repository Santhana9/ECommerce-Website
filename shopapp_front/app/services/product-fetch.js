import { resolve } from 'rsvp';
import { tracked } from '@glimmer/tracking';
import order from '../models/order';

const { service } = Ember.inject;

export default Ember.Service.extend({
    session: service('session'),
    store: service('store'),
    product_: tracked,

    fetchProduct(id){
        console.log(id);
        const products = this.store.findRecord('product', id);
        this.set('product_', products);
        console.log(this.product);
    }
});
