import DS from 'ember-data';

export default DS.Model.extend({
    firstName: DS.attr('string'),
    lastName: DS.attr('string'),
    email: DS.attr('string'),
    address: DS.attr('string'),
    old_password: DS.attr('string'),
    password:DS.attr('string'),
    password_confirmation: DS.attr('string'),
    order: DS.hasMany('orders'),
    is_admin: DS.attr('boolean'),

});
