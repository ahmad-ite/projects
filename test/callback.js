// import { promises } from "fs";
// const promises=require('fs');

// callback funcs
callbackFunc=function(salary,printFunc){
    if (salary >1000){
        printFunc(salary)
    }
}

// var rr=callbackFunc(1004,(x)=>{
//     setTimeout(()=>{
//         console.log("hhh");
//         console.log(x);

//     },1000)
   
// })
// console.log("finish")


function readFile(filename, enc){
    return new Promise(function (fulfill, reject){
      fs.readFile(filename, enc, function (err, res){
        if (err) reject(err);
        else fulfill(res);
      });
    });
  }

 myPromiseFunc = function(value, cb){
     return new Promise(function(resolve, reject){
         if (value>500){
             cb(value);
              resolve("succ")
         }
         else{
              reject("fail");
         }

     });
 }

//  myPromiseFunc(600,(w)=>{
//      console.log(w)
//  })
//  .then((msg)=>{console.log(msg);})
//  .catch((msg)=>{console.log(msg);});

call=async function(salary){
     xx= await myPromiseFunc(salary,(w)=>{});
     console.log(xx)
     console.log(salary)
 }
 call(700);
 arr=["ahmad","mhmd"]
 arr1={}
 arr1["f"]="fesal"
 arr1["a"]="ahmad"
 counter=0
 loops=function(){
    arr.forEach(element => {
        
        console.log("the "+counter+" element is "+element)
        counter++
    });

    for(var key in arr1) {
        console.log(arr1[key])
    }
}
// loops()


sort=function(array){
    len=array.length
    console.log("leng is  "+len)
    if (len<2)
      return array

    for (let index = 0; index <len; index++) {
        for (let index1 = 1; index1 < len-index; index1++) {
            if (array[index1 -1]>array[index1]){
                temp=array[index1]
                array[index1]=array[index1-1]
                array[index1-1]=temp

            }
            
        }
     
    }
    return array
     
    
}

freq=function(array){
    /*
    */
     ret_dict={}
     for (let index = 0; index <array.length; index++) {
         if (array[index] in ret_dict)
             ret_dict[array[index]]++
        else{
            ret_dict[array[index]]=1
        }
     }
     return ret_dict
}

optFreq=function(array){
     ret_dict={}
     for (let index = 0; index <array.length; index++) {
        let element=array[index]
        if ( ret_dict[])
             ret_dict[array[index]]++;
        else {
            ret_dict[array[index]]=1;
        }
     }
     return ret_dict
}


printArray=function(arr){
    arr.forEach(element => {
        console.log(element)
    });
}
a=[1,4,3,2,5,7,4,2,7,7,0]
// printArray(sort(a))
ret_dict=freq(a)
console.log(ret_dict)