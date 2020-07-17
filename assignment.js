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
                var totalWoodNumber = woodCalculator(5,3,1);
                console.log(totalWoodNumber + " cubic feet.");

//--3---brickCalculator--problem.

function brickCalculator(number){
    var  oneFloor = 1000;
     if(brickCalculator.length <= 10){
         return number * oneFloor * 15; 
     }
     else if ((brickCalculator.length > 10) && (brickCalculator.length <=20)){
         return  number * oneFloor * 12;
     }
     else{
         return  number * oneFloor * 10;
     }

 }
        // var totalBrick = brickCalculator(50);
        // console.log(totalBrick + ' brick.');

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
  