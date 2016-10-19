import DS from 'ember-data';

const { attr } = DS;

export default DS.Model.extend({
	userId: attr('string'),
	displayName: attr('string'),
	email: attr('string'),
	imageUrl: attr('string')
	// tags: DS.hasMany('tag')
});