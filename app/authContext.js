import Ember from 'ember';
import config from './config/environment';
let context = new AuthenticationContext(config.authConfigs);
export default context;
