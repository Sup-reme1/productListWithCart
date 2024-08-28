document.addEventListener('DOMContentLoaded', () => {
    
    // Product Constructor
    function Desserts(name, price, tag, iscart, count, countContainerId) {
    this.name = name;
    this.price = price;
    this.iscart = false;
    this.count = 0;
    this.tag = tag;
    this.countContainerId = countContainerId;
    };

    // Product Objects
    const waffle = new Desserts('Waffle', 6.50, 'img1', false);
    const crèmeBrûlée = new Desserts('Crème Brûlée', 7.00, 'img2', false);
    const macarone = new Desserts('Macaron Mix of Five', 8.00, 'img3');
    const tiramisu = new Desserts('Classic Tiramisu', 5.50, 'img4');
    const baklava = new Desserts('Pistachio Baklava', 4.00, 'img5');
    const pie = new Desserts('Lemon Meringue Pie', 5.00, 'img6');
    const cake = new Desserts('Red Velvet Cake', 4.50, 'img7');
    const brownnie = new Desserts('Salted Caramel Brownie', 5.50, 'img8');
    const pannaCotta = new Desserts('Vanilla Panna Cotta', 6.50, 'img9');

    // Product Array of objects
    const products = [waffle, crèmeBrûlée, macarone, tiramisu, baklava, pie, cake, brownnie, pannaCotta];
    console.log(products[2]);



    const productsTag = products.map(product => product.tag);
    // console.log(productsTag);

    productsTag.forEach(tag => {
        // var cart = document.getElementById(tag);
        // var productDetails = document.querySelector(`#${tag} img`)
        var cart = document.querySelector(`.${tag} .add-to-cart`);
        // console.log(cart);
        
        // Check for the clicked cart and display count
        cart.addEventListener('click', ()=>{
            console.log(`${tag} was clicked`);

            products.forEach(product => {
                // console.log(tag);
                if (product.tag === tag) {
                  console.log(product.name);
                  if (product.iscart === false) {
                    // Adjust the product properties when clicked
                    product.iscart = true;
                    addCart(product, cart);

                    // product.count += 1;

                    // // Display the count with nextElementSibling and hide the cart container
                    // cart.style.display = 'none';
                    // const nextSibling = cart.nextElementSibling;
                    // // console.log(nextSibling);
                    // number = nextSibling.querySelector('span');
                    // // console.log(number);
                    // number.textContent = product.count;
                    // nextSibling.style.display = 'flex';

                    // Hide the Cart container and show the count countainer using count-container label
                    // cart.style.display = 'none';
                    // const displayCountContainer = document.getElementById(product.countContainerId);
                    // number = displayCountContainer.querySelector('span');
                    // number.textContent = product.count;
                    // displayCountContainer.style.display = 'flex'                    

                  } else product.iscart = false;

                }
            });
        })

        var incrementIcon = document.querySelector(`.${tag} .increment`);
        // console.log(incrementIcon);

        incrementIcon.addEventListener('click', e => {
            products.forEach(product => {
                // console.log(product.tag);
                if(product.tag === tag){
                    // Increment Cart
                    addCart(product, cart);
                }
            })
        })

        var decrementIcon = document.querySelector(`.${tag} .decrement`);
        console.log(decrementIcon);

        decrementIcon.addEventListener('click', e => {
            products.forEach(product => {
                // console.log(product.tag);
                if(product.tag === tag){
                    // Decrement Cart
                    removeCart(product, cart);
                }
            })
        })





    })

    function addCart (product, cart) {
        // increment count
        product.count += 1;
        updateCart(product, cart);   
    }

    function removeCart (product, cart){
        product.count -= 1;
        updateCart(product, cart);
    }

    function updateCart(product, cart){
        // Display the count with nextElementSibling and hide the cart container
        cart.style.display = 'none';
        const nextSibling = cart.nextElementSibling;
        number = nextSibling.querySelector('span');
        number.textContent = product.count;
        nextSibling.style.display = 'flex';  

        // Display add-to-cart if the count is removed to zero
        if (product.count === 0){
            cart.style.display = 'flex';
            nextSibling.style.display = 'none'; 
        }      
    }

    // const gridBox = document.getElementById('container');
    // // console.log(gridBox);
    // gridBox.addEventListener('click', e => {
    //     console.log(e);
    // })

    // products.forEach(product => {
    //     console.log(product.tag)

    //     productId = product.tag.toString();
    //     console.log(typeof(productId));
        
    //     cart = document.getElementById(productId);
    //     console.log(cart);
    //     cart.addEventListener('click', () => {
    //         return true
    //     });
    //     return false;

    //     // document.getElementById(`${product.tag}`).addEventListener('click', ()=>{
    //     //     console.log('this is the product:',product.tag);
    //     // });

    // })

});