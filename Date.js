<body>
    <p id="date">
        Date:
    </p>
    <script>
   // #https://www.facebook.com/permalink.php?story_fbid=623985158490864&id=100026381556272
    //# suscribed by chandresh joshi
    //creating the new date object
    /*var date=new Date(); 
    console.log(date)
    document.write(date)
    console.log("****************")
    console.log('day',date.getDay())
    console.log('day',date.getHours())
    console.log("****************")
    document.write("****************")
    var cd =new Date(2020,11,5,10,33,30,0)
    document.write(cd)*/
    var date=new Date();
    function getdate(date)
    {
        var day=date.getDay();
        var month=date.getMonth();
        month+=1;
        var date=date.getDate();
        var todate="Day: "+day+" Date: "+date+" Month: "+month ;
        document.getElementById("date").innerHTML=todate;
    }
    getdate(date);
    </script>
</body>
