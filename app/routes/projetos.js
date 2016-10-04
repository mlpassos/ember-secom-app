import Ember from 'ember';

export default Ember.Route.extend({
	props: {
		title:'Projetos', 
		content: 'Em breve'
	},
	// model() {
	// 	// return this.store.findRecord('page', 'biizu');
	// 	return this.get('props');
	// }
	model() {
     return Ember.RSVP.hash({
        biizu: this.store.findRecord('page', 'biizu'),
	    paraResponde: this.store.findRecord('page', 'para-responde'),
	    publicom: this.store.findRecord('page', 'publicom'),
	    radioEscola: this.store.findRecord('page', 'radio-escola'),
	    asfemBel: this.store.findRecord('page', 'projeto-jornal-das-feiras-asfembel')
	  });
	},
    setupController(controller, models) {
    	this._super(...arguments);
	    controller.set('biizu', models.biizu);
	    controller.set('paraResponde', models.paraResponde);
	    controller.set('publicom', models.publicom);
	    controller.set('radioEscola', models.radioEscola);
	    controller.set('asfemBel', models.asfemBel);
	    controller.set('props', this.get('props'));
	    // or, more concisely:
	    // controller.setProperties(models);
	}
});