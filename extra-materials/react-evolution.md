<a href="https://github.com/LisKorzun/react---technical-assignments/tree/main#readme-top">
    <sup><b>❰❰❰ back to home</b></sup>
</a>
<a name="top"></a>

<div align="right">
    <a href="https://react.dev/">
        <img alt="react logo" src="/extra-materials/images/react-logo.png" height="150"/>
    </a>
    <h1>𝙴𝚅𝙾𝙻𝚄𝚃𝙸𝙾𝙽</h1>
    <a href="https://github.com/facebook/react/releases"><sup><b>React Releases ❱❱❱</b></sup></a>
    <a href="https://github.com/reactjs/rfcs"><sup><b>Experimental Features ❱❱❱</b></sup></a>
    <br />
    <br />
</div>
<br />
<br />


## 💠 17.0.0 
<sup>October 20, 2020</sup> <a href="https://github.com/facebook/react/releases/tag/v17.0.0"><sup><b>Changelog ❱❱❱</b></sup></a>

<details><summary><b>React added support for a new version of JSX transform</b></summary><br/>

Browsers don’t understand JSX out of the box, so most React users rely on a compiler like Babel or TypeScript to transform JSX code into regular JavaScript.
#### Before
The old JSX transform turned JSX into `React.createElement(...)` calls.
A Babel plugin called `@babel/plugin-transform-react-jsx` transforms JSX into standard JavaScript objects that a JavaScript engine can parse.
Because JSX was compiled into `React.createElement`, we must import **React** in any file that contains JSX
#### After
In React 17 and starting with Babel version `v7.9.0`, `@babel/plugin-transform-react-jsx` plugin automatically imports “special functions” (`react/jsx-runtime` and `react/jsx-dev-runtime`) 
from the new React package when needed so that we don’t have to manually include them.

```js
// JSX
function Greet() {
  return <h1>Hello, world!</h1>;
}

```
```js
// The old JSX transform
import React from 'react';

function Greet() {
  return React.createElement('h1', null, 'Hello, world!');
}
```
```js
// The new JSX transform
// Inserted by a transpiler (don't import it manually)
import {jsx as _jsx} from 'react/jsx-runtime';

function Greet() {
  return _jsx('h1', { children: 'Hello, world!' });
}
```

### Benefits
- With the new transform, you can **use JSX without importing React**.
- Depending on your setup, its compiled output may **slightly improve the bundle size**.
<div align='right'>
    <a href="https://legacy.reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html#whats-a-jsx-transform">
        <sup><b>Blog Post ❱❱❱</b></sup>
    </a>
</div>
</details><hr/>

<details><summary><b></b></summary><br/>

#### Before

#### After

### Benefits

<div align='right'>
    <a href="">
        <sup><b>Blog Post ❱❱❱</b></sup>
    </a>
</div>
</details><hr/>


