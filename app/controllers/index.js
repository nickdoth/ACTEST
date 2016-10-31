// var props = new Backbone.Collection([
	// {title: 'ABCD', image: 'default.png'},
	// {title: 'EDFR', image: 'default.png'}
// ]);

Alloy.Collections.Highlights.fetch();

// Alloy.Collections.property.fetch();

function tableOnClick(e) {
	alert(Alloy.Collections.Highlights.toJSON());
}

$.index.open();