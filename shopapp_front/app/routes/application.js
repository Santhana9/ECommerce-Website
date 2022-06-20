import Ember from 'ember';
import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin'

const { service } = Ember.inject;

export default Ember.Route.extend(ApplicationRouteMixin, {
    currentUser: service('currentUser'),
    session: service('session'),
    store: service('store'),
    routeAfterAuthentication: 'dashboard',

    beforeModel() {
        return this._loadCurrentUser();
    },
    
    async sessionAuthenticated(){
        const _super = this._super;
        // this._super(...arguments);
        // this._loadCurrentUser();
        await this.currentUser.fetchUser();
        if(this.currentUser.user.is_admin){
            this.set('routeAfterAuthentication', 'adminPanel');
        }
        _super.call(this, ...arguments);

    },
    
    _loadCurrentUser() {
        return this.currentUser.fetchUser().catch(() => this.session.invalidate());
    },

    actions: {
        logout() {
          this.get('session').invalidate();
        }
    },
})