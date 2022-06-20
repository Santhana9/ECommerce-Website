import Ember from 'ember';
export default Ember.Controller.extend({
  session: Ember.inject.service('session'),
  actions: {
    async save(user){
      let userCreated = true;
      var self = this;
      
      function login(){
        self.get('session').authenticate('authenticator:devise', 
          newUser.get('email'), newUser.get('password'))
        .then(()=>{},
        (error)=>
        {
          alert("SignIn Failed!");
        })
      }

      function showError(error){
        userCreated = false;
        alert("SignUp failed");
        self.set('errorMessage', error.errors);
      }

      let newUser = user;
      await newUser.save().catch(showError);

      if(userCreated){
        login();
      }
    }
  }
});