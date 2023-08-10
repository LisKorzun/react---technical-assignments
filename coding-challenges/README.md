<a name="top"></a>

<a href="https://github.com/LisKorzun/react---technical-assignments/tree/main#readme-top">
    <sup><b>❰❰❰ back to home</b></sup>
</a>

<div align="right">
    <a href="https://react.dev/">
        <img alt="react logo" src="/extra-materials/images/react-logo.png" height="150"/>
    </a>
    <h1>𝙲𝙾𝙳𝙸𝙽𝙶 𝙲𝙷𝙰𝙻𝙻𝙴𝙽𝙶𝙴𝚂</h1>
    <sup>Coding challenges are a great way to strengthen your problem-solving skills, coding fundamentals, and speed.<br />
    In many cases, coding challenges are timed and completed on a coding platform during the interview.</sup>
</div>
<br />
<br />
<div align="center">
    <a href="#basic-react-coding-challenges">
        <img alt="Releases" src="https://img.shields.io/badge/BASIC%20CHALLENGES-4-white?&logo=codeforces&logoColor=white&labelColor=DB6BAD&style=for-the-badge" />
    </a>
    <a href="#intermediate-react-coding-challenges">
        <img alt="Releases" src="https://img.shields.io/badge/INTERMEDIATE%20CHALLENGES-0-white?&logo=codeforces&logoColor=white&labelColor=6B75DB&style=for-the-badge" />
    </a>
    <a href="#advanced-react-coding-challenges">
        <img alt="Releases" src="https://img.shields.io/badge/ADVANCED%20CHALLENGES-0-white?&logo=codeforces&logoColor=white&labelColor=44AC99&style=for-the-badge" />
    </a>
</div>
<br />

## BASIC REACT CODING CHALLENGES
### CHALLENGE 1𝕓
![][Basic]

Write a component from scratch e.g. write a `Congratulations` component that shows `<h1>Good job!</h1>`.

<a href="/coding-challenges/basic/challenge-001/src/App.jsx"><sup><b>See solution ❱❱❱</b></sup></a>

---
### CHALLENGE 2𝕓
![][Basic]

This `Gallery` component contains some very similar markup for two profiles. 
Extract a `Profile` component out of it to reduce the duplication. You’ll need to choose what props to pass to it.

```js
function getImageUrl(imageId, size = 's') {
  return (
    'https://i.imgur.com/' +
    imageId +
    size +
    '.jpg'
  );
}

export default function Gallery() {
    return (
        <div>
            <h1>Notable Scientists</h1>
            <section className="profile">
                <h2>Maria Skłodowska-Curie</h2>
                <img
                    className="avatar"
                    src={getImageUrl('szV5sdG')}
                    alt="Maria Skłodowska-Curie"
                    width={70}
                    height={70}
                />
                <div>
                    <b>Awards: 4 </b>
                    (Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal, Matteucci Medal)
                </div>
            </section>
            <section className="profile">
                <h2>Katsuko Saruhashi</h2>
                <img
                    className="avatar"
                    src={getImageUrl('YfeOqp2')}
                    alt="Katsuko Saruhashi"
                    width={70}
                    height={70}
                />
                <div>
                    <b>Awards: 2 </b>
                    (Miyake Prize for geochemistry, Tanaka Prize)
                </div>
            </section>
        </div>
    );
}
```

<a href="/coding-challenges/basic/challenge-002/src/App.jsx"><sup><b>See solution ❱❱❱</b></sup></a>

---
### CHALLENGE 3𝕓
![][Basic]

Make a list of recipes from this array! For each recipe in the array, display its name as an `<h2>` and list its ingredients in a `<ul>`.

```js
// data.js
export const recipes = [{
    id: 'greek-salad',
    name: 'Greek Salad',
    ingredients: ['tomatoes', 'cucumber', 'onion', 'olives', 'feta']
}, {
    id: 'hawaiian-pizza',
    name: 'Hawaiian Pizza',
    ingredients: ['pizza crust', 'pizza sauce', 'mozzarella', 'ham', 'pineapple']
}, {
    id: 'hummus',
    name: 'Hummus',
    ingredients: ['chickpeas', 'olive oil', 'garlic cloves', 'lemon', 'tahini']
}];
```
```js
// App.jsx
import { recipes } from './data.js';

export default function RecipeList() {
  return (
    <div>
      <h1>Recipes</h1>
    </div>
  );
}
```
<a href="/coding-challenges/basic/challenge-003/src/App.jsx"><sup><b>See solution ❱❱❱</b></sup></a>

---
### CHALLENGE 4𝕓
![][Basic]

```js
const poem = {
  lines: [
    'I write, erase, rewrite',
    'Erase again, and then',
    'A poppy blooms.'
  ]
};

export default function Poem() {
  return (
    <article>
      {poem.lines.map((line, index) =>
        <p key={index}>
          {line}
        </p>
      )}
    </article>
  );
}
```

- Insert an `<hr />` separator between each paragraph of the poem.
- Your solution should work with any number of lines.
- Note that `<hr />` elements only appear between the `<p>` elements, not in the beginning or the end!
- Your resulting structure should look like this:

```html
<article>
  <p>I write, erase, rewrite</p>
  <hr />
  <p>Erase again, and then</p>
  <hr />
  <p>A poppy blooms.</p>
</article>
```

<a href="/coding-challenges/basic/challenge-004/src/App.jsx"><sup><b>See solution ❱❱❱</b></sup></a>

---
## INTERMEDIATE REACT CODING CHALLENGES
### CHALLENGE 1𝕚
![][Intermediate]


## ADVANCED REACT CODING CHALLENGES
### CHALLENGE 1𝕒
![][Advanced]




<!-- LEVELS LABELS -->
[Basic]: https://img.shields.io/badge/BASIC-DB6BAD?&logo=codeforces&logoColor=white&labelColor=DB6BAD
[Advanced]: https://img.shields.io/badge/ADVANCED-44AC99?&logo=codeforces&logoColor=white&labelColor=44AC99
[Intermediate]: https://img.shields.io/badge/INTERMEDIATE-6B75DB?&logo=codeforces&logoColor=white&labelColor=6B75DB
