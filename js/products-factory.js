const allProducts = {}
const elixers = []

const zac = {
    "name": "Zac",
    "price": 10.00,
    "picture": "http://placeimg.com/150/200/any",
    "description": "Slip this elixer into your next cocktail and become Zac Efron for 8 hours.",
    "sideEffects": "May turn into Zac Braff."
} 

const wizard = {
    "name": "Wizard",
    "price": 10.00,
    "picture": "http://placeimg.com/150/200/any",
    "description": "Become a wizard for 8 hours",
    "sideEffects": "May turn into a total jerk."
} 

const invisibility = {
    "name": "Invisibility",
    "price": 10.00,
    "picture": "http://placeimg.com/150/200/any",
    "description": "Become a invisible for 8 hours",
    "sideEffects": "May turn into a total jerk."
} 

const transfiguration = {
    "name": "Transfiguration",
    "price": 10.00,
    "picture": "http://placeimg.com/150/200/any",
    "description": "Become an animal for 8 hours",
    "sideEffects": "You turn into a slow loris."
} 

elixers.push(zac)
elixers.push(wizard)
elixers.push(invisibility)
elixers.push(transfiguration)


allProducts.elixers = elixers;



let allProductsString = JSON.stringify(allProducts)
localStorage.setItem("allProductsString", allProductsString)

