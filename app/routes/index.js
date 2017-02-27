import Ember from 'ember';
import AuthContext from '../authContext';
export default Ember.Route.extend({
    session: Ember.inject.service('session')
});
