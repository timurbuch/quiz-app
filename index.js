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
  homeHeader.classList.add('header--hidden')
  bookmarkHeader.classList.add('header--hidden')
  createHeader.classList.add('header--hidden')
  profileHeader.classList.add('header--hidden')

  homeMain.classList.add('main--hidden')
  bookmarkMain.classList.add('main--hidden')
  createMain.classList.add('main--hidden')
  profileMain.classList.add('main--hidden')
}

// Events
homeButton.addEventListener('click', event => {
  hideAll()
  homeHeader.classList.remove('header--hidden')
  homeMain.classList.remove('main--hidden')

  console.log('Welcome home')
})

bookmarkButton.addEventListener('click', event => {
  hideAll()
  bookmarkHeader.classList.remove('header--hidden')
  bookmarkMain.classList.remove('main--hidden')

  console.log('Best questions')
})

createButton.addEventListener('click', event => {
  hideAll()
  createHeader.classList.remove('header--hidden')
  createMain.classList.remove('main--hidden')

  console.log('Get creative')
})

profileButton.addEventListener('click', event => {
  hideAll()
  profileHeader.classList.remove('header--hidden')
  profileMain.classList.remove('main--hidden')

  console.log('Profile')
})

// -----------------------------------------------

function getElAll(selector) {
  const el = document.querySelectorAll(selector)
  return el
}
//Card Bookmarks
const bookmarks = getElAll('.card__bookmark')
//console.log(bookmarks)

//Answerbuttons
const answerButtons = getElAll('.card__button')

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
