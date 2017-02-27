import Ember from 'ember';
export default Ember.Route.extend({
    session: Ember.inject.service('session'),
    actions:{
        loginWithAzure: function(){
            this.get('session').authenticate('authenticator:azure', {});
        }
    }
});
