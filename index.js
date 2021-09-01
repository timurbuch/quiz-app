//Section Headers

const homeHeader = document.querySelector('#header--home')
const bookmarkHeader = document.querySelector('#header--bookmark')
const createHeader = document.querySelector('#header--create')

console.log(bookmarkHeader)
//const profileHeader= document.getElementById('profile--header')

//Main Sections

const homeMain = document.querySelector('#home')
const bookmarkMain = document.querySelector('#bookmark')
const createMain = document.querySelector('#create')
//const ProfileMain = document.getElementById('profile)

// Buttons

const homeButton = document.querySelector('#home--btn')
const bookmarkButton = document.querySelector('#bookmark--btn')
const createButton = document.querySelector('#create--btn')
const profileButton = document.querySelector('#profile--btn')

//Events

homeButton.addEventListener('click', event => {
  homeHeader.classList.remove('header--hidden')
  homeMain.classList.remove('main--hidden')

  bookmarkHeader.classList.add('header--hidden')
  createHeader.classList.add('header--hidden')
  // profileHeader.classList.add('header--hidden')

  bookmarkMain.classList.add('main--hidden')
  createMain.classList.add('main--hidden')
  //profileMain.classList.add('main--hidden')
  console.log('Welcome home')
})

bookmarkButton.addEventListener('click', event => {
  bookmarkHeader.classList.remove('header--hidden')
  bookmarkMain.classList.remove('main--hidden')

  homeHeader.classList.add('header--hidden')
  createHeader.classList.add('header--hidden')
  // profileHeader.classList.add('header--hidden')

  homeMain.classList.add('main--hidden')
  createMain.classList.add('main--hidden')
  //profileMain.classList.add('main--hidden')
  console.log('Best questions')
})

createButton.addEventListener('click', event => {
  createHeader.classList.remove('header--hidden')
  createMain.classList.remove('main--hidden')

  homeHeader.classList.add('header--hidden')
  bookmarkHeader.classList.add('header--hidden')
  // profileHeader.classList.add('header--hidden')

  homeMain.classList.add('main--hidden')
  bookmarkMain.classList.add('main--hidden')
  //profileMain.classList.add('main--hidden')
  console.log('Get creative')
})
