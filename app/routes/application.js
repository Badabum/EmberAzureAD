import Ember from 'ember';
import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';
import AuthContext from '../authContext';
export default Ember.Route.extend(ApplicationRouteMixin,{
    beforeModel(){
        var isCallBack = AuthContext.isCallback(window.location.hash);
        AuthContext.handleWindowCallback();
        if(isCallBack && !AuthContext.getLoginError()){
            if(AuthContext.getCachedUser()){
                this.get('session').authenticate('authenticator:azure', {});
            }
        }
    },
    model(){
        let session = this.get('session');
        if(session.get('isAuthenticated')){
            let model = this.get('session').get('data').authenticated.user.profile;
            model.isAdmin = model.roles.indexOf('Admin')>=0;
            return model;
        }else{
            return false;
        }
        
    },
    actions: {
        logout(){
            this.get('session').invalidate();
        }
    }
});
