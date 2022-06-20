import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('login');
  this.route('dashboard', function() {});
  this.route('signup');
  this.route('order');
  this.route('user');
  this.route('404', { path: '/*path' });
  this.route('product',  { path: '/product/:product_id' });
  this.route('cart');
  this.route('update_profile');
  this.route('adminPanel');
  this.route('edit-product', {path: 'edit-product/:product_id'});
  this.route('add-product');
});

export default Router;
