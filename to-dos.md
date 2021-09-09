## Quiz Plan

### Iteration 1: Fragen und Antworten in "Home" mit Javascript anzeigen

- const appData in js

  - Statt die Fragen und Antworten in das HTML zu schreiben
  - Schreiben wir ein array mit objekten
  - ähnlich wie weasleys
  - Bsp.
    [{
    question: 'Age of Arthur',
    answer: '42',
    isBookmarked: true,
    showAnswer: false,
    tags: ['history', 'social']
    }]
  - implement a function called getData() that returns the appData

- eine funktion schreiben, die ein array-objekt in das html rendert

  - main-element holen
  - alles leeren
    - Hint: use `.innerHTML = ''`
  - daten in das main-element bringen
    - createElement() für jedes html-element
      - Bsp: document.createElement('section')
    - appendChild()
      Steps:
    1. Schreibe eine Funktion, die ein Objekt rendert `renderCard(obj)`


        - Bsp: renderCard({question: 'Age of Arthur', answer: '42', isBookmarked: true, showAnswer: false, tags: ['history', 'social']})
    2. Schreibe eine Funktion die ein Array mit Objekten (mehrere Cards) rendern kann `renderCards(array)`


        - Bsp: renderCards(appData)
        - Die cards sollen erstmal in das Home-`<main>`-Element eingefügt werden

- Beim Laden der Seite
  - renderCards(appData) ausführen
  - Erwartung: Alle cards sollen in das main-element eingefügt werden

### Iteration 2: Bookmarks-Seite implementieren

1. Ändere die Funktion `renderCards(array)`, sodass sie einen zweiten Parameter `targetElement` übergeben bekommt. Die Cards sollen dann in diesem Element eingefügt werden.

- Bsp: `renderCards(appData, '#bookmarks')`

2. Rufe beim Laden der Seite die Funktion `renderCards` zwei mal auf. Einmal für die Home-Seite und einmal für die Bookmarks-Seite.

- Bsp: `renderCards(appData, '#home')` und `renderCards(appData, '#bookmarks')`
- Erwartung: Die Home-Seite sollte alle Cards enthalten, die Bookmarks-Seite auch.

3. Filtere `appData` so, dass sie nur die Bookmarks enthält und rufe mit den Resultaten `renderCards` auf.

- Erwartung: Die Bookmarks-Seite sollte nur die Bookmarked Cards enthalten.

### Viola! :)

### Iteration 3: Create-Question implementieren

- Schreibe eine Funktion `addQuestion(question, answer, tags)`
  - Bsp: `addQuestion('Age of Arthur', '42', ['history', 'social'])`
  - Fügt einen Eintrag zu dem Array `appData` hinzu
    - Bsp: `{question: 'Age of Arthur', answer: '42', isBookmarked: false, showAnswer: false, tags: ['history', 'social']}`
  - Schreibe vor dem Aufruf von `renderCards` einen Aufruf von `addQuestion` und gucke, ob sich die Card gerendert wird.
  - Erwartung: Die neue Card sollte in der Home-Seite angezeigt werden.
- Rufe die Funktion `addQuestion` auf wenn das Create-Formular abgeschickt wird.
- Rufe danaach `renderCards`-Funktionen auf.
- Erwartung: Die neue Card sollte in der Home-Seite angezeigt werden.
