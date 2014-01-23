/*********************************************
	Developer : Killian CHARPENTIER
	Date : 23/01/2014
	Version : 0.0.1
	README :
		Plugin for BackBoneJS to have an scroll infinite
		
		
		Exemple :
			index.html 			-> script before body end
			/testX/views.js 	-> View (container) + Element
			/testX/models.js 	-> Model + Collection + Fetching
		
		params to initialize View:
			offset : index of beginner element
			limit : number of element to render by new 'pagination'
			collection : Collection backbone or array width all elements in array.models
			tpl_el : BackBone View to render an element of collection

*********************************************/

	var ScrollInfinite = Backbone.View.extend({
		options: {
		     scrollinfinite: {
				offset: 0,
				limit: 25,
				tpl_el: null,
				model_el: null
			}
		},
		render: function(){
			// Variable Shortcut
			var opts     = this.options,
				limit       = opts.scrollinfinite.limit,
				offset      = opts.scrollinfinite.offset,
				tpl_el      = opts.scrollinfinite.tpl_el,
				$this = this;
				
				// Define and save function in order by add listener and remove listener
				this.options.scroll_fn = this.options.scroll_fn || function(e){
				    event.preventDefault();
				    /*****
				    	offsetHeight : Height of element (container)
				    	scrollHeight : Height total of element (container+element)
				    	scrollTop 	 : Scroll (scrolltop+offsetheight = scrollheight)
				    **/
				    var obj = {
				    	offsetH: e.target.offsetHeight,
				    	scrollH: e.target.scrollHeight,
				    	scrollT: e.target.scrollTop
				    }
				    if( obj.scrollT > obj.scrollH / 1.5 ){
				    	$this.render();
				    }
				};
				
			// Loop to render each element 	
			for(var i = offset, c = limit+offset; i < c; i++){
				this.el.appendChild( // For jQuery lover this.$el.append(
					new tpl_el({
						model: opts.collection.models[i]
					})
					.render()
					.el
				);	
			}
			
			// Declare new value of offset
			opts.scrollinfinite.offset = offset + limit;
			
			
			// If it's the first render, we add event for scroll infinite
			if( offset == 0 ){
			   if (this.el.addEventListener){
			      this.el.addEventListener('scroll', this.options.scroll_fn, false);	   
			   }
			   else if (this.el.attachEvent) {
			      this.el.attachEvent('onscroll', this.options.scroll_fn);
			   }
			   else {
			      this.el['scroll'] = this.options.scroll_fn;
			   }
			}
			// If it's the last render possible, we remove event for scroll infinite
			else if( offset >= opts.collection.models.length - limit){
			   if (this.el.removeEventListener){
			      this.el.removeEventListener('scroll', this.options.scroll_fn, false);	   
			   }
			   else if (this.el.detachEvent) {
			      this.el.detachEvent('onscroll', this.options.scroll_fn);
			   }
			   else {
			      delete this.el['scroll'];
			   }
			}

		},
	});