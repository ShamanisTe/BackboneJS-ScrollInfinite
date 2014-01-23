/*********************************************
	Devloper : Killian CHARPENTIER
	Date : dd/mm/yyyy
	Version : 0.0.1
	Folder : /test1/
	README :
		Exemple for plugin ScrollInfinite

*********************************************/
/////
//	Create Model/Collection 
/////		
var Model_bb = Backbone.Model.extend({
    	defaults: {
    		firstname: '',
    		lastname: ''
    	}
    }),		
    Collection_bb = Backbone.Collection.extend({
    	model: Model_bb,
    });
    
/////
//	Fetch data in Collection
/////		
			var collection = new Collection_bb();
				
			for(var i =0; i<500;i++){
			    collection.add(new Model_bb({
			    	firstname: 'toto '+i,
			    	lastname: 'lastname_toto_'+i
			    }));
			}
//			console.log(collection.models);
//			console.log(collection.toJSON());