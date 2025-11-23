//1//
let nums =[10,3,7,20,13,2];

let squares = nums.map((n) => n*n);
console.log(squares);

//2//
let primes = nums.filter((n)=>{
    if (n<2) return false;
    for(let i=2;i<Math.sqrt(n);i++){
        if(n%i === 0)return false;
    }
    return true;
});
console.log(primes);

//3//

let total = nums.reduce((acc,curr) => acc + curr,0 );
console.log(total);

//4//

let descending = nums.sort((addEventListener,b) => b-a);
console.log(descending);

