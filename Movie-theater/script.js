let allTotal = 0;

function watchThisMovie(element) {  
    let mainEl = element.closest('.item-container');
    let price = mainEl.querySelector('.price').innerText;
    let name = mainEl.querySelector('h3').innerText;
    let quantity = mainEl.querySelector('input').value;
    let cartItems = document.querySelector('.cart-items');

    if(parseInt(quantity) > 0) {

        price = price.substring(1);
        price = parseInt(price);

        let total = price * parseInt(quantity);

        allTotal += total;

        cartItems.innerHTML += `<div class="cart-single-item">
                                    <h3>${name}</h3>
                                    <p>&nbsp$${price} x ${quantity} = $<span>${total}</span></p>
                                    &nbsp
                                    <button onClick="removeFromCart(this)" class="button5 remove-item">Delete item</button>
                                </div>`;

        document.querySelector('.cart-total').innerText = `Total: $${allTotal} `;

        element.innerText = 'Added';
        element.setAttribute('style', 'background-color:green;');
        element.setAttribute('disabled', 'true');
    } else {
        alert('Choose the number of tickets!!!');
    }
}

function removeFromCart(element) {
    let mainEl = element.closest('.cart-single-item');
    let price = mainEl.querySelector('p span').innerText;
    let name = mainEl.querySelector('h3').innerText;
    let movies = document.querySelectorAll('.item-container');


    price = parseInt(price);

    allTotal -= price;

    document.querySelector('.cart-total').innerText = `Total: $${allTotal} `;

    mainEl.remove();

    movies.forEach(function (movie) {
        let movieName = movie.querySelector('.item-container h3').innerText;
        if(movieName === name) {
            movie.querySelector('.actions input').value = 0;
            movie.querySelector('.actions button').removeAttribute('disabled');
            movie.querySelector('.actions button').removeAttribute('style');
            movie.querySelector('.actions button').innerText = 'Add';
        }
    });


}