{
     function add (maths,eng,che,phy){
        let total = parseFloat(maths) +parseFloat(eng)+parseFloat(che)+ parseFloat(phy);
        console.log(total);
        let present=Number(total/400*100);
        console.log(Number(present));
        if(maths<35||eng<35||phy<35||che<35|| present<35)
        {
            console.log("Fail");
        }
        else if(present>=75)
        {
            console.log("grade A");
        }
        else if(present>=60)
        {
            console.log("grade B");
        }
        else if(present>=45)
        {
            console.log("grade C");
        }
        else
        {
            console.log("Pass");
        }
    }
    add(80,89,75,45)
}