 //////sum of the all elements
// var a=[3,2,5,6,7,8,1]
// var i=0
// var b=[]
// sum=0
// while(i<a.length){
//     sum=sum+a[i]
//     b.push(sum)
//     i=i+1 
// }
// console.log(sum)
// console.log(b)





//////even or odd number///////////
// var a=[2,3,4,5,2,3,8,9]
// for(i=0;i<a.length;i++){
//     if(a[i]%2==0){
//         console.log(a[i],"even num")
//     }else{
//         console.log(a[i],"odd")
//     }
// }



// //////// lenght of the Problem
// var num=[2,3,4,5,6,7,8,9]
// c=0                                     //o//p==8
// for(i=0;i<num.length;i++){
//     c=c+1
// }console.log(c)





// //////Max number Problem
// var num=[2,3,4,5,6,7,8,9,5,2,3,1,0]
// max=0                                                //o//p==9
// for(i=0;i<num.length;i++){
//     if(max<num[i]){
//         max=num[i]
//     }
// }console.log(max)



/////////// sum of Nested Array Problem
// let a=[4,9,[3,6,[5,0],2]]
// sum=0
// for (var i=0;i<a.length;i++){
//     if(Array.isArray(a[i])){
//         for(var j=0;j<a[i].length;j++){
//             if(Array.isArray(a[i][j])){
//                 for(var k=0;k<a[i][j].length;k++){
//                     sum=sum+a[i][j][k]
//                 }
//             }else{
//                 sum=sum+a[i][j]
//             }
//         }
//     }else{
//         sum=sum+a[i]
//     }

// }
// console.log(sum)