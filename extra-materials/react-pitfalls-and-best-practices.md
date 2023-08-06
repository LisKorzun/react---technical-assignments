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
- The snippet above is very slow and causes bugs. Instead, define every component at the top level.
- Components are regular JavaScript functions, so you can keep multiple components in the same file. 
This is convenient when components are relatively small or tightly related to each other. 
If this file gets crowded, you can always move it to a separate file.

**⛓ When a child component needs some data from a parent, pass it by props instead of nesting definitions.**
    <div align='right'>
        <a href="https://react.dev/learn/your-first-component#nesting-and-organizing-components">
            <sup><b>React Docs ❱❱❱</b></sup>
        </a>
    </div>
</details><hr/>

<details><summary><b>Always give meaningful names to your component functions and the files that contain them.</b></summary><br/>

- Components without names, like `export default () => {}`, are discouraged because they make debugging harder.
<div align='right'>
    <a href="https://react.dev/learn/importing-and-exporting-components#default-vs-named-exports">
        <sup><b>React Docs ❱❱❱</b></sup>
    </a>
</div>
</details><hr/>

<details><summary><b>Stick to one style of exporting components</b></summary><br/>

- People often use default exports if the file exports only one component, and use named exports if it exports multiple components and values.
- To reduce the potential confusion between default and named exports, some teams choose to only stick to one style (default or named), or avoid mixing them in a single file. Do what works best for you!
<div align='right'>
    <a href="https://react.dev/learn/importing-and-exporting-components#exporting-and-importing-multiple-components-from-the-same-file">
        <sup><b>React Docs ❱❱❱</b></sup>
    </a>
</div>
</details><hr/>

<details><summary><b></b></summary><br/>

-
  <div align='right'>
      <a href="https://react.dev/learn/passing-props-to-a-component">
          <sup><b>React Docs ❱❱❱</b></sup>
      </a>
  </div>
</details><hr/>