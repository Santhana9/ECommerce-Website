import DS from 'ember-data';

export default DS.Model.extend({
    title: DS.attr('string'),
    description: DS.attr("string"),
    price: DS.attr("number"),
    quantity: DS.attr("number"),
    order_items: DS.hasMany('order_item'),
    images: DS.attr("string"),
    is_shown: DS.attr("boolean"),
});
