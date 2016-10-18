import Ember from 'ember';

let props = {
	title: 'Home',
	subtitle: 'Bem-vindo ao aplicativo da SECOM',
	content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus, quibusdam rem eveniet dolores, repellendus sint eligendi earum. Impedit saepe quasi dicta? Accusamus dolore iusto, possimus! In modi amet, maiores eos!'
};

export default Ember.Route.extend({
	session: Ember.inject.service(),
    setupController(controller) {
        this._super(...arguments);
        controller.set('session', this.get('session'));
    },	
	model() {
		return props;
	}
});