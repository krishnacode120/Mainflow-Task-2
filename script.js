document.addEventListener("DOMContentLoaded", () => {
    const homeSection = document.getElementById("homeSection");
    const shopSection = document.getElementById("shopSection");
    const homeLink = document.getElementById("homeLink");
    const shopLink = document.getElementById("shopLink");
    const goToShop = document.getElementById("goToShop");
    const backToHome = document.getElementById("backToHome");
    const cartCount = document.getElementById("cartCount");
    const addToCartButtons = document.querySelectorAll(".add-to-cart");
    const priceFilter = document.getElementById("priceFilter");
    const productGallery = document.getElementById("productGallery");
  
    let cartItems = 0;
  
    // Section Transition
    function showSection(sectionToShow, sectionToHide) {
      sectionToHide.classList.add("hidden");
      setTimeout(() => {
        sectionToHide.style.display = "none";
        sectionToShow.style.display = "flex";
        sectionToShow.classList.remove("hidden");
      }, 500);
    }
  
    // Navigation
    homeLink.addEventListener("click", () => showSection(homeSection, shopSection));
    shopLink.addEventListener("click", () => showSection(shopSection, homeSection));
    goToShop.addEventListener("click", () => showSection(shopSection, homeSection));
    backToHome.addEventListener("click", () => showSection(homeSection, shopSection));
  
    // Add to Cart
    addToCartButtons.forEach((button) => {
      button.addEventListener("click", () => {
        cartItems++;
        cartCount.textContent = cartItems;
      });
    });
  
    // Filter Products
    priceFilter.addEventListener("change", () => {
      const filterValue = parseInt(priceFilter.value, 10);
      const products = productGallery.querySelectorAll(".product-card");
  
      products.forEach((product) => {
        const price = parseInt(product.dataset.price, 10);
        if (filterValue === "all" || price <= filterValue) {
          product.style.display = "block";
        } else {
          product.style.display = "none";
        }
      });
    });
  });
  