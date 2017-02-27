import Ember from 'ember';
import db from '../db';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
    model(){
        return db.users();
    },
    actions: {
        addCustomer: function(customer){
            if(customer){
                db.addUser(customer);
                this.refresh();
            }
        }
    }
});
