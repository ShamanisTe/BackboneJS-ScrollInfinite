# BackboneJS - ScrollInfinite

## Dependencies

no specific external dependencies but you need those for BackBoneJS which are 
* jQuery
* underscoreJS (or ur template engine favorite)
* BackboneJS


## How does it work ?
The behavior is rather simple. Like you used to use Backbone, create two views (one for container et the other for render each element from collection).
When you initialize the view (container) you need some params.
```javascript
// Your view container which extend ScrollInfinite plugin
var Your_view = Scrollinfinite.extend({});

// Your view for each element from collection
var Element = Backbone.View.extend({}); 

// Your model use for fetch collection
var Model = Backbone.Model.extend({});

// Initialize
var view = new Your_view({
	el: '#Your_Element_Id',
	collection: your_collection,
	scrollinfinite:{
	    offset: 0,
	    limit: 50,
	    tpl_el: Element,
	    model_el: Model_bb // Optional, only for test
	}
});
```
## How to test ?
Just fork/clone this repertories and launch ./exemple/index.html to see the first (and unique) exemple

## Todo
* Add callback control
* Add control for ajax 'pagination'
* More exemple

## License

The MIT License (MIT)

Copyright (c) 2014 Killian CHARPENTIER

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.