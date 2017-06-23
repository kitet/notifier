import Ember from 'ember';

export default Ember.Service.extend({
    issubscribe: false,
    updateState(boolean) {
        this.set('issubscribe', boolean);
    }
});