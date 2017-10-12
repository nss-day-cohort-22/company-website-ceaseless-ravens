let retrievedProductList = JSON.parse(localStorage.getItem("allProductsString", allProductsString))

console.log("retrievedProductList", retrievedProductList)

let productsContainerEl = document.getElementById("product-content")

for (key in retrievedProductList) {
    let productCategories = retrievedProductList[key]

        for (let i = 0; i < productCategories.length; i++) {
            let product = productCategories[i]
                        
            productsContainerEl.innerHTML += `
                <article class="product">
                    <section class="product-image-container">        
                        <img src="${product.picture}">
                    </section>
                    <section class="product-info-container">   
                        <p class="name">Name: ${product.name}</p>
                        <p class="price">Price: $${product.price}</p>
                        <p class="description">Description: ${product.description}</p>
                        <p class="side-effects">Side-effects: ${product.sideEffects}</p> 
                    </section>
                </article>
                `
        }

}