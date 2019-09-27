const array_1 = [
    [3,2,5],
    [2,1,7],
    [3,1,4],
    [1,6,5]
]
const sum_1 = 14
//true test case
const array_2 = [
    [1,3,5],
    [2,4,6],
    [7,3,1]
]
const sum_2 = 11
//false test case
const getDynamicArray = (a,max) =>{
    var x = [0]
    for(var i=0;i<a.length;i++){
        const temp_0 = x.reduce((t,c) => {  if(c+a[i][0]<max)
                                                t.push(c+a[i][0])
                                            return t
                                        },[])
        const temp_1 = x.reduce((t,c) => {  if(c+a[i][0]<max)
                                                t.push(c+a[i][1])
                                            return t
                                        },[])
        const temp_2 = x.reduce((t,c) => {  if(c+a[i][0]<max)
                                            t.push(c+a[i][2])
                                            return t
                                        },[])
         x = [...new Set([...temp_0,...temp_1,...temp_2])] // array -> unique array
         console.log(x)
    }
    return x
}
//bigO = nm by n = input_array length , m =  target value

const checkSum = (a,max) => getDynamicArray(a,max).indexOf(max) >=0?true:false

console.log(checkSum(array_1,sum_1)) // should be true

console.log(checkSum(array_2,sum_2)) // should be false