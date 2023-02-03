const shoppingCart=[
  {name:'shoe',price:1200,quantity:4},
  {name:'shirt',price:2200,quantity:5},
  {name:'pant',price:3700,quantity:6},
  {name:'belt',price:700,quantity:7},
]

function totalCost(products){
  let totalAmount=0
  for(let i=0;i<products.length;i++){
     const product=products[i];
     console.log(product)
     totalAmount=totalAmount+product.price
  }
  return totalAmount;
}
console.log(totalCost(shoppingCart));

function quantityCart(product_quantity){
  let totalSum=0;;
  for(let i=0;i<product_quantity.length;i++){
      const product=product_quantity[i];
      console.log(product);
      const productTotal=product.price*product.quantity;
      totalSum+=productTotal;
  }
  return totalSum;
}
console.log(quantityCart(shoppingCart));

//discountCalculation
function TicketPrice(TicketQuantity){
  const first_100Rate=100;
  const second_100Rate=90;
  const RestTicketRate=70;
  if(TicketQuantity<=100){
    const price=TicketQuantity*first_100Rate;
    return price;
  }else if(TicketQuantity<=200){
    const first_100Price=100*first_100Rate;
    const restTicketQuantity=TicketQuantity-100;
    const restTicketPrice=restTicketQuantity*second_100Rate;
    const totalPrice=first_100Price+restTicketPrice;
    return totalPrice;
  }else{
    const first100Price=100*first_100Rate;
    const second100Price=100*second_100Rate;
    const restTicketquantity=TicketQuantity-200;
    const restTicketPrice=restTicketquantity*RestTicketRate;
    const TotalCost=first100Price+second100Price+restTicketPrice;
    return TotalCost;
  }
}
console.log(TicketPrice(120));
//validateion

function add(num1,num2){
  if(typeof num1 !=='number' || typeof num2 !=='number') {
   return  'Please enter a  number'
  }
  else{
    return num1+num2
  }
  
}
let result=add(78,'90');
 result=add(89,90)
console.log(result)

let sum=0; 
for( let i = 0; i<=3;i++){ 
sum = sum + i; 
}
console.log(sum)