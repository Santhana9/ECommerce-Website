import Component from '@ember/component';

const { service } = Ember.inject;

export default Component.extend({
    session: service('session'),
    actions: {
        submit(){
            let product = this.get('product');
            this.attrs.editProduct(product);
        },
    }
});
