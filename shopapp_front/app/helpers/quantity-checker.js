import { helper } from '@ember/component/helper';
import { tracked } from '@glimmer/tracking';

export function quantityChecker(params/*, hash*/) {
  const quantity = params[0];
  const price = params[1]
  if ((quantity <= 10) && (quantity != 0)) {
    return Ember.String.htmlSafe(`<p style="color: red;"> Hurry only ${quantity} items left!! </p>
                                  <span>
                                    <del class="dashboardDel">Rs 2999</del> <span>Rs${price}</span>
                                  </span>`);
  }
  else if(quantity == 0){
    return Ember.String.htmlSafe('<p class="alert alert-danger"> Out of Stock!</p>')
  }
  else{
    return Ember.String.htmlSafe(`<span>
                                    <del class="dashboardDel">Rs 2999</del> <span>Rs ${price}</span>
                                  </span>`)
  }
  //return params;
}

export default helper(quantityChecker);
