import { helper } from '@ember/component/helper';

export function cancelButton(params/*, hash*/) {
  const dateToday = new Date();
  if(dateToday.toDateString() == params[0].toDateString()){
    return false;
  }
  if(dateToday > params[0]){
    return true;
  }
  return true;
}

export default helper(cancelButton);
