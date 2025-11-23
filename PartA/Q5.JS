let user ={
    name : "Alice",
    address:{
        city:"Bengaluru",
        pin:56001,
        geo:{lat:11.22,lgn:77.33}
    }
};

let {
    address: {
        city,
        geo:{lat,lng}
    }
} = user;

console.log(city);
console.log(lat);
console.log(lng);