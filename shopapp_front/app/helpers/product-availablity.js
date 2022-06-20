import { helper } from '@ember/component/helper';
//let self = this
const store =  Ember.inject.service('store')
export function productAvailablity(params/*, hash*/) {
  const id = params[0];
  const self = params[1];
  let is_Shown = true
  let product =  self.store.peekRecord('product',id);

  return product.is_shown;
}

export default helper(productAvailablity);
