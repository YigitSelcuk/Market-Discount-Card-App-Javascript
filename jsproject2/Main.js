let message =`
Welcome to Company
Do you have a Discount Card ?

1-Yes
2-No

`;

const products =[
    {  
        productName:"Milk",
        price:20,
    },
    {
        productName:"Meat",
        price:400,
    }
]
const cardNumbers=["123","1234","12345","123456","1234567","12345678","123456789"]
let value = confirm(message);
let amount;

if(value==true){
    let cardNumber= prompt("Write Card Number")
    if(cardNumbers.includes(cardNumber)){
        let firstName =prompt("Write a Name");
        let secondName =prompt("Write a Second Name");
       
        const customer =new Customers(firstName,secondName,value,products);
         amount= customer.calculate();
        alert(
            `Customer Information : ${firstName} ${secondName}
               Amonut Price: ${amount}
        
        `);
    }
    else{
      
        alert("No Number")
        value=false;
        let firstName =prompt("Write a Name");
        let secondName =prompt("Write a Second Name");
        const customer =new Customers(firstName,secondName,value,products)
      
       amount=customer.calculate();
       alert(
        `Customer Information : ${firstName} ${secondName}
           Amonut Price: ${amount}
    
    `);
    }
    


}
else{
    
    

}