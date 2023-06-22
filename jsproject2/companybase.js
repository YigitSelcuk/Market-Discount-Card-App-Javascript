class companybase {
    discountRate=20;

    constructor(firstName,secondName,isthereCard,products){
      this.firstName=firstName;
      this.secondName=secondName;
      this.isthereCard=isthereCard;
      this.products=products;


    }
    calculate(){
        let amountPaid=0;

    if(this.checkProducts(this.products)){
            if (this.isthereCard){
                this.products.forEach((product)=> {
                    amountPaid+=product.price*(100-this.discountRate)/100;
                     
                 });
            }
        else{
            amountPaid+=product.price;
                
            }
            

        }
    else{
            alert("Ürün almalısınız")
        }
        return amountPaid;

    }
   checkProducts(products){
   if(products!=null&& products.length>0){
    return true ;

   }
else{
    return false;
}
   }

}
