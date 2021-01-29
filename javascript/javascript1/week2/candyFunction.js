// Candy Calculater



const boughtCandyPrices =[];
const pricePerGram = [0.5,0.7,1.1,0.03];
var amountToSpend = Math.random() *100 ;

function addCandy(candyType,weight){

    if(candyType =='Sweet'){
    const candyPrice = weight * pricePerGram[0];
     boughtCandyPrices.push(candyPrice);
    }else if(candyType =='Chocolate'){
        const candyPrice = weight * pricePerGram[1];
         boughtCandyPrices.push(candyPrice);
        }else if(candyType =='Toffee'){
            const candyPrice = weight * pricePerGram[2];
             boughtCandyPrices.push(candyPrice);
            }else if(candyType =='Chewing-gum'){
                const candyPrice = weight * pricePerGram[3];
                  boughtCandyPrices.push(candyPrice);
                }
            }

function canBuyMoreCandy (){

let totalPrice = 0 ;

    for ( let i = 0 ; i < boughtCandyPrices.length ;i++ ){
        totalPrice  +=  boughtCandyPrices[i] ;
    } 

    if( amountToSpend < totalPrice  )
        {
        true;
        console.log('You can buy more, so please do!');
       return ;
    }else{
        console.log('Enough candy for you!');
        false ;
        return ;
    }    
}


//console.log(amountToSpend)
addCandy('Sweet',20);
addCandy('Toffee',10);
addCandy('Chocolate',15);
addCandy('Chewing-gum',500);
//addCandy('Chewing-gum',50000);

console.log(boughtCandyPrices);
canBuyMoreCandy();





