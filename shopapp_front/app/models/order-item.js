import DS from 'ember-data';

export default DS.Model.extend({
    quantity: DS.attr("number"),
    product_id: DS.belongsTo('Product'),
    productId: DS.attr("number"),
    price: DS.attr('number'),
    order_id: DS.belongsTo('order')
});
