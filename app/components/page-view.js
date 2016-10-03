import Ember from 'ember';

export default Ember.Component.extend({
	// cordova: Ember.inject.service(),
	didInsertElement() {
		this._super(...arguments);
		let ct = this.$('#page-content');
		if (ct.length) {
			// alert('existe page-content');
			ct.delegate('a', 'click', function(e) {
			   e.preventDefault();
			   let url = $(this).attr('href');
			   // console.log($(this).attr('href') + ' substituido com sucesso!');
			   // window.open( $(this).attr('href'), 'popup' );
			   let ref = window.open(url, '_blank', 'location=yes');
			});	
		}
	}
});
