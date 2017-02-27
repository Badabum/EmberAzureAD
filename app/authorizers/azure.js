import BaseAuthorizer from 'ember-simple-auth/authorizers/base';
import Ember from 'ember';
import AuthContext from '../authContext';
import ENV from '../config/environment';
export default BaseAuthorizer.extend({
    authorize(sessionData, block){
        AuthContext.acquireToken(ENV.authConfigs.clientId, function(error, token){
            block('Authorization', `Bearer ${token}`);    
        });
    }
});