let retrievedProductList = JSON.parse(localStorage.getItem("allProductsString", allProductsString))

console.log("retrievedProductList", retrievedProductList)

let productsContainerEl = document.getElementById("product-content")

for (key in retrievedProductList) {
    let productCategories = retrievedProductList[key]

        for (let i = 0; i < productCategories.length; i++) {
            let product = productCategories[i]
                        
            productsContainerEl.innerHTML += `
                <img src="${product.picture}">
                <p>Name: ${product.name}</p>
                <p>Description: ${product.description}</p>
                <p>Price: ${product.price}</p>
                <p>Side-effects: ${product.sideEffects}</p> 
                <hr>
                `
}

}