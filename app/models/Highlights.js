exports.definition = {
	config: {
		columns: {
			id: "integer",
			title: 'text',
			pic_url: 'text'
		},
		adapter: {
			type: "sqlrest",
			collection_name: "Highlights",
			idAttribute: "id",

			// optimise the amount of data transfer from remote server to app
	        "addModifedToUrl": true,
	        "lastModifiedColumn": "modified"
		},
		headers: { //your custom headers
            "Accept": "application/json"
        },
		URL: 'http://localhost:1337/property/rec',
		debug: 1,
		// delete all models on fetch
        "deleteAllOnFetch": true
		
	},
	extendModel: function(Model) {
		_.extend(Model.prototype, {
			// extended functions and properties go here
		});

		return Model;
	},
	extendCollection: function(Collection) {
		_.extend(Collection.prototype, {
			// extended functions and properties go here

			// For Backbone v1.1.2, uncomment the following to override the
			// fetch method to account for a breaking change in Backbone.
			/*
			fetch: function(options) {
				options = options ? _.clone(options) : {};
				options.reset = true;
				return Backbone.Collection.prototype.fetch.call(this, options);
			}
			*/
		});

		return Collection;
	}
};