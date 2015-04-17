//p1 A
var tNumsPlus5 = function(tnum){
    "use strict";
    //declare local variables
    var result = "", digit;
    //convert tnum to string
    tnum = String(tnum);
    //traqverse string and process digits
    for (var i = 0; i < tnum.length; ++i) {
    	//process the current digit
    	digit = (parseInt(tnum[i]) + 5) %10;
        //add digit to result string
        digit = String(digit);
        result = result + digit;
    };
    return result;
};

//p1 B
var isArmstrong = function(somenum){
    "use strict";
    //declare local variables
    var result = '';
    var text = "";
    somenum = String(somenum);
    for (var index = 0; index < somenum.length; ++index){
       text += somenum[0]*somenum[0]*somenum[0]+somenum[1]*somenum[1]*somenum[1]+somenum[2]*somenum[2]*somenum[2]; 
       text = String(text);
       if (text == somenum){
        return true;
        } else {
        return false;
        }
    };
}; 

//p1 C
var allArmstrong3s = function() {
    //declare local variables and generate numbers
    var result = '';
    for (var k = 100; k <= 999; ++k) {
        //test
        if (isArmstrong (k))
            result = result + k + ' ';
    }
    return result;
};

//p1 D
var formatTelNum = function(n){
    //declare local variables
    var result = '(';
    // convert n to a string
    n = String(n);
    result = result + n[0] + n[1] + n[2] + ') ' + n[3] + n[4] + n[5] + '-' + n[6] + n[7] + n[8] + n[9];
    return result;
}
// this is my path /home2/tracyw/public_html/281