//-1------feetToMile--convert.

   function feetToMile(feet){
     var mile = feet / 5280;  // 1mile = 5280feet
     return mile;
  }

        //  var result = feetToMile(200000);
        //  console.log(result + " mile");

//-2---woodCalculator--problem.

   function woodCalculator(chair,table,bed){
        var chairNumber = chair * 1 ; // 1,3,5 means 1,3,5 cubic feet wood.
        var tableNumber = table * 3 ;
        var bedNumber = bed * 5 ;
        var totalNumber = chairNumber + tableNumber + bedNumber ;
        return totalNumber;
    }
                // var totalWoodNumber = woodCalculator(5,3,1);
                // console.log(totalWoodNumber + " cubic feet.");

//--3---brickCalculator--problem.


function brickCalculator (floorNumber){
    if(floorNumber <= 10){
        firstTenFloor = floorNumber;
        return firstTenFloor * 15 * 1000 ;
    }else if ((floorNumber > 10) && (floorNumber <= 20)){
        firstTenFloor = 10;
        tenToTwentyFloor = floorNumber - firstTenFloor;
        return ((firstTenFloor * 15 * 1000) + (tenToTwentyFloor * 12 * 1000));
    }else if (floorNumber > 20){
        firstTenFloor = 10;
        tweentyToMore = floorNumber - 20;
        return ((firstTenFloor * 15 * 1000) + (firstTenFloor * 12 * 1000) + (tweentyToMore * 10 * 1000))
    }
}
                // console.log(brickCalculator(9));



//--4---tinyFriend--problem.
      function tinyFriend(name){  
         var minName = name[0];
        for(var i = 0;i<name.length;i++){
        if(name[i]<minName)
            {
                minName = name[i];
            }
        }
             return minName;
    }
                
                    // var result = tinyFriend(['polas','rahman','ar']);
                    // console.log(result);
  