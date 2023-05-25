const product = [
    {
        id: 0,
        image: 'atti-vayo.jpg',
        title: 'Atti Vayo- Albatross',
        price: 3000,
    },
    {
        id: 1,
        image: 'guerrilla.jpg',
        title: 'Guerrilla- Rai ko Ris',
        price: 2500,
    },
    {
        id: 2,
        image: 'the-na.jpeg',
        title: 'The New Abnormal- The Strokes',
        price: 5000,
    },
    {
        id: 3,
        image: 'the-bends.png',
        title: 'The Bends- Radiohead',
        price: 2000,
    },
    {
        id: 4,
        image: 'LC.jpeg',
        title: 'London Calling- The Clash',
        price: 1500,
    },
    {
        id: 5,
        image: 'elephant.png',
        title: 'Elephant- The White Stripes',
        price: 3000,
    },
    {
        id: 6,
        image: 'thebalcony.jpg',
        title: 'The Balcony- Catfish and The Bottlemen',
        price: 2000,
    },
    {
        id: 7,
        image: 'iti.png',
        title: 'Is This It- The Strokes',
        price: 4000,
    }
];
const categories = [...new Set(product.map((item)=>
    {return item}))]
    let i=0;
document.getElementById('root').innerHTML = categories.map((item)=>
{
    var {image, title, price} = item;
    return(
        `<div class='box'>
            <div class='img-box'>
                <img class='images' src=${image}></img>
            </div>
        <div class='bottom'>
        <p>${title}</p>
        <h2>Nrs. ${price}.00</h2>`+
        "<button onclick='addtocart("+(i++)+")'>Add to cart</button>"+
        `</div>
        </div>`
    )
}).join('')

var cart =[];

function addtocart(a){
    cart.push({...categories[a]});
    displaycart();
}
function delElement(a){
    cart.splice(a, 1);
    displaycart();
}

function displaycart(){
    let j = 0, total=0;
    document.getElementById("count").innerHTML=cart.length;
    if(cart.length==0){
        document.getElementById('cartItem').innerHTML = "Your cart is empty";
        document.getElementById("total").innerHTML = "Nrs. "+0+".00";
    }
    else{
        document.getElementById("cartItem").innerHTML = cart.map((items)=>
        {
            var {image, title, price} = items;
            total=total+price;
            document.getElementById("total").innerHTML = "Nrs. "+total+".00";
            return(
                `<div class='cart-item'>
                <div class='row-img'>
                    <img class='rowimg' src=${image}>
                </div>
                <p style='font-size:12px;'>${title}</p>
                <h2 style='font-size: 15px;'>Nrs. ${price}.00</h2>`+
                "<i class='fa-solid fa-trash' onclick='delElement("+ (j++) +")'></i></div>"
            );
        }).join('');
    }

    
}