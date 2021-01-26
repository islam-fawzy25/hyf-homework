// Weather Wear 

function weatherwear(temperature){
    if(temperature >= 23 ){
        return "You should to wear short and Tshirt"
    }else{
        return "You should to wear Jacket and jeans"
    }
}

const clothesToWear = weatherwear(18);

console.log(clothesToWear)



