import Ember from 'ember';

export default Ember.Route.extend({
	session: Ember.inject.service(),
	model() {
		return this.store.query('user', {userId: this.get('session.user.userId')});
	},
	setupController(controller) {
		this._super(...arguments);
		controller.set('session', this.get('session'));
	}
});
