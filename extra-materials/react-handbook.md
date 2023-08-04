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

<details><summary><b>What is React?</b></summary>
    <br/><p>React (aka React.js or ReactJS) is an open-source front-end JavaScript library 
    that is used for building composable user interfaces (UI), especially for single-page applications. 
    It is used for handling view layer for web and mobile apps based on components in a declarative approach. <br/>
    <div align='center'><sub>✧ React was created by Jordan Walke, a software engineer working for Facebook. ✧<br/>
    ✧ React was first deployed on Facebook's News Feed in 2011 and on Instagram in 2012. ✧</sub></div></p>
</details><hr/>

<details><summary><b>What is a React component?</b></summary>
    <br/>
    <p>React applications are built from isolated pieces of UI called components. 
    A component is a piece of the UI (user interface) that has its own logic and appearance.  
    <b><u>A React component is a JavaScript function that returns markup.</u></b> 
    Components can be as small as a button, or as large as an entire page. 
    React component names must always start with a capital letter, while HTML tags must be lowercase.</p>
    
```js
function MyButton() {
  return (
    <button>I'm a button</button>
  );
}
```
<div align='center'>
    <sup>✧ React lets you combine your markup, CSS, and JavaScript into custom “components”, reusable UI elements for your app. ✧<br/>
    ✧ Just like with HTML tags, you can compose, order and nest components to design whole pages. ✧<br/>✧ As your project grows, 
    you will notice that many of your designs can be composed by reusing components you already wrote, speeding up your development. ✧</sup>
</div>
</details><hr/>

<details><summary><b>How to define a component?</b> </summary>
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
**Step 1: Export the component.**
The `export default` prefix is a standard JavaScript syntax (not specific to React).

**Step 2: Define the function.** 
With `function Profile() { }` you define a JavaScript function with the name Profile.

**Step 3: Add markup.**
The component returns an <img /> tag with src and alt attributes. <img /> is written like HTML, 
but it is actually JavaScript under the hood! This syntax is called [JSX](https://react.dev/learn/writing-markup-with-jsx), and it lets you embed markup inside JavaScript.

**⛓ Return statements can be written all on one line 
or you must wrap it in a pair of parentheses.**
<div align="center">
  <sup>✧ There are still a few rare class component use cases that do not yet have a Hook-based equivalent. 
  <br/>Class components remain supported, and are documented in the <a href="https://react.dev/reference/react/legacy">Legacy API</a> section. ✧</sup>
</div>
</details><hr/>

&nbsp;&nbsp;&nbsp;&nbsp;![][Recap]
- React lets you create components, reusable UI elements for your app.
- In a React app, every piece of UI is a component.
- React components are regular JavaScript functions except:
  - Their names always begin with a capital letter. 
  - They return JSX markup.


[Recap]: https://img.shields.io/badge/recap-149eca.svg?&logo=react&logoColor=white&style=for-the-badge
