import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';
import db from '../db';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
    
    model(){
        let roles = this.get('session').get('data').authenticated.user.profile.roles;
        return db.permissionsFor(roles);
    }
});
