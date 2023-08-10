<a href="https://github.com/LisKorzun/react---technical-assignments/tree/main#readme-top">
    <sup><b>❰❰❰ back to home</b></sup>
</a>
<a name="top"></a>

<div align="right">
    <a href="https://react.dev/">
        <img alt="react logo" src="/extra-materials/images/react-logo.png" height="150"/>
    </a>
    <h1>𝙷𝙰𝙽𝙳𝙱𝙾𝙾𝙺</h1>
    <sup><b>Based on official </b></sup>
    <a href="https://react.dev/learn"><sup><b>React Docs ❱❱❱</b></sup></a>
    <br />
    <br />
</div>
<br />
<br />

<details><summary><b>What is React? </b></summary><br/>
    <p>React (aka React.js or ReactJS) is an open-source front-end JavaScript library 
    that is used for building composable user interfaces (UI), especially for single-page applications. 
    It is used for handling view layer for web and mobile apps based on components in a declarative approach. <br/>
    <div align='center'><sub>✧ React was created by Jordan Walke, a software engineer working for Facebook. ✧<br/>
    ✧ React was first deployed on Facebook's News Feed in 2011 and on Instagram in 2012. It was open-sourced at JSConf US in May 2013. ✧</sub></div></p>
</details><hr/>

<details><summary><b>What is a React component?</b></summary><br/>
    <p>React applications are built from isolated pieces of UI called components. 
    A component is a piece of the UI (user interface) that has its own logic and appearance.  
    <b><u>A React component is a JavaScript function that returns markup.</u></b> 
    Components can be as small as a button, or as large as an entire page. </p>
 
```js
function MyButton() {
  return (
    <button>I'm a button</button>
  );
}
```

**⛓ React component names must always start with a capital letter, while HTML tags must be lowercase.**
<div align='center'>
    <sup>✧ React lets you combine your markup, CSS, and JavaScript into custom “components”, reusable UI elements for your app. ✧<br/>
    ✧ Just like with HTML tags, you can compose, order and nest components to design whole pages. ✧<br/>✧ As your project grows, 
    you will notice that many of your designs can be composed by reusing components you already wrote, speeding up your development. ✧</sup>
</div>
</details><hr/>

<details><summary><b>How to define a component</b> </summary>
    <br/><p>React component is a JavaScript function that you can sprinkle with markup.</p>

```js
export default function Profile() {
  return (
    <img
      src="https://i.imgur.com/MK3eW3Am.jpg"
      alt="Katherine Johnson"
    />
  )
}

```
- **Export the component.**
  - The `export default` prefix is a standard JavaScript syntax (not specific to React).

- **Define the function.** 
  - With `function Profile() { }` you define a JavaScript function with the name Profile.

