import { helper } from '@ember/component/helper';

export function dateFormatter(params/*, hash*/) {
  const dateToday = new Date();
  if(dateToday.toDateString() == params[0].toDateString()){
    return "Arriving Today"
  }
  if(dateToday > params[0]){
    return "The product has been delivered"
  }

  const string = String(params[0]).split(" ");
  //const day = string[0];
  const month = string[1];
  const date = string[2];
  const year = string[3];
  return `Delivered on, ${date}/${month}/${year}`
}

export default helper(dateFormatter);
