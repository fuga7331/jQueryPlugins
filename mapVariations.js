var app = (function ($,app) {
	function negate(pred) {
		return function () {
			return ! pred.apply(this, arguments);
		}
	}

	function objEq(obj1,obj2) {
		return  Object.keys(obj1).length === Object.keys(obj2).length &&
				$(Object.keys(obj1)).
					all(function () {
							return obj1[this] === obj2[this];
						}
					)
	}
	function createObj(key, value) {
		var r = {};
		r[key] = value;
		return r;
	}
	//[[key_1, value], [key_2, value]] to {key_1: value, key_2: value}
	function keyValueArray2obj( arr ) {
		return $(arr).
					map2obj( function (i, key_value) {
								return createObj(key_value[0], key_value[1]);
						}
					);
	}
	// tests for equality of all elements in array.
	// the default comparison function compares key-value mappings
	$.fn.objEq = function(equalityPredicate) {
		 var tmp = this[0];
		 equalityPredicate = equalityPredicate || objEq;
		 return this.all(function (i,v) {
							return equalityPredicate(tmp, v);
						}
				);
	};
	
	//for all x in jQuery array : predicate(x)
	$.fn.all = function (pred) {
		return !this.is( negate(pred) );
	};
	
	//map over array and return an object
	//return value of func should be either:
	//	object such as {key: value, anotherKey: value}
	// or
	//	array of arrays of length 2 such as [[key, value],
	//										 [anotherKey, value]]
	$.fn.map2obj = function(func){
		var result = {};
		this.map( function (a,b) { return [func.apply(this,[a,b])]; } ).
			each(function (i,v) {
					if(Array.isArray(v)){
						//[[key, value], [key, value]]
						v = keyValueArray2obj(v);
					}
					
					$.extend(result,v);
				}
			);
		return result;
	};

	
	var testInherit = {
		keyValueArray2obj : keyValueArray2obj,
		createObj : createObj,
		objEq : objEq,
		negate : negate
	};	
	var publicVars = {};
	if (app){
		$.extend(app.testInherit,testInherit);
		$.extend(app,publicVars);
		
	}else
		app = {testInherit: testInherit};
	return app;
}(jQuery, app));