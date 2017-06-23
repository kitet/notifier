import DS from 'ember-data';

export default DS.Model.extend({
	title:DS.attr(),
	message:DS.attr(),
	email:DS.attr(),
	company:DS.belongsTo('company',{async:true})
});
