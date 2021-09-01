//Section Headers

const homeHeader = document.getElementById('home--header')
const bookmarkHeader = document.getElementById('bookmark--header')
const createHeader = document.getElementById('create--header')
//const profileHeader= document.getElementById('profile--header')

//Main Sections

const homeMain = document.getElementById('home')
const bookmarkMain = document.getElementById('bookmark')
const createMain = document.getElementById('create')
//const ProfileMain = document.getElementById('profile)

// Buttons

const homeButton = document.getElementById('home--btn')
const bookmarkButton = document.getElementById('bookmark--btn')
const createButton = document.getElementById('create--btn')
const profileButton = document.getElementById('profile--btn')

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
