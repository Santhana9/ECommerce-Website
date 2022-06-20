import Component from '@ember/component';

export default Component.extend({
    dialogBox: false,
    
    actions: {
        submit(){
            let user = this.get('user');
            this.attrs.updateProfile(user);
        },

        submitPassword(){
            let user = this.get('user');
            this.attrs.changePassword(user);
        },

        showDialog(){
            this.set('dialogBox', true);
        },

        hideDialog(){
            this.set('dialogBox', false);
        }
    }
});
