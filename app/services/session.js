import Ember from 'ember';

export default Ember.Service.extend({
	user: {
		isLoggedIn: false,
		idToken: '',
		displayName: '',
		email: '',
		imageUrl: ''
	},
	isLoggedIn() {
		console.log('aqui', this.get('user.isLoggedIn'));
		if (this.get('user.isLoggedIn')) {
			return true;
		} else {
			return false;
		}
	},
	login() {
		// Google Login
		let _this = this;
        window.plugins.googleplus.login({},
            function (obj) {
              // alert(JSON.stringify(obj)); // do something useful instead of alerting
              _this.set('user.isLoggedIn', true);
              _this.set('user.idToken', obj.idToken);
              _this.set('user.displayName', obj.displayName);
              _this.set('user.email', obj.email);
              _this.set('user.imageUrl', obj.imageUrl);
              // alert(_this.get('user.isLoggedIn'));
            },
            function (msg) {
              alert('error: ' + msg);
            }
        );
	},
	logout() {
		alert('logout');
	}
});
