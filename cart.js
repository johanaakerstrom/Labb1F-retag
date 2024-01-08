let shoppingCart = [];
    const totalPriceElement = document.getElementById('totalPrice');
    
    function addToCart(index) {
        
        shoppingCart.push({
            name: MenuItemList[index].foodName,
            price: MenuItemList[index].price
        });
        
        displayShoppingCart();
    }
    
    const displayShoppingCart = () => {
        const MenuItem = document.getElementById('shoppingCartItem');
        MenuItem.innerHTML = '';
        let totalCartPrice = 0;


        shoppingCart.forEach((item) => {
            const cartItemDiv = document.createElement('div');
            cartItemDiv.innerHTML = `<p style="color: wheat;">${item.name} ${item.price}:-</p>`;
            shoppingCartItem.appendChild(cartItemDiv);
            totalCartPrice += item.price;
            console.log(item.name)
        });

        totalPriceElement.textContent = `Total: ${totalCartPrice}:-`;
    };

    document.addEventListener('DOMContentLoaded', (event) => {
    });
    

class MenuItem{
   constructor ({course, foodName, price, description}){
    this.course = course;
    this.foodName = foodName;
    this.price = price;
    this.description = description;
   }

} 

let Förrätt = new MenuItem({
 course: "Förrätt",
 foodName: "Råbiff",
 price: 190,
 description: "Nötinnanlår från Dalsjöfors med picklade lingon, cornichons, Västerbottenost emulsion, blomkål, silverlök & potatischips"
});

let Förrätt2 = new MenuItem({
    course: "Förrätt",
    foodName: "Fisk och musselsoppa anno 1999",
    price: 185,
    description: "Fisk-och musselsoppa med saffran, torsk, lax, räkor, blåmusslor & strimlade grönsaker"
})

let Förrätt3 = new MenuItem({
    course: "Förrätt",
    foodName: "Pilgrimsmusslor",
    price: 190,
    description: "Palsternacks puré, stekt bacon, picklad steklök & rostade pinjenötter"
})

let Varmrätt1 = new MenuItem ({
    course: "Varmrätt",
    foodName: "Ostburgare 150g",
    price: 150,
    description: "Ostburgare med höggrevskött som serveras med vår hemmagjorda majonäs och västerbotten ost"
})

let Varmrätt2 = new MenuItem ({
    course: "Varmrätt",
    foodName: "Räksmörgås",
    price: 239,
    description: "Räksmörgås som serveras på vår hemmabakade rågbröd med handskalade räkor"
})

let Varmrätt3 = new MenuItem ({
    course: "Varmrätt",
    foodName: "Ryggbiff",
    price: 289,
    description: "Serveras med brynt lökpuré, persiljerot, ostronskivling, rödvinsås med tryffel & friterad potatiskaka"
})

let Varmrätt4 = new MenuItem ({
    course: "Varmrätt",
    foodName: "Stor råbiff",
    price: 329,
    description: "Nötinnanlår från Dalsjöfors med picklade lingon, cornichons, Västerbottenost emulsion, blomkål, silverlök & potatischips Serveras med pommes frites"
})

let Dessert1 = new MenuItem({
    course: "Dessert",
    foodName: "Crème Brûlée",
    price: 145,
    description: "Crème Brûlée med hallon & björnbärssorbet & mini munk"
})

let Dessert2 = new MenuItem({
    course: "Dessert",
    foodName: "Vitchokladmousse",
    price: 155,
    description: "Med blodapelsinsorbet, brownie, havre crunch, saltrostade hasselnötter"
})

let Dessert3 = new MenuItem({
    course: "Dessert",
    foodName: "Tryfflar",
    price: 55,
    description: "Chokladtryffel, citrontryffel & dulcey"
})

let Kidsmenu1 = new MenuItem({
    course: "Barnmeny",
    foodName: "Pannkakor",
    price: 95,
    description: "Pannkakor med grädde & sylt"
})

let Kidsmenu2 = new MenuItem({
    course: "Barnmeny",
    foodName: "Köttbullar",
    price: 95,
    description: "Köttbullar med gräddsås, lingon, gurka & kokt potatis"
})

let Kidsmenu3 = new MenuItem({
    course: "Barnmeny",
    foodName: "Fisk och musselsoppa",
    price: 155,
    description: "Brygghusets fisk och musselsoppa med saffran, lax, torsk, räkor, musslor & krispiga grönsaker"
})

let Kidsmenu4 = new MenuItem ({
    course: "Barnmeny",
    foodName: "Vaniljglass",
    price: 65,
    description: "Med chokladsås & maränger"
})

let MenuItemList = [Förrätt, Förrätt2, Förrätt3, Varmrätt1, Varmrätt2, Varmrätt3, Varmrätt4, Dessert1, Dessert2, Dessert3, Kidsmenu1, Kidsmenu2, Kidsmenu3, Kidsmenu4]

console.log(MenuItemList)
