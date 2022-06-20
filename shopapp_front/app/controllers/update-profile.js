import Ember from 'ember';

const { service } = Ember.inject;

export default Ember.Controller.extend({
    session: service('session'),
    currentUser: service('currentUser'),

    actions:{
        updateProfile(user){
            function successMsg(){
                alert('Profile Updated!');
                window.location.reload(true);
            }

            function showError(error){
                alert(error.errors);
            }
            user.save().then(successMsg, showError);
        },
    
        changePassword(user){
            function successMsg(){
                alert('Password Updated!');
                window.location.reload(true);
            }

            function showError(error){
                alert(error.errors);
            }
            user.save().then(successMsg, showError);
        }
    }
});