- **Add markup.**
  - The component returns an <img /> tag with src and alt attributes. <img /> is written like HTML, 
  but it is actually JavaScript under the hood! This syntax is called [JSX](https://react.dev/learn/writing-markup-with-jsx), and it lets you embed markup inside JavaScript.

**⛓ Return statements can be written all on one line 
or you must wrap it in a pair of parentheses.**
<div align="center">
  <sup>✧ There are still a few rare class component use cases that do not yet have a Hook-based equivalent. 
  <br/>Class components remain supported, and are documented in the <a href="https://react.dev/reference/react/legacy">Legacy API</a> section. ✧</sup>
</div>
</details><hr/>

<details><summary><b>How to use components</b></summary><br/>

Once you’ve defined your `ComponentA` component, you can nest it inside other components e.g. `ComponentB`.

```js
function ComponentA() {
  return <div>Component A</div>;
}

export default function ComponentB() {
  return (
      <>
          <p>Component B</p>
          <ComponentA />
      </>
  );
}
```

Because the `ComponentA` component is rendered inside `ComponentB` we can say that
`ComponentB` is a **parent** component, rendering `ComponentA` as a “**child**”. 

**⛓ This is part of the magic of React: you can define a component once, 
and then use it in as many places and as many times as you like.**
</details><hr/>

&nbsp;&nbsp;&nbsp;&nbsp;![][Recap]
- React lets you create components, reusable UI elements for your app.
- In a React app, every piece of UI is a component.
- React components are regular JavaScript functions except:
  - Their names always begin with a capital letter. 
  - They return JSX markup.

<hr/>
<details><summary><b>What is a “root” component?</b></summary><br/>

Any React application begins at a “root” component. Usually,
it is created automatically when you start a new project.
For example, if you use **CodeSandbox** or **Create React App**,
the root component is defined in `src/App.js`.
If you use the framework **Next.js**, the root component is defined in `pages/index.js`.

Most React apps use components all the way down. This means that 
you won’t only use components for reusable pieces like buttons, 
but also for larger pieces like sidebars, lists, and ultimately, complete pages! 
Components are a handy way to organize UI code and markup, 
even if some of them are only used once.

Still, many websites only use React [to add interactivity to existing HTML pages](https://react.dev/learn/add-react-to-an-existing-project#using-react-for-a-part-of-your-existing-page). 
They have many root components instead of a single one for the entire page.

</details><hr/>

<details><summary><b>How to import and export a component</b></summary><br/>

The magic of components lies in their reusability: you can create components that are composed of other components. 
But as you nest more and more components, it often makes sense to start splitting them into different files.

You can move a component in three steps:
1. **Make** a new JS file to put the components in.
2. **Export** your function component from that file (using either [default or named](https://react.dev/learn/importing-and-exporting-components#default-vs-named-exports) exports).
3. **Import** it in the file where you’ll use the component (using the corresponding technique for importing default or named exports).
<div align='right'>
  <a href="https://react.dev/learn/importing-and-exporting-components#exporting-and-importing-a-component">
    <sup><b>React Docs ❱❱❱</b></sup>
  </a>
</div>
</details><hr/>

<details><summary><b>Default vs named exports</b></summary><br/>

There are two primary ways to export values with JavaScript: default exports and named exports. 
You can use one or both of them in the same file. 

**⛓ A file can have no more than one default export, but it can have as many named exports as you like.**

<img src="/extra-materials/images/i_import-export.svg"/>

How you export your component dictates how you must import it. You will get an error if you try to import a default export the same way you would a named export!

- Default
  - `export default function Button() {}`
  - `import Button from './Button.js';`
    - When you write a `default` import, you can put `any name` you want after import.
- Named
  - `export function Button() {}`
  - `import { Button } from './Button.js';`
    - In contrast, with named imports, the name has to match on both sides.
    - Either './Button.js' or './Button' will work with React, though the former is closer to how native ES Modules work.
<div align='right'>
  <a href="https://react.dev/learn/importing-and-exporting-components#default-vs-named-exports">
    <sup><b>React Docs ❱❱❱</b></sup>
  </a>
</div>
</details><hr/>

<details><summary><b>What is JSX?</b></summary><br/>

JSX is a syntax extension for JavaScript that lets you write HTML-like markup inside a JavaScript file.

Each React component is a JavaScript function that may contain some markup that React renders into the browser. 
React components use a syntax extension called JSX to represent that markup. 
JSX looks a lot like HTML, but it is a bit stricter and can display dynamic information.

**⛓ JSX and React are two separate things. They’re often used together, but you can use them independently of each other. 
JSX is a syntax extension, while React is a JavaScript library.**

```js
function App() {
  return <h1 className="greeting">Hello World</h1>;
}
```

Browsers don’t understand JSX out of the box, so most React users rely on a compiler like Babel or TypeScript [to transform JSX code into regular JavaScript](https://legacy.reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html#whats-a-jsx-transform).
This is what the modern JSX transform compiles it to:

```js
// Inserted by a compiler (don't import it yourself!)
import {jsx as _jsx} from 'react/jsx-runtime';

function App() {
  return _jsx('h1', { children: 'Hello world', className: 'greeting' });
}
```

If you don’t like JSX or can’t use it in your project, you can use `createElement` [as an alternative](https://react.dev/reference/react/createElement).

```js
import { createElement } from 'react';

function Greeting({ name }) {
  return createElement(
    'h1',
    { className: 'greeting' },
    'Hello world'
  );
}
```
<div align='right'>
  <a href="https://react.dev/learn/writing-markup-with-jsx">
    <sup><b>React Docs ❱❱❱</b></sup>
  </a>
</div>
</details><hr/>

<details><summary><b>The Rules of JSX</b></summary>

#### 1. Return a single root element
To return multiple elements from a component, wrap them with a single parent tag e.g. `<div>` or `<>`.
This empty tag is called a [Fragment](https://react.dev/reference/react/Fragment).
#### 2. Close all the tags
JSX requires tags to be explicitly closed: self-closing tags like <img> must become `<img />`, and wrapping tags like `<li> oranges` must be written as `<li>oranges</li>`.
#### 3. camelCase all most of the things
JSX turns into JavaScript and attributes written in JSX become keys of JavaScript objects. 
In your own components, you will often want to read those attributes into variables. 
But JavaScript has limitations on variable names. For example, their names can’t contain dashes or be reserved words like `class`.
This is why, in React, many HTML and SVG attributes are written in camelCase. See [the list of DOM component props](https://react.dev/reference/react-dom/components/common#common-props).
<div align='right'>
  <a href="https://react.dev/learn/writing-markup-with-jsx#the-rules-of-jsx">
    <sup><b>React Docs ❱❱❱</b></sup>
  </a>
</div>
</details><hr/>

<details><summary><b>Why do multiple JSX tags need to be wrapped?</b></summary><br/>

JSX looks like HTML, but under the hood it is transformed into plain JavaScript objects. 
You can’t return two objects from a function without wrapping them into an array. 
This explains why you also can’t return two JSX tags without wrapping them into another tag or a Fragment.
<div align='right'>
  <a href="https://react.dev/learn/writing-markup-with-jsx#why-do-multiple-jsx-tags-need-to-be-wrapped">
    <sup><b>React Docs ❱❱❱</b></sup>
  </a>
</div>
</details><hr/>

<details><summary><b>JavaScript in JSX with curly braces</b></summary><br/>

**1. JSX attributes inside quotes are passed as strings.** 
  - When you want to pass a string attribute to JSX, you put it in **single or double quotes**.
  - Unlike string literals in JavaScript, string literals within JSX attributes can’t contain escaped quotes.

**2. Curly braces let you bring JavaScript logic and variables into your markup.**
  - Sometimes you will want to add a little JavaScript logic or reference a dynamic property inside that markup.
    In this situation, you can **use curly braces** in your JSX to open a window to JavaScript.
    Any JavaScript expression will work between curly braces, including function calls.

**3. Curly braces work inside the JSX tag content or immediately after `=` in attributes.**
  - As text directly inside a JSX tag: 
    - ✅ `<h1>{name}'s To Do List</h1>` works, 
    - 🔴 but `<{tag}>Gregorio Y. Zara's To Do List</{tag}>` will not.
  - As attributes immediately following the `=` sign: 
    - ✅ `src={avatar}` will read the avatar variable, 
    - 🔴 but `src="{avatar}"` will pass the string `"{avatar}"`.

**4. `{{` and `}}` is not special syntax: it’s a JavaScript object tucked inside JSX curly braces.**
  - The next time you see `{{` and `}}` in JSX, know that it’s nothing more than an object inside the JSX curlies!
  - Inline style properties are written in camelCase. For example, HTML `<ul style="background-color: black">` would be written as `<ul style={{ backgroundColor: 'black' }}>`  in your component.
<div align='right'>
  <a href="https://react.dev/learn/javascript-in-jsx-with-curly-braces">
    <sup><b>React Docs ❱❱❱</b></sup>
  </a>
</div>
</details><hr/>

&nbsp;&nbsp;&nbsp;&nbsp;![][Recap]
- React components group rendering logic together with markup because they are related.
- JSX is similar to HTML, with a few differences. You can use a [converter](https://transform.tools/html-to-jsx) if you need to.
- JSX is stricter and has a few more rules than HTML.
- Error messages will often point you in the right direction to fixing your markup.
- Curly braces let you bring JavaScript logic and variables into your markup.
- JSX and React are two separate things. JSX is a syntax extension, while React is a JavaScript library.

<hr/>
<details><summary><b>What are props?</b></summary><br/>

- **Props** are the information that you pass to a JSX tag. 
- React components use `props` to communicate with each other.
Every parent component can pass some information to its child components by giving them props. 
- You can pass any JavaScript value through them, including `objects`, `arrays`, and `functions`.
- Props let you think about parent and child components independently.
<div align='right'>
  <a href="https://react.dev/learn/passing-props-to-a-component">
    <sup><b>React Docs ❱❱❱</b></sup>
  </a>
</div>
</details><hr/>

<details><summary><b>Passing props to a component</b></summary><br/>

**1. To pass props, add them to the JSX, just like you would with HTML attributes.**

```js
export default function Profile() {
  return (
    <Avatar
      person={{ name: 'Lin Lanying', imageId: '1bX5QH6' }}
      size={100}
    />
  );
}
```
**2. To read props, use the `function Avatar({ person, size })` destructuring syntax.**

- "Props" serve the same role as arguments serve for functions. 
In fact, props are the only argument to your component! 
React component functions accept a single argument - a `props` object.

```js
function Avatar(props) {
  let person = props.person;
  let size = props.size;
  // ...
}
```
- Usually you don’t need the whole props object itself, so you destructure it into individual props.
This syntax is called “destructuring”.

```js
function Avatar({ person, size }) {
  // ...
}
```

**3. You can specify a default value like `size = 100`, which is used for missing and undefined props.**

```js
function Avatar({ person, size = 100 }) {
  // ...
}
```

- The default value is only used if the size prop is missing or if you pass `size={undefined}`. 
But if you pass `size={null}` or `size={0}`, the default value will not be used.

**4. You can forward ALL props with `<Avatar {...props} />` JSX spread syntax, but don’t overuse it!**

- There’s nothing wrong with repetitive code—it can be more legible. But at times you may value conciseness. 
Because `Profile` don’t use any of their props directly, it can make sense to use a more concise “spread” syntax:

```js
function Profile(props) {
  return (
    <div className="card">
      <Avatar {...props} />
    </div>
  );
}
```

**5. Nested JSX like `<Card><Avatar /></Card>` will appear as Card component’s `children` prop.**

- You can think of a component with a children prop as having a “hole” that can be “filled in” by its parent components with arbitrary JSX. 
You will often use the children prop for visual wrappers: panels, grids, etc.

- When you nest content inside a JSX tag, the parent component will receive that content in a prop called `children`. 
For example, the Card component below will receive a children prop set to <Avatar /> and render it in a wrapper div:

```js
import Avatar from './Avatar.js';

function Card({ children }) {
  return (
    <div className="card">
      {children}
    </div>
  );
}

export default function Profile() {
  return (
    <Card>
      <Avatar/>
    </Card>
  );
}

```

<div align='right'>
  <a href="https://react.dev/learn/passing-props-to-a-component#passing-props-to-a-component">
    <sup><b>React Docs ❱❱❱</b></sup>
  </a>
</div>
</details><hr/>

<details><summary><b>Props are not always static</b></summary><br/>

- A component may receive different props over time.
- Props reflect a component’s data at any point in time, rather than only in the beginning.
- However, props are **immutable** — a term from computer science meaning “unchangeable”. 
When a component needs to change its props (for example, in response to a user interaction or new data), 
it will have to “ask” its parent component to pass it different props — a new object! 
Its old props will then be cast aside, and eventually the JavaScript engine will reclaim the memory taken by them.
<div align='right'>
  <a href="https://react.dev/learn/passing-props-to-a-component#how-props-change-over-time">
    <sup><b>React Docs ❱❱❱</b></sup>
  </a>
</div>
</details><hr/>

&nbsp;&nbsp;&nbsp;&nbsp;![][Recap]
- Props are the information (including objects, arrays, and functions) that you pass to a JSX tag.
- Props are read-only snapshots in time: every render receives a new version of props. 
- You can’t change props. When you need interactivity, you’ll need to set state.

<hr/>
<details><summary><b>Conditional rendering</b></summary><br/>

In React, control flow (like conditions) is handled by JavaScript.

**1. You can return a JSX expression conditionally with an `if` statement.**

```js
function Item({ name, isPacked }) {
    if (isPacked) {
        return <li className="item">{name} ✔</li>;
    }
    return <li className="item">{name}</li>;
}

```

**2. You can use a compact syntax for writing a conditional expression — the conditional operator or “ternary operator”.**
  - In JSX, `{cond ? <A /> : <B />}` means “_if `cond`, render `<A />`, otherwise `<B />`_”.

```js
function Item({ name, isPacked }) {
    return (
        <li className="item">
            {isPacked ? name + ' ✔' : name}
        </li>
    );
}
```

**3. You can render some JSX when the condition is `true`, or render nothing otherwise using logical `AND` operator (`&&`) .**
  - In JSX, `{cond && <A />}` means “_if `cond`, render `<A />`, otherwise nothing_”.
  - Don’t put numbers on the left side of `&&.` if the left side is 0, then the whole expression gets that value (0), and React will happily render `0` rather than nothing.

```js
function Item({ name, isPacked }) {
    return (
        <li className="item">
            {name} {isPacked && '✔'}
        </li>
    );
}
```

**4. You can conditionally save some JSX to a variable and then include it inside other JSX by using the curly braces.**

```js
function Item({ name, isPacked }) {
  let itemContent = name;
  if (isPacked) {
    itemContent = name + " ✔";
  }
  return (
    <li className="item">
      {itemContent}
    </li>
  );
}

// this works not only for text, but for arbitrary JSX too:
function Item2({ name, isPacked }) {
    let itemContent = name;
    if (isPacked) {
        itemContent = (
            <del>
                {name + " ✔"}
            </del>
        );
    }
    return (
        <li className="item">
            {itemContent}
        </li>
    );
}
```

<div align='right'>
  <a href="https://react.dev/learn/conditional-rendering">
    <sup><b>React Docs ❱❱❱</b></sup>
  </a>
</div>
</details><hr/>

<details><summary><b>Rendering data from arrays</b></summary><br/>

You will often need to show several instances of the same component using different data when building interfaces.
In these situations, you can store that data in JavaScript objects and arrays and use methods like `map()` and `filter()` to render lists of components from them.

```js
// 1. Move the data into an array:
const people = ['Alesia', 'John', 'Ben', 'Alex']

// 2. Map the people members into a new array of JSX nodes:
const listItems = people.map(person => <li>{person}</li>);

// 3. Return listItems from your component:
return <ul>{listItems}</ul>;
```
```js
// Here is the result:
const people = ['Alesia', 'John', 'Ben', 'Alex']

export default function Members() {
    const listItems = people.map(person =>
        <li>{person}</li>
    );
    return <ul>{listItems}</ul>;
}
```
<div align='right'>
  <a href="https://react.dev/learn/rendering-lists#rendering-data-from-arrays">
    <sup><b>React Docs ❱❱❱</b></sup>
  </a>
</div>
</details><hr/>

<details><summary><b>Filtering arrays of items</b></summary><br/>

This data can be structured even more.
```js
const people = [{
  name: 'Creola Katherine Johnson',
  profession: 'mathematician',
}, {
  name: 'Mario José Molina-Pasquel Henríquez',
  profession: 'chemist',
}, {
  name: 'Mohammad Abdus Salam',
  profession: 'physicist',
}, {
  name: 'Percy Lavon Julian',
  profession: 'chemist',  
}];
```

Let’s say you want a way to only show people whose profession is `chemist`.

```js
// 1. Create a new array of just “chemist” people:
const chemists = people.filter(person =>
    person.profession === 'chemist'
);

// 2. Map over chemists:
const listItems = chemists.map(person =>
    <li>
        <b>{person.name}:</b>
        {' ' + person.profession}
    </li>
);

// 3. Return the listItems from your component:
return <ul>{listItems}</ul>;
```
```js
// Here is the result:
export default function List() {
  const chemists = people.filter(person =>
    person.profession === 'chemist'
  );
  const listItems = chemists.map(person =>
      <li>
          <b>{person.name}:</b>
          {' ' + person.profession}
      </li>
  );
  return <ul>{listItems}</ul>;
}
```

<div align='right'>
  <a href="https://react.dev/learn/rendering-lists#filtering-arrays-of-items">
    <sup><b>React Docs ❱❱❱</b></sup>
  </a>
</div>
</details><hr/>

<details><summary><b>Keeping list items in order with <code>key</code></b></summary><br/>

Notice that all the examples above show an error in the console:
`Warning: Each child in a list should have a unique “key” prop.`

You need to give each array item a `key` — **a string or a number that uniquely identifies it** among other items in that array:

```js
<li key={person.id}>...</li>
```
<div align="center"><sub>✧ JSX elements directly inside a <code>map()</code> call <b>always need keys</b>! ✧ </sub></div><br />

Keys tell React which array item each component corresponds to, so that it can match them up later. 
This becomes important if your array items can move (e.g. due to sorting), get inserted, or get deleted. 
A well-chosen `key` helps React infer what exactly has happened, and make the correct updates to the DOM tree.
<div align='right'>
  <a href="https://react.dev/learn/rendering-lists#keeping-list-items-in-order-with-key">
    <sup><b>React Docs ❱❱❱</b></sup>
  </a>
</div>
</details><hr/>

<details><summary><b>How to render not one, but several DOM nodes for each list item</b></summary><br/>

The short `<>...</>` Fragment syntax won’t let you pass a key, 
so you need to either group them into a single `<div>`, 
or use the slightly longer and more explicit `<Fragment>` syntax:

```js
import { Fragment } from 'react';

// ...

const listItems = people.map(person =>
  <Fragment key={person.id}>
    <h1>{person.name}</h1>
    <p>{person.bio}</p>
  </Fragment>
);
```
<div align='right'>
  <a href="https://react.dev/learn/rendering-lists#displaying-several-dom-nodes-for-each-list-item">
    <sup><b>React Docs ❱❱❱</b></sup>
  </a>
</div>
</details><hr/>

<details><summary><b>Where to get your <code>key</code></b></summary><br/>

**1. Data from a database:** If your data is coming from a database, you can use the database keys/IDs, which are unique by nature.

**2. Locally generated data:** If your data is generated and persisted locally, use an incrementing counter, `crypto.randomUUID()` or a package like `uuid` when creating items.
<div align='right'>
  <a href="https://react.dev/learn/rendering-lists#where-to-get-your-key">
    <sup><b>React Docs ❱❱❱</b></sup>
  </a>
</div>
</details><hr/>

<details><summary><b>The rules of keys</b></summary><br/>

- **Keys must be unique among siblings.**
    - However, it’s okay to use the same keys for JSX nodes in **_different_** arrays.
- **Keys must not change** or that defeats their purpose!
  - Don’t generate them while rendering.
<div align='right'>
  <a href="https://react.dev/learn/rendering-lists#rules-of-keys">
    <sup><b>React Docs ❱❱❱</b></sup>
  </a>
</div>
</details><hr/>

<details><summary><b>Why does React need keys?</b></summary><br/>

**JSX keys** in an array let us uniquely identify an item between its siblings. 
A well-chosen `key` provides more information than the position within the array. 
Even if the position changes due to reordering, the `key` lets React identify the item throughout its lifetime.

- **Index as a key often leads to subtle and confusing bugs.**
  - You might be tempted to use an item’s `index` in the array as its `key`.
    In fact, that’s what React will use if you don’t specify a `key` at all.
    But the order in which you render items will change over time if an item is inserted, deleted, or if the array gets reordered.

- **Do not generate keys on the fly, e.g. with `key={Math.random()}`.**
  - This will cause keys to never match up between renders, leading to all your components and DOM being recreated every time. 
  Not only is this slow, but it will also lose any user input inside the list items. 
  Instead, use a stable ID based on the data.

- **Note that your components won’t receive key as a prop.**
  - It’s only used as a hint by React itself. 
  If your component needs an <code>ID</code>, you have to pass it as a separate <code>prop</code>:</sub></div>
  `<Profile key={id} userId={id} />`

<div align='right'>
  <a href="https://react.dev/learn/rendering-lists#why-does-react-need-keys">
    <sup><b>React Docs ❱❱❱</b></sup>
  </a>
</div>
</details><hr/>

&nbsp;&nbsp;&nbsp;&nbsp;![][Recap]
- In React, you can conditionally render JSX using JavaScript syntax like `if` statements, `&&`, and `? :` operators.
- The shortcuts are common, but you don’t have to use them if you prefer plain `if`.
- You can use the [JavaScript array methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) to manipulate an array of data.
- You need to give each array item a `key` — a string or a number that uniquely identifies it among other items in that array.
- Rather than generating keys on the fly, you should include them in your data.
- Keys must be unique among siblings. Keys must not change.
<hr/>

<details><summary><b></b></summary><br/>

<div align='right'>
  <a href="">
    <sup><b>React Docs ❱❱❱</b></sup>
  </a>
</div>
</details><hr/>


[Recap]: https://img.shields.io/badge/recap-149eca.svg?&logo=react&logoColor=white&style=for-the-badge
