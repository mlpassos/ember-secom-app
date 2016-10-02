import Ember from 'ember';

export default Ember.Route.extend({
	model(params) {
		return this.store.findRecord('page', 'sobre');
	}
	// ,
	// secretario: '',
	// afterModel() {
	// 	this.store.findRecord('page', 'secretario').then(data =>{
	// 		console.log(data.get('page'));
	// 	});
		
	// },
	// setupController(controller) {
	// 	this._super(...arguments);
	// 	controller.set('secretario', this.get('secretario'));
	// }
});