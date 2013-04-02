var app = (function ($) {
	function dl2obj (jQueryArr, dl) {
		var keys = $("dt",dl),
			values = $("dd",dl);
		return keys.map2obj(
			function (i) {
				return [[$(keys[i]).text(), $(values[i]).text()]];
			}
		);
	}
	
	function function2jQueryPlugin(func) {
		return function () {
			var args = Array.prototype.slice.call(arguments, 0);
			return func.apply(this, [this].concat(args));
		}
	
	}
	$.fn.dl2obj = function2jQueryPlugin(dl2obj);
	
	var testInherit = {
		function2jQueryPlugin : function2jQueryPlugin,
		dl2obj : dl2obj
	};

	if(app && app.testInherit)
		$.extend(app.testInherit,testInherit);
	else if (app)
		$.extend(app,{testInherit: testInherit});
	else
		app = {testInherit: testInherit};
	return app;
}(jQuery, app));