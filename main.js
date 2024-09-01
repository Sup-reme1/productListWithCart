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
                  if (product.iscart === false) {
                    // Adjust the product properties when clicked and update object properties
                    product.iscart = true;                    
                    addCart(product, cart);

                    // Update Aside container
                    updateCountContainer('order-cart')                

                  } 
                //   else product.iscart = false;
                }
            });

            // // setInterval(updateCountContainer, 1000);
        })

        var incrementIcon = document.querySelector(`.${tag} .increment`);
        // console.log(incrementIcon);
        incrementIcon.addEventListener('click', e => {
            products.forEach(product => {
                // console.log(product.tag);
                if(product.tag === tag){
                    // Increment Cart
                    addCart(product, cart);
                    // Update Aside container
                    updateCountContainer('order-cart');
                }
            })
        })

        var decrementIcon = document.querySelector(`.${tag} .decrement`);
        decrementIcon.addEventListener('click', e => {
            products.forEach(product => {
                // console.log(product.tag);
                if(product.tag === tag){
                    // Decrement Cart
                    removeCart(product, cart);
                    // Update Aside container
                    updateCountContainer('order-cart');

                };                    
            })
        })

        confirmOrder = document.querySelector('#btn');
        confirmOrder.addEventListener('click', ()=> {
          confirmOrderSection = document.querySelector('.order-confirm-section');
          fillConfirmOrder();
          updateCountContainer('order-confirm-section');
          confirmOrderSection.style.display = 'block';
        })

    })



    function fillConfirmOrder(){
        const total = document.querySelectorAll('.order-amount')[1];
        console.log(total);
        total.textContent = `$${sumTotal()}`;


    }

    // Function to update aside cart container
    function updateCountContainer(containerId){
        // Updating the selected product inside Order container
        var count = 0;
        const orderContainer = products.filter(product => product.iscart === true);

        orderContainer.forEach(product => {
            const asideEmptyContainer = document.querySelector('.empty-cart');
            // const nextSibling = asideEmptyContainer.nextElementSibling;
            // const asideOrderContainer = document.querySelector('.order-cart');
            const asideOrderContainer = document.querySelector(`.${containerId}`);
            const orderSpan = asideOrderContainer.querySelector('span');

            // Display and hide the aside container
            asideEmptyContainer.style.display = 'none';
            asideOrderContainer.style.display = 'block';

            // Display the total count of items
            count += product.count;
            // console.log(nextSibling);
            if(containerId === 'order-cart') orderSpan.textContent = count;

            // Selecting List container
            const ulList = asideOrderContainer.querySelector('ul');

            // Check for Existing list
            var existingLi = ulList.querySelector(`li[data-id = '${product.tag}']`);
            if (existingLi) {
              // Select the Elements in existingLi
              const pElement = existingLi.querySelector("p");
              const h2Element = existingLi.querySelector("h2");
              const bElement = existingLi.querySelector("b");

              // If all the product is removed, Exit the container
              if (product.count === 0) {
                existingLi.remove();
                product.iscart = false;
                checkContainer(asideEmptyContainer, asideOrderContainer);
              }

              // Write inside the Elements in existingLi
              pElement.textContent = `${product.count}x`;
              h2Element.textContent = `@$${product.price}`;
              bElement.textContent = `$${total(product)}`;
            } else {

              // Creating a li element for the selected product
              var li = document.createElement("li");
              var div = document.createElement("div");
            //   Conditional statement to check which container to populate
              if (containerId === 'order-cart'){
                  li.setAttribute("class", "items");
            } else{
                li.setAttribute("class", "items message-items");
                // div.setAttribute('class', 'tumbnails-flex');
                // tumbnailImg = document.createElement('img');
                // tumbnailImg.setAttribute('src', 'assets/images/image-tiramisu-thumbnail.jpg')
                // tumbnailImg.setAttribute('class', 'tumbnails');
                // div.append(tumbnailImg);
            }

              li.setAttribute("data-id", product.tag);
              
              var h1Element = document.createElement("h1");

              var divQty = document.createElement("div");
              divQty.setAttribute("class", "items-qty-price");
              var pElement = document.createElement("p");
              var h2Element = document.createElement("h2");
              h2Element.setAttribute("class", "item-price");
              var bElement = document.createElement("b");
              bElement.setAttribute("class", "item-total");

              var imgElement = document.createElement("img");
              imgElement.setAttribute(
                "src", "assets/images/icon-remove-item.svg"
              );

              // Creating Data element for the list
              var h1Data = document.createTextNode(product.name);
              var pData = document.createTextNode(`${product.count}x`);
              var h2Data = document.createTextNode(`@$${product.price}`);
              var bData = document.createTextNode(`$${total(product)}`);

              // Appending Textnode to elements
              h1Element.append(h1Data);
              pElement.append(pData);
              h2Element.append(h2Data);
              bElement.append(bData);

              // Appending element to DIVQTY
              divQty.append(pElement);
              divQty.append(h2Element);
              divQty.append(bElement);

              // Appending product data to DIV container
              div.append(h1Element);
              div.append(divQty);

              // Appending Elements to Li
              li.append(div);
              li.append(imgElement);

              // Appending the Li to ul list
              ulList.append(li);

            //   Event listener for he cancle img created in the list
              var cart = document.querySelector(`.${product.tag} .add-to-cart`);
              li.querySelector('img').addEventListener('click', ()=>{
                product.iscart = false;
                product.count = 0;
                li.remove();
                updateCart(product, cart);
                checkContainer(asideEmptyContainer, asideOrderContainer);
              })


              
              
            }

            // Total section
            // get the class id of total section and write inside the total element
            const orderTotal = document.querySelector('.order-total');
            var h1Total = orderTotal.querySelector('h1');
            h1Total.textContent = `$${sumTotal()}`;
            orderTotal.append(h1Total);

        })
    }

    function checkCancleBtn(tag){
        // // const orderContainer = document.querySelector('.order-cart');
        // var orderList = document.querySelector(`li[data-id = '${tag}']`);
        // var cancleBtn = orderList.querySelector(img);
        // console.log(cancleBtn);
        // cancleBtn.addEventListener('click', ()=>{
        //     orderList.remove();
        // })
        // console.log(orderList);
        // const cancleBtn = orderList.querySelector('img');
        // cancleBtn.addEventListener('click', ()=>{
        //   console.log('here');
        //   console.log(product.name);
        //   existingLi.remove();
        // })
    }

    // function to check if the aside section is removed entirely 
    function checkContainer(asideEmptyContainer, asideOrderContainer){
        const checkIstrue = products.filter(product => product.iscart === true); 
        // Check if OrderContainer array become empty
        console.log(checkIstrue);
        if(checkIstrue.length === 0){
            // Display and hide the aside container
            asideEmptyContainer.style.display = 'grid';
            asideOrderContainer.style.display = 'none';
        }
    };


    // Function to sum overall total for the Aside section
    function sumTotal(){
        let sum = 0;
        const totalSum = products.filter(product => product.iscart === true);
        totalSum.forEach(product =>{
            sum += total(product);
        });
        return sum;
    };

    // Function to sum each total of products in the Aside section
    function total (product){
        return product.price * product.count;
    }

    // Function to increment products in Add-to-cart
    function addCart (product, cart) {
        // increment count and update object properties
        product.count += 1;
        updateCart(product, cart);   
    }

    // Function to decrement products in Add-to-cart
    function removeCart (product, cart){
        // update object properties
        if (product.count === 0){
            product.count = product.count
        } else{
            product.count -= 1;
        }

        updateCart(product, cart);
    }

    // Function to update Add-to-cart data
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

});