import BaseAuthenticator from 'ember-simple-auth/authenticators/base';
import Ember from 'ember';
import AuthContext from '../authContext'

export default BaseAuthenticator.extend({
    session: Ember.inject.service(),
    restore(properties){
        return new Ember.RSVP.Promise(function(resolve, reject){
            if(!Ember.isEmpty(properties.user)){
                resolve(properties);
            }else{
                reject();
            }
        })
    },
    authenticate(){
        return new Ember.RSVP.Promise(function(resolve, reject){
            if(!AuthContext.getCachedUser()){
                AuthContext.login();
            }else{
                resolve({user:AuthContext.getCachedUser()});
            }
        })
    },
    invalidate(){
        if(this.get('session').isAuthenticated){
            this.get('session.store').clear();
            AuthContext.logOut();
        }
    }
})