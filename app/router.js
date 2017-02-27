import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('login');
  this.route('admin');
  this.route('users');
  this.route('index', {path:'/'});
  this.route('permissions');
});

export default Router;
