// let str="my name is mukesh and also is"
// console.log(str.indexOf("is","kl"))

// ---------------string starts with aspecified character-----------------------------
// let x=["hellow","world","this","is","a","test"]
// for(i=0;i<x.length;i++){
//     if(x[i].startsWith("h")){
//         console.log(x[i])
//     }
// }


// -------------------------------------------------------------------------------
function str(arr){
    const res=[];
    for(i=0;i<arr.length;i++){
res.push(arr[i].slice(0));
    }
    return res;
}
const res3=str(["hellow"])
console.log(res3)



// -------------------------exclue specific substing method----------------------------------------------------
function str(arr,substring){
    const res=[];
    for(i=0;i<arr.length;i++){
        if(!arr[i].includes(substring))
res.push(arr[i]);
    }
    return res;
}
const res2=str(["hellow","world","this","is","a","test"],"o");
console.log(res2)



// ------------------------------elxcusive  first character of string array--------------------------------------------
// function str(arr,substring){
//     const res=[];
//     for(i=0;i<arr.length;i++){

// res.push(arr[i].at(0));
//     }
//     return res;
// }
// const res4=str(["hellow","world","this","is","a","test"],"o");
// console.log(res4)
