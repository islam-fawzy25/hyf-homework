console.log('yes')


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
                }/*else if(canBuyMoreCandy()== true){
                   return console.log('You can buy more, so please do!')

                }else{
                  return  console.log('Enough candy for you!')

                }*/

}

//boughtCandyPrices.forEach(canBuyMoreCandy);

function canBuyMoreCandy (){
    let totalPrice ='';

//totalPrice += items


    for ( let i = 0 ; i < boughtCandyPrices.length ;i++ ){
        totalPrice += boughtCandyPrices[i] 
        
    }   // i know (for ) not working  also  with foreach so 
    // i will tried again with while and push again or if you can tell me please why its not working
   // return console.log(totalPrice)

    
    if(amountToSpend >totalPrice)
        {
        true;
        console.log('You can buy more, so please do!')

       return 
    }else{
        console.log('Enough candy for you!')

        false ;

        return 
    } 
    
    
}


//console.log(amountToSpend)

addCandy('Sweet',20);
addCandy('Toffee',10);
addCandy('Chocolate',10);
addCandy('Chewing-gum',500);
//addCandy('Chewing-gum',50000);


console.log(boughtCandyPrices);
canBuyMoreCandy();

//console.log(totalPrice)
//console.log(boughtCandyPrices[i])