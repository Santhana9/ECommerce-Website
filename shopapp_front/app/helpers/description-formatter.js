import { helper } from '@ember/component/helper';
import EmberResolver from 'ember-resolver';

export function descriptionFormatter(params/*, hash*/) {

  let string = ""
  for (let index = 0; index < params[0].length; index++) {
    if(index === 0){
      string +="<li>";
    }

    if(params[0][index] === "\n"){
      string+= "</li><li>"
    }
    if(index === (params[0].length -1)){
      string += params[0][index] + "</li>"
    }
    else{
      string += params[0][index];
    }
  }
  //console.log(string);
  return new Ember.String.htmlSafe(string)
  //return new Ember.String.htmlSafe(params[0].replace(/\n/g, '<br>'));
}

export default helper(descriptionFormatter);
