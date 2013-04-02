(function ($) {
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
			return func.apply([this].concat(arguments));
		}
	
	}
	$.fn.dl2obj = function2jQueryPlugin(dl2obj);
}(jQuery));