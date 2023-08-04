<a href="https://github.com/LisKorzun/react---technical-assignments/tree/main#readme-top">
    <sup><b>❰❰❰ back to home</b></sup>
</a>
<a name="top"></a>

<div align="right">
    <a href="https://react.dev/">
        <img alt="react logo" src="/extra-materials/images/react-logo.png" height="150"/>
    </a>
    <h1>𝙿𝙸𝚃𝙵𝙰𝙻𝙻𝚂 & 𝙱𝙴𝚂𝚃 𝙿𝚁𝙰𝙲𝚃𝙸𝙲𝙴𝚂</h1>
</div>
<br />
<br />

<details><summary><b>React components names must start with a capital letter.</b></summary><br/>

- React components are regular JavaScript functions, but their names must start with a capital letter or they won’t work!
    <div align='right'>
        <a href="https://react.dev/learn/your-first-component#step-2-define-the-function">
            <sup><b>React Docs ❱❱❱</b></sup>
        </a>
    </div>
</details><hr/>

<details><summary><b>Return statements of React components can be written all on one line or must be wrapped in a pair of parentheses.</b></summary><br/>

- Without parentheses, any code on the lines after return will be ignored!
    <div align='right'>
        <a href="https://react.dev/learn/your-first-component#step-3-add-markup">
            <sup><b>React Docs ❱❱❱</b></sup>
        </a>
    </div>
</details><hr/>

<details><summary><b>Never define a component inside another component.</b></summary><br/>

- Components can render other components, but you must never nest their definitions:
```js
export default function Gallery() {
  function Profile() {
    // ...
  }
  // ...
}
```
- The snippet above is very slow and causes bugs. Instead, define every component at the top level

    <div align='right'>
        <a href="https://react.dev/learn/your-first-component#nesting-and-organizing-components">
            <sup><b>React Docs ❱❱❱</b></sup>
        </a>
    </div>
</details><hr/>

<details><summary><b>When a child component needs some data from a parent, pass it by props instead of nesting definitions.</b></summary><br/>

-  
    <div align='right'>
        <a href="https://react.dev/learn/passing-props-to-a-component">
            <sup><b>React Docs ❱❱❱</b></sup>
        </a>
    </div>
</details><hr/>