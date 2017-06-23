// import Ember from 'ember';
//
// export default Ember.Component.extend({
//   signInSubscribershowing: false,
//   actions: {
//     showSubscriberSignin() {
//       this.set('signInSubscribershowing', true);
//     },
//     signInSubscriber() {
//       var params = {
//         email: this.get('useremail'),
//         password: this.get('userpassword')
//       }
//       this.sendAction('signInSubscriber', params);
//     }
//   }
// });

//
import Ember from 'ember';

export default Ember.Component.extend({
  signInSubscribershowing: false,
  actions: {
    showSubscriberSignin() {
      this.set('signInSubscribershowing', true);
    },
    signInSubscriber() {
      var params = {
        email: this.get('useremail'),
        password: this.get('userpassword')
      }
      this.sendAction('signInSubscriber', params);
    }
  }
});
