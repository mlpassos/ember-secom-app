import Ember from 'ember';

export default Ember.Route.extend({
	props: {
		title:'Projetos', 
		content: 'Em breve'
	},
	model() {
		// return this.store.findRecord('page', 'biizu');
		return this.get('props');
	}
});