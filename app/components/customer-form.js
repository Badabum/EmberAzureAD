import Ember from 'ember';

export default Ember.Component.extend({
    firstName:'',
    lastName:'',
    customer: Ember.computed('firstName', 'lastName', function(){
        return `${this.get('firstName')} ${this.get('lastName')}`;
    }),
    actions: {
        addCustomer(){
            var customer = this.get('customer');
            this.sendAction('addCustomer', {name: this.get('customer'), cars:[] });
            this.set('firstName','');
            this.set('lastName','');
        }
    }
});
