{
    function add (year){
        if ((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0)) {
           console.log("leap year")
        } else {
            console.log("not a leap year.");
        }
    
    }
    add(2024);
}