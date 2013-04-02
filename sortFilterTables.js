var app = (function ($,app) {
	
	function rowAtColumnKey(row, columnName){
		return $(row).
					children().
					eq(
						$(row).
							parent().
							parent().
							find("thead th").
							filter(function (i, th) { return $(th).html() === columnName; }).
							index()
					)[0];
				
	}

	function filterTable(jQueryTable, value, columnName){
		return jQueryTable.
					find("tbody tr").
					css("display", "none").
					filter(function (i, row) { console.log($(row).rowAtColumn(columnName).text());
								return  value === true ?
											true :
										value === false ?
											false :
										typeof value === "string" ?
											$(row).rowAtColumn(columnName).text() === value :
										typeof value === "function" ?
											value($(row).rowAtColumn(columnName)) :
										true;
							}
					).
					css("display","table-row");
	}
	
	$.fn.rowAtColumn = function (key) {
		return this.map( function () {
							return rowAtColumnKey(this, key);
						}
				);
	};
	$.fn.filterTable = app.function2jQueryPlugin(filterTable);

	var testInherit = {
		rowAtColumnKey : rowAtColumnKey,
		filterTable : filterTable
	};
	var publicVars = {};
	if (app){
		$.extend(app.testInherit,testInherit);
		$.extend(app,publicVars);
		
	}else
		app = {testInherit: testInherit};
	return app;
}(jQuery, app));