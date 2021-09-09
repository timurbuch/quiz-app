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

// Render Card Components

// Card Array

const cards = [
  {
    question: 'What is the meaning of life?',
    answer: '42',
    showAnswer: false,
    tags: ['Philophy', 'Literature', 'Tricky'],
    bookmarked: false,
  },
  {
    question: 'Who is the world’s highest paid athlete in 2021??',
    answer: 'Conor McGregor',
    showAnswer: false,
    tags: ['Sports', 'Finance', 'Trivia'],
    bookmarked: true,
  },
  {
    question: 'What famous US festival hosted over 350,000 fans in 1969??',
    answer: 'Woodstock',
    showAnswer: false,
    tags: ['Music', 'History'],
    bookmarked: true,
  },
]

const getCards = () => {
  return cards
}

const bookmarkedCards = cards.filter(card => card.bookmarked)
console.log(bookmarkedCards)

// Section Variables

const homeSection = document.getElementById('home')
const bookmarkSection = document.getElementById('bookmark')

// Render Function

const renderCards = (arr, section) => {
  section.innerHTML = ''
  arr.forEach(card => {
    const cardSection = document.createElement('section')
    cardSection.classList.add('card')
    console.log(cardSection)
    const bookmarKButton = document.createElement('button')
    bookmarKButton.classList.add('card__bookmark')
    if (card.bookmarked) {
      bookmarKButton.classList.add('card__bookmark--active')
    } else {
      bookmarKButton.classList.add('card__bookmark--inactive')
    }

    const question = document.createElement('h2')
    question.classList.add('card__question')

    const answerButton = document.createElement('button')
    answerButton.classList.add('card__button')
    answerButton.innerText = 'Show Answer'

    const answer = document.createElement('p')
    answer.classList.add('card__answer', 'card__answer--hidden')
    answer.innerText = card.answer
    const tagList = document.createElement('ul')
    tagList.classList.add('tags')
    console.log(card.tags)
    card.tags.forEach(tag => {
      const tagsItem = document.createElement('li')
      tagsItem.classList.add('tags__item')
      tagsItem.innerText = tag
      tagList.appendChild(tagsItem)
    })

    cardSection.appendChild(bookmarKButton)
    cardSection.appendChild(question)
    cardSection.appendChild(answerButton)
    cardSection.appendChild(answer)
    cardSection.appendChild(tagList)
    section.appendChild(cardSection)

    question.innerText = card.question
  })
}
// Render Functions

document.body.onload = renderCards(cards, homeSection)
document.body.onload = renderCards(bookmarkedCards, bookmarkSection)

// Card Bookmarks

const bookmarks = getElAll('.card__bookmark')

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
