import Ember from 'ember';

const { service } = Ember.inject;

export default Ember.Controller.extend({
    session: service('session'),
    actions: {
    authenticate() {
     let { email, password } = this.getProperties('email', 'password');
     this.get('session')
       .authenticate('authenticator:devise',email, password)
       .then(()=>{},
       (error)=>{alert('Login Failed');
       this.set('error', "Please check your email/password!");
      });
      //  .catch((reason) => {
      //  this.set('errorMessage', reason.error || reason);
    //  });
   },
 }
});
