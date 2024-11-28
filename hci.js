//Search icon
document.addEventListener("DOMContentLoaded", function () {
    const searchToggle = document.getElementById("search-toggle");
    const searchContainer = document.getElementById("search-container");

    searchToggle.addEventListener("click", function (event) {
        event.preventDefault();
        if (searchContainer.style.display === "none") {
            searchContainer.style.display = "block";
        } else {
            searchContainer.style.display = "none";
        }
    });

    const searchBtn = document.getElementById("search-btn");
    searchBtn.addEventListener("click", function () {
        const query = document.getElementById("search-input").value;
        alert(`You searched for: ${query}`);
    });
});


//Cart icon
document.addEventListener("DOMContentLoaded", () => {
    const cartIcon = document.getElementById("cart-icon");
    const cartModal = document.getElementById("cart-modal");
    const closeCart = document.getElementById("close-cart");
    const cartItemsList = document.getElementById("cart-items");
    const emptyCartMessage = document.getElementById("empty-cart-message");
  
    const cartItems = [
      { name: "Greek Salad", quantity: 2, price: 24, image: "images/t38.jpeg" },
      { name: "Grilled Chicken", quantity: 3, price: 54, image: "images/t14.jpeg" },
    ];
  
    function renderCartItems() {
      cartItemsList.innerHTML = "";
      if (cartItems.length === 0) {
        emptyCartMessage.classList.remove("hidden");
        cartItemsList.classList.add("hidden");
      } else {
        emptyCartMessage.classList.add("hidden");
        cartItemsList.classList.remove("hidden");
        cartItems.forEach((item) => {
          const li = document.createElement("li");
          li.style.display = "flex";
          li.style.alignItems = "center";
          li.style.marginBottom = "10px";
  
          const img = document.createElement("img");
          img.src = item.image;
          img.alt = item.name;
          img.style.width = "50px";
          img.style.height = "50px";
          img.style.marginRight = "10px";
          img.style.borderRadius = "5px";
  
          const text = document.createElement("span");
          text.textContent = `${item.name} - ${item.quantity} pcs - $${item.price}`;
          
          li.appendChild(img);
          li.appendChild(text);
          cartItemsList.appendChild(li);
        });
      }
    }
  
    cartIcon.addEventListener("click", (event) => {
      event.preventDefault();
      cartModal.classList.toggle("hidden");
      renderCartItems();
    });
  
    closeCart.addEventListener("click", () => {
      cartModal.classList.add("hidden");
    });
  });
  
  

//Menu add to cart
document.addEventListener('DOMContentLoaded', function() {
    const cart = [];

    function updateQuantity(input, isIncrement) {
        let currentQuantity = parseInt(input.value, 10);
        if (isIncrement) {
            input.value = currentQuantity + 1;
        } else if (currentQuantity > 1) {
            input.value = currentQuantity - 1;
        }
    }

    document.querySelectorAll('.dish-item').forEach(dishItem => {
        const minusButton = dishItem.querySelector('.minus');
        const plusButton = dishItem.querySelector('.plus');
        const quantityInput = dishItem.querySelector('.quantity');
        const addToCartButton = dishItem.querySelector('.add-to-cart');

        minusButton.addEventListener('click', () => {
            updateQuantity(quantityInput, false);
        });

        plusButton.addEventListener('click', () => {
            updateQuantity(quantityInput, true);
        });

        addToCartButton.addEventListener('click', () => {
            const dishName = dishItem.querySelector('h3').innerText;
            const dishPrice = parseFloat(dishItem.querySelector('.price').innerText.replace('$', ''));
            const quantity = parseInt(quantityInput.value, 10);

            const itemIndex = cart.findIndex(item => item.name === dishName);
            if (itemIndex > -1) {
                cart[itemIndex].quantity += quantity;
            } else {
                cart.push({ name: dishName, price: dishPrice, quantity: quantity });
            }

            console.log(`${quantity} of ${dishName} added to cart.`);
            console.log(cart);
            alert(`${quantity} of ${dishName} added to cart!`);
        });
    });
});



//Promo code
document.addEventListener("DOMContentLoaded", function() {
    const promoCodeInput = document.querySelector(".promo-code input[type='text']");
    const submitPromoButton = document.querySelector(".promo-code input[type='submit']");
    const checkoutButton = document.querySelector(".checkout-btn");
    const subtotalElement = document.querySelector(".cart-totals td:nth-child(2)");
    const deliveryFee = 5;
    let subtotal = 60;
    let discount = 0;

    function updateTotal() {
        const totalElement = document.querySelector(".cart-totals .total td:nth-child(2)");
        const total = subtotal + deliveryFee - discount;
        totalElement.textContent = `$${total.toFixed(2)}`;
    }

    submitPromoButton.addEventListener("click", function(event) {
        event.preventDefault();
        
        const promoCode = promoCodeInput.value.trim().toLowerCase();
        if (promoCode === "discount10") {
            discount = subtotal * 0.1;
            alert("Promo code applied! You saved 10%");
        } else {
            discount = 0;
            alert("Invalid promo code");
        }
        
        updateTotal();
    });

    checkoutButton.addEventListener("click", function() {
        alert("Proceeding to checkout");
        window.location.href = "checkout.html";
    });

    updateTotal();
});


//Card pay
document.addEventListener("DOMContentLoaded", function() {
    const payButton = document.querySelector("form button[type='submit']");
    const emailInput = document.getElementById("email");
    const cardInfoInput = document.getElementById("card-info");
    const expiryInput = document.querySelector(".card-expiry-cvc input:nth-child(1)");
    const cvcInput = document.querySelector(".card-expiry-cvc input:nth-child(2)");
    const cardholderNameInput = document.getElementById("cardholder-name");
    const countrySelect = document.getElementById("country");

    payButton.addEventListener("click", function(event) {
        event.preventDefault();

        if (!emailInput.value || !cardInfoInput.value || !expiryInput.value || !cvcInput.value || !cardholderNameInput.value) {
            alert("Please fill in all required fields.");
            return;
        }

        alert("Payment processing...");

        setTimeout(() => {
            alert("Payment successful! Thank you for your purchase.");
            window.location.href = "confirmation.html";
        }, 1000);
    });
});


//login 
document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.querySelector(".login-form");
    const loginButton = document.querySelector(".login-btn");
    const emailInput = document.querySelector(".login-form input[type='email']");
    const passwordInput = document.querySelector(".login-form input[type='password']");
    const termsCheckbox = document.querySelector(".login-form input[type='checkbox']");

    loginButton.addEventListener("click", function(event) {
        event.preventDefault();

        if (!emailInput.value || !passwordInput.value) {
            alert("Please enter both email and password.");
            return;
        }

        if (!termsCheckbox.checked) {
            alert("You must agree to the terms of use & privacy policy.");
            return;
        }

        alert("Login successful! Welcome back.");
        window.location.href = "dashboard.html";
    });
});


//Contact us
document.addEventListener("DOMContentLoaded", function() {
    const contactForm = document.querySelector(".contact form");
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const messageInput = document.getElementById("message");

    contactForm.addEventListener("submit", function(event) {
        event.preventDefault();

        if (!nameInput.value || !emailInput.value || !messageInput.value) {
            alert("Please fill in all required fields.");
            return;
        }

        alert("Thank you for contacting us, " + nameInput.value + "! We will get back to you soon.");
        contactForm.reset();
    });
});
