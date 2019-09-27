const max  = c => c.reduce((m,x) => x>m?x:m,-10)

const array_1  = [
    [
        [3,2,1],[1,3,2]
    ],
    [
        [3,1,3],[2,4,4]
    ],
    [
        [1,4,2],[2,2,1]
    ],
    [
        [3,2,1],[1,1,3]
    ],
    [
        [3,1,3],[2,4,4]
    ]
] //true test case

const array_2  = [
    [
        [3,2,1],[1,3,2]
    ],
    [
        [3,1,3],[2,4,4]
    ],
    [
        [0,0,0],[0,0,0]
    ],
    [
        [3,2,1],[1,1,3]
    ],
    [
        [3,1,3],[2,4,4]
    ]
] //false test case
const getDynamicArray = array => {
    var f = []
    for (var i =0;i<array.length;i++){
        if(i==0){
            f[0]=[
                [1,array[i][1][0]],
                [1,array[i][1][1]],
                [1,array[i][1][2]]
            ]
        }else{
            var c = f[i-1].map(x => x[1])
            f[i]=[
                [f[i-1][0][0]+(c.indexOf(array[i][0][0])>=0?1:0),array[i][1][0]],
                [f[i-1][1][0]+(c.indexOf(array[i][0][1])>=0?1:0),array[i][1][1]],
                [f[i-1][2][0]+(c.indexOf(array[i][0][2])>=0?1:0),array[i][1][2]]
            ]
        }
    }

    console.log(f)
    return f
} // BigO = n by n = length of array
//memory = n by n = length of array

const result = array => max((getDynamicArray(array)[array.length-1]).map(x => x[0]))==array.length?true:false // array solution -> true,false solution

console.log(result(array_1)) // should return true
console.log(result(array_2)) // should return false
