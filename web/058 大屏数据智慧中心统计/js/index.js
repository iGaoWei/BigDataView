var points = 24;


/* jquery slider pips plugin, version 0.1 */

	(function($) {

		var extensionMethods = {

			pips: function( settings ) {

				options = {

					first: 	"number", 	// "pip" , false
					last: 	"number", 	// "pip" , false
					rest: 	"pip" 		// "number" , false

				};

				$.extend( options, settings );

				// get rid of all pips that might already exist.
				this.element.addClass('ui-slider-pips').find( '.ui-slider-pip' ).remove();

				// we need teh amount of pips to create.
				var pips = this.options.max - this.options.min;					

					// for every stop in the slider, we create a pip.
					for( i=0; i<=pips; i++ ) {

						// hold a span element for the pip
						var s = $('<span class="ui-slider-pip"><span class="ui-slider-line"></span><span class="ui-slider-number">'+i+'</span></span>');

						// add a class so css can handle the display
						// we'll hide numbers by default in CSS, and show them if set.
						// we'll also use CSS to hide the pip altogether.
						if( 0 == i ) {
							s.addClass('ui-slider-pip-first');
							if( "number" == options.first ) { s.addClass('ui-slider-pip-number'); }
							if( false == options.first ) { s.addClass('ui-slider-pip-hide'); }
						} else if ( pips == i ) {
							s.addClass('ui-slider-pip-last');
							if( "number" == options.last ) { s.addClass('ui-slider-pip-number'); }
							if( false == options.last ) { s.addClass('ui-slider-pip-hide'); }
						} else {
							if( "number" == options.rest ) { s.addClass('ui-slider-pip-number'); }
							if( false == options.rest ) { s.addClass('ui-slider-pip-hide'); }
						}


						// if it's a horizontal slider we'll set the left offset,
						// and the top if it's vertical.
						if( this.options.orientation == "horizontal" ) 
							s.css({ left: '' + (100/pips)*i + '%'  });
						else
							s.css({ top: '' + (100/pips)*i + '%'  });


						// append the span to the slider.
						this.element.append( s );

					}

			}


		};

		$.extend(true, $['ui']['slider'].prototype, extensionMethods);


	})(jQuery);




(function($) {

		var extensionMethods = {

			float: function( settings ) {

				options = {};
				$.extend( options, settings );

				// add a class for the CSS
				this.element.addClass('ui-slider-float');
        
        
        // if this is a range slider
        if( this.options.values ) {
           
          var $tip = [
            $('<span class="ui-slider-tip">'+ this.options.values[0]+'</span>'),
            $('<span class="ui-slider-tip">'+ this.options.values[1]+'</span>')
          ];
          
          
        // else if its just a normal slider
        } else {
          
          // create a tip element
          var $tip = $('<span class="ui-slider-tip">'+ this.options.value+'</span>');
          
        }
        
        // now we append it to all the handles
        this.element.find('.ui-slider-handle').each( function(k,v) {
          $(v).append($tip[k]);
        })
        
        // if this slider also has numbers, we'll make those into tips, too; by cloning and changing class.
        this.element.find('.ui-slider-number').each(function(k,v) {
          var $e = $(v).clone().removeClass('ui-slider-number').addClass('ui-slider-tip-number');
          $e.insertAfter($(v));
        });
        
        // when slider changes, update handle tip value.
        this.element.on('slidechange slide', function(e,ui) {
          $(ui.handle).find('.ui-slider-tip').text( ui.value );
        });
        
			}


		};

		$.extend(true, $['ui']['slider'].prototype, extensionMethods);


	})(jQuery);



//
//
//


/* ------------------------- */
/* demo stuff */
$(document).ready(function() {
  $('.slider, .slider2').slider({min:0,max:points,animate:true, value:8});
  $('.slider2').slider('pips', {rest:'number'});
});

