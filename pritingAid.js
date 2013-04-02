//sometimes I see a site that is unprintable because of too many elements, and this selects the main content I want to print.
//
//for example, in the jQuery website, I couldn't print because there was overlapping text
//(in url http://api.jquery.com/category/traversing/filtering/)
//so I copy-pasted this plugin,
//wrote $("#content").setDocumentBodyToOnlyThese() in the command line
//and printed
var app = (function ($,app) {
	$.fn.setDocumentBodyToOnlyThese = function () {
		return  $("body *").not(
					this.map( function () {
								return $(this).remove().appendTo("body")[0];
							}
					)
				).
				not(
					$("*", this)
				).
				remove();
	};

}(jQuery, app));