// Section Headers
const homeHeader = getEl('#header--home')
const bookmarkHeader = getEl('#header--bookmark')
const createHeader = getEl('#header--create')
const profileHeader = getEl('#header--profile')

// Main Sections
const homeMain = getEl('#home')
const bookmarkMain = getEl('#bookmark')
const createMain = getEl('#create')
const profileMain = getEl('#profile')

// Buttons
const homeButton = getEl('#home--btn')
const bookmarkButton = getEl('#bookmark--btn')
const createButton = getEl('#create--btn')
const profileButton = getEl('#profile--btn')

function getEl(selector) {
  const el = document.querySelector(selector)
  return el
}

function hideAll() {
  const headerElArray = document.querySelectorAll('.header')
  headerElArray.forEach((headerEl, index) => {
    headerEl.classList.add('header--hidden')
  })

  const mainElArray = document.querySelectorAll('.main')
  mainElArray.forEach((mainEl, index) => {
    mainEl.classList.add('main--hidden')
  })
}

function addButtonEventListener(name) {
  getEl(`#${name}--btn`).addEventListener('click', () => {
    hideAll()
    getEl(`#header--${name}`).classList.remove('header--hidden')
    getEl(`#${name}`).classList.remove('main--hidden')
  })
}

addButtonEventListener('home')
addButtonEventListener('bookmark')
addButtonEventListener('create')
addButtonEventListener('profile')

// -----------------------------------------------

function getElAll(selector) {
  const el = document.querySelectorAll(selector)
  return el
}

//Card Bookmarks
const bookmarks = getElAll('.card__bookmark')
//console.log(bookmarks)

// Answerbuttons
const answerButtons = getElAll('.card__button')

// Toogle Answer
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

// Toogle Bookmarks
for (let i = 0; i < bookmarks.length; i++) {
  bookmarks[i].addEventListener('click', () => {
    if (
      bookmarks[i].classList.contains('card__bookmark--dark-mode--active') &&
      getEl('.card').classList.contains('dark-mode')
    ) {
      bookmarks[i].classList.toggle('card__bookmark--inactive')
      bookmarks[i].classList.toggle('card__bookmark--dark-mode--active')
    } else if (
      bookmarks[i].classList.contains('card__bookmark--active') ||
      bookmarks[i].classList.contains('card__bookmark--inactive')
    ) {
      bookmarks[i].classList.toggle('card__bookmark--inactive')
      bookmarks[i].classList.toggle('card__bookmark--active')
    }
  })
}
// Reset Form
form = document.getElementById('form')
submitButton = getEl('.input__button')
submitButton.addEventListener('click', () => {
  form.reset()
})

// Toggle Dark Mode

darkmodeSwitch = getEl('.darkmode-switch')
const mainElArray = document.querySelectorAll('.main')
const headerArray = getElAll('.header')
const cardArray = getElAll('.card')
const footer = getEl('.footer')

darkmodeSwitch.addEventListener('change', () => {
  mainElArray.forEach((mainEl, index) => {
    mainEl.classList.toggle('dark-mode')
  })
  headerArray.forEach((header, index) => {
    header.classList.toggle('dark-mode')
  })
  cardArray.forEach((card, index) => {
    card.classList.toggle('dark-mode')
  })
  footer.classList.toggle('dark-mode')
  bookmarks.forEach((bookmark, index) => {
    if (bookmark.classList.contains('card__bookmark--active')) {
      bookmark.classList.toggle('card__bookmark--dark-mode--active')
      bookmark.classList.toggle('card__bookmark--active')
    } else if (
      bookmark.classList.contains('card__bookmark--dark-mode--active')
    ) {
      bookmark.classList.toggle('card__bookmark--dark-mode--active')
      bookmark.classList.toggle('card__bookmark--active')
    }
  })
})
