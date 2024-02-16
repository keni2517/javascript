{
    let amt , dis5,bill , gst ,netbill;
    function add(r , t)
    {
        amt = r *t;
        dis5 = amt*5/100 ;
        bill = amt - dis5;
        gst = 18/100 * bill;
        netbill = bill + gst;
        console.log("amount :", amt);
        console.log("Discont 5:",dis5);
        console.log("Bill :",bill);
        console.log("Gst 18:",gst);
        console.log("Totalbill",netbill);
    }
   let y=add(50,200)
}