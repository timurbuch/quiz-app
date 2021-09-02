//Section Headers

const homeHeader = document.querySelector('#header--home')
const bookmarkHeader = document.querySelector('#header--bookmark')
const createHeader = document.querySelector('#header--create')

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

//Card Bookmarks
const bookmarks = document.querySelectorAll('.card__bookmark')
console.log(bookmarks)

//Answerbuttons
const answerButtons = document.querySelectorAll('.card__button')

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

//Toogle Answer
for (let i = 0; i < answerButtons.length; i++) {
  answerButtons[i].addEventListener('click', () => {
    answerButtons[i].nextElementSibling.classList.toggle('card__answer--hidden')
    answerButtons[i].classList.toggle('hide__button')
    if (answerButtons[i].innerText === 'Show answer') {
      answerButtons[i].innerText = 'Hide answer'
    } else {
      answerButtons[i].innerText = 'Show answer'
    }
  })
}

//Toogle Bookmarks
for (let i = 0; i < bookmarks.length; i++) {
  bookmarks[i].addEventListener('click', () => {
    bookmarks[i].classList.toggle('card__bookmark--inactive')
  })
}
