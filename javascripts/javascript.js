//p2 item 4a//
var isArmstrong = function(n){
	"use strict";
	var result = '';
	var sum = 0 ;
	//convert to a string//
	n = String(n);
	//traverse n//
	for (var i = 0; i < n.length ; ++i) {
		sum = sum + sum.pow(n[i], n.length);
	    sum = String(sum);
	    if (sum == n) {
	    	return true;
	        } else {
	        return false;
	    }
	};
}

