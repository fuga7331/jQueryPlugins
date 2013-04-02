function Test() {
	$.extend(this, app.testInherit);
	this.test1 = function () {
		return  this.objEq(this.keyValueArray2obj( [[]] ),{}) &&
				this.objEq(this.keyValueArray2obj( [[1,2],["a","b"]] ), {"1": 2, "a": "b"}) &&
				this.objEq($(["all","ppl"]).map2obj(function (a,c) {return [[c, c]] }),
					  {"all": "all", "ppl": "ppl"}) &&
				true;
	};
	this.test2 = function () {
		return this.objEq($().dl2obj($("<dl><dt>1</dt><dd>2</dd><dt>3</dt><dd>4</dd></dl>")),
						  {"1":"2", "3":"4"}
				);
	};
	this.test3 = function (table, columnName, expectedColumnIndex, returnTheTd) {
		if(returnTheTd){
			return $("tbody tr", table).
					rowAtColumn(columnName);
		}
		return $("tbody tr", table).
					rowAtColumn(columnName).all(
						function () {
							return $(this).index() === expectedColumnIndex;
						}
					);
	};
}