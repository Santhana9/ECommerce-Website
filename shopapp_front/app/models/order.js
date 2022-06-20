import DS from 'ember-data';

export default DS.Model.extend({
    deliveryDate: DS.attr('date'),
    processing: DS.attr('boolean'),
    // price: DS.attr('number'),
    paymentMethod: DS.attr('string'),
    user_id: DS.belongsTo('user'),
    order_items: DS.hasMany('order_item')

});
