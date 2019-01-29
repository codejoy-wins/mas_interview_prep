function hashad(n){
    // return if number is harshad
    // num is hashad if num is divisiable by sum of digits
    // cal sum of digits
    // divide num by sum
    // if remainer 0, return true, else false
    console.log("-------")

    var s = n.toString();

    var sum = 0;
    for(var i =0; i < s.length; i++){
        sum += parseInt(s[i]);
    }
    // console.log(sum);
    var result = n % sum;
    if(result == 0){
        console.log(true);
        return true;
    }else{
        console.log(false);
        return false;
    }
    // replace with ternary operator
}

hashad(74);  // false
hashad(18);  // false

hashad(111); // true
