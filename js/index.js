// Write your Pizza Builder JavaScript in this file.

// Constants
let basePrice = 10;
let ingredients = {
  pepperoni: { name: 'pepperoni', price: 1 },
  mushrooms: { name: 'Mushrooms', price: 1 },
  greenPeppers: { name: 'Green Peppers', price: 1 },
  whiteSauce: { name: 'White sauce', price: 3 },
  glutenFreeCrust: { name: 'Gluten-free crust', price: 5 }
};

// Initial value of the state (the state values can change over time)
let state = {
  pepperoni: true,
  mushrooms: true,
  greenPeppers: true,
  whiteSauce: false,
  glutenFreeCrust: false
};

// This function takes care of rendering the pizza based on the state
// This function is triggered once at the beginning and every time the state is changed
function renderEverything() {
  renderPepperoni();
  renderMushrooms();
  renderGreenPeppers();
  renderWhiteSauce();
  renderGlutenFreeCrust();

  renderButtons();
  renderPrice();
}

function renderPepperoni() {
  document.querySelectorAll('.pep').forEach(onePep => {
    if (state.pepperoni) {
      onePep.style.visibility = 'visible';
    } else {
      onePep.style.visibility = 'hidden';
    }
  })
}

function renderMushrooms() {
  // Iteration 1: set the visibility of `<section class="mushroom">`
  document.querySelectorAll('.mushroom').forEach(oneMush => {
   return (state.mushrooms) ? oneMush.style.visibility = 'visible' : oneMush.style.visibility = 'hidden'
  } )
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  document.querySelectorAll('.green-pepper').forEach( oneGrenPep => {
    return state.greenPeppers ? oneGrenPep.style.visibility = 'visible' : oneGrenPep.style.visibility = 'hidden'
  })
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
let sauce = document.querySelector('.sauce')
 state.whiteSauce ? sauce.classList.add('sauce-white') : sauce.classList.remove('sauce-white')

}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  let crustOption = document.querySelector('.crust')

   state.glutenFreeCrust ? crustOption.classList.add('crust-gluten-free') : crustOption.classList.remove('crust-gluten-free')
  
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  let pepperoniButton = document.querySelector('.btn.btn-pepperoni')
  state.pepperoni ? pepperoniButton.classList.add('active') : pepperoniButton.classList.remove('active')

   let mushroomButton = document.querySelector('.btn.btn-mushrooms')
  state.mushrooms ? mushroomButton.classList.add('active') : mushroomButton.classList.remove('active')
  
  let greenPeppersButton = document.querySelector('.btn.btn-green-peppers')
  state.greenPeppers ? greenPeppersButton.classList.add('active') : greenPeppersButton.classList.remove('active')

  let sauceButton = document.querySelector('.btn.btn-sauce')
   state.whiteSauce ? sauceButton.classList.add('active') : sauceButton.classList.remove('active')

  let crustButton = document.querySelector('.btn.btn-crust')
  state.glutenFreeCrust ? crustButton.classList.add('active') : crustButton.classList.remove('active')
}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
let parentElement = document.querySelector('.price ul')
 parentElement.innerHTML = ''
let total = 10

if (state.pepperoni){
  parentElement.innerHTML += `<li> $1 pepperoni </li>`
  total += 1
} 
if (state.mushrooms){
  parentElement.innerHTML += `<li> $1 mushrooms </li>`
  total += 1
}
if(state.greenPeppers){
  parentElement.innerHTML += `<li>$1 green peppers</li>`
  total += 1
}
if(state.whiteSauce){
  parentElement.innerHTML += `<li>$3 white sauce</li>`
  total += 3
}
if(state.glutenFreeCrust){
  parentElement.innerHTML += `<li>$5 gluten-free crust</li>`
  total += 5
}
document.querySelector('.price strong').innerHTML = `$${total}`
}

renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document.querySelector('.btn.btn-pepperoni').addEventListener('click', () => {
  state.pepperoni = !state.pepperoni;
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector('.btn.btn-mushrooms').addEventListener('click', ()=>{
  state.mushrooms = !state.mushrooms
  renderEverything();
})
// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document.querySelector('.btn.btn-green-peppers').addEventListener('click', ()=> {
  state.greenPeppers = !state.greenPeppers
  renderEverything()
})
// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector('.btn.btn-sauce').addEventListener('click', ()=> {
  state.whiteSauce = !state.whiteSauce
  renderEverything()
  console.log('hola')
})
// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector('.btn.btn-crust').addEventListener('click', ()=> {
  state.glutenFreeCrust = !state.glutenFreeCrust
  renderEverything()
})