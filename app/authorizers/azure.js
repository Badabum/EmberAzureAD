import BaseAuthorizer from 'ember-simple-auth/authorizers/base';
import Ember from 'ember';
import AuthContext from '../authContext';
export default BaseAuthorizer.extend({
    authorize(sessionData, block){
        AuthContext.acquireToken('b821c788-c2dd-4665-bb59-a5f90d678844', function(error, token){
            block('Authorization', `Bearer ${token}`);    
        });
    }
});