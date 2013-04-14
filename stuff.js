$.fn.concat = function (val) {
            return $(
                    this.
                    toArray().
                    concat(val)
            );
};

$.fn.do = function (proc) {
    return this.
            concat(proc.
                       apply(this[this.length - 1],[this])
                  ); 
};

$.fn.don = function (n, proc) {
    return n <= 0 ? this : this.do(proc).don(n-1, proc);
};
function fiboStack(n){
    return $([0,1]).
            don(n-1, 
               function (stack) {
                return stack.get(-1) + stack.get(-2);
            });
}
function fibo(n){
    return fiboStack(n)[n];
}
/*
function log(x){
	if($("#log").length <= 0){
			$("<div>").attr("id", "log").appendTo("body");
	}
	$("<p>").text(x).appendTo("#log");
}
$(document).ready( function () {
	log(fibo(0));
	log(fibo(1));
	log(fibo(2));
	log(fibo(3));
	log(fibo(4));
	log(fibo(5));
});
*/