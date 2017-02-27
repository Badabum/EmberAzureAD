import BaseAuthenticator from 'ember-simple-auth/authenticators/base';
import Ember from 'ember';
import AuthContext from '../authContext'

export default BaseAuthenticator.extend({
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
        AuthContext.logOut();
    }
})