import AzureAuthenticator from '../authenticators/azure';
import AzureAuthorizer from '../authorizers/azure';
export function initialize(container) {
  container.register('authenticator:azure', AzureAuthenticator);
  container.register('authorizer:azure', AzureAuthorizer);
}

export default {
  name: 'simple-auth',
  before: 'ember-simple-auth',
  initialize
};
