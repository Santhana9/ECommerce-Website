import Service from '@ember/service';
import { computed } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { storageFor } from 'ember-local-storage';
const { service } = Ember.inject;
export default Service.extend({
    session: service('session'),
    store: service('store'),
    currentUser: service('currentUser'),
    itemsIds: storageFor('cart'),

    addItem(itemId){
        const itemArray = this.itemsIds.content;
        const index = itemArray.findIndex(object => object.id === itemId.id);
        const itemElement = itemArray[index];
        console.log(itemElement);
        if(itemElement){

            console.log(itemId);
            const currentQuantity = parseInt(itemElement.quantity) + parseInt(itemId.quantity);
            const currentPrice = Number(itemElement.price) + Number(itemId.price);
            
            itemId.quantity = currentQuantity;
            itemId.price = currentPrice;
            console.log(itemId);

            this.itemsIds.content.splice(index, 1);
            console.log(this.itemsIds.content);
            this.get('itemsIds').addObject((itemId));
            window.location.reload(true);
            // console.log(itemElement);
            // const quantityOfAddedElement = parseInt(itemId.quantity) + parseInt(itemElement.quantity);
            // console.log(quantityOfAddedElement);
            // const totalPrice = parseInt(itemId.price) + parseInt(itemElement.price);
            // itemElement.quantity = quantityOfAddedElement;
            // itemElement.price = totalPrice;

            // this.set('itemElement.quantity', quantityOfAddedElement);
            // this.set('itemElement.price', totalPrice);
        }
        else{
            this.get('itemsIds').addObject((itemId));
        }
    },
    remove(itemId){
        this.itemsIds.removeObject((itemId));
    },
    productPrice: computed('itemsIds.content.[]', function(){
        return this.itemsIds.content.map(value => value.price);
    }),
    totalPrice: computed.sum('productPrice'),

    clear(){
        this.get('itemsIds').clear();
    }

});
