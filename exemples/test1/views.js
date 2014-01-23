/*********************************************
	Devloper : Killian CHARPENTIER
	Date : dd/mm/yyyy
	Version : 0.0.1
	README :
		Plugin for BackBoneJS to have scroll infinite

*********************************************/
	var View = ScrollInfinite.extend({
		// Do not rewrite 'options" attribute
		events: {
		
		},
	    initialize: function(params) {
			console.log("View initialize");
			console.log(this.options);
			var opts = this.options						
	    },
	    test_add_element: function(){
			var el = new this.options.scrollinfinite.tpl_el({
				model: new this.options.scrollinfinite.model_el({
			    	firstname: 'toto 50',
			    	lastname: 'lastname_toto_200'
			    })
			}).render();
			
			this.$el.append(el.el);	
	    }
	});
	
	var Element = Backbone.View.extend({
		tagName: "li",
		options: {
			tpl: 'firstname : <%= firstname %> and lastname : <%= lastname %>'
		},
	    initialize: function(params) {
//			console.log("Element initialize");
//			console.log(this.options);
	    },
	    render: function(e) {
			var obj = {
				firstname : "Not model",
				lastname : "Any model"
			}
			
			if( this.options.model ){
				try{
					obj.firstname = this.options.model.get('firstname');
					obj.lastname = this.options.model.get('lastname');					
				}catch(err){
					console.log(err);
					obj.firstname = this.options.model.firstname;
					obj.lastname = this.options.model.lastname;														
				}

			}
			
			this.$el.html(_.template(this.options.tpl, {
				firstname: obj.firstname,
				lastname: obj.lastname
			}));
			
	        return this;
	    }
	})