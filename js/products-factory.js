const allProducts = {}
const elixirs = []

const zac = {
    "name": "Zac",
    "price": 10.00,
    "picture": "/images/elixir3_web.jpg",
    "description": "Slip this elixer into your next cocktail and become Zac Efron for 8 hours.",
    "sideEffects": "You may turn into Zac Braff.",
    "type": "elixir"
} 

const wizard = {
    "name": "Wizard",
    "price": 10.00,
    "picture": "/images/elixir2_web.jpg",
    "description": "Become a wizard for 8 hours",
    "sideEffects": "You may turn into a total jerk.",
    "type": "elixir"
} 

const invisibility = {
    "name": "Invisibility",
    "price": 10.00,
    "picture": "/images/elixir1_web.jpg",
    "description": "Become a invisible for 8 hours",
    "sideEffects": "You may turn into a total jerk.",
    "type": "elixir"
} 

const transfiguration = {
    "name": "Transfiguration",
    "price": 10.00,
    "picture": "/images/elixir4_web.jpg",
    "description": "Become an animal for 8 hours",
    "sideEffects": "You may turn into a slow loris.",
    "type": "elixir"
} 

elixirs.push(zac)
elixirs.push(wizard)
elixirs.push(invisibility)
elixirs.push(transfiguration)


allProducts.elixirs = elixirs;



let allProductsString = JSON.stringify(allProducts)
localStorage.setItem("allProductsString", allProductsString)

