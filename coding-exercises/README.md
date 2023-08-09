<a href="https://github.com/LisKorzun/react---technical-assignments/tree/main#readme-top">
    <sup><b>❰❰❰ back to home</b></sup>
</a>
<a name="top"></a>

<div align="right">
    <a href="https://react.dev/">
        <img alt="react logo" src="/extra-materials/images/react-logo.png" height="150"/>
    </a>
    <h1>𝙲𝙾𝙳𝙸𝙽𝙶 𝙴𝚇𝙴𝚁𝙲𝙸𝚂𝙴𝚂</h1>
</div>
<br />
<br />
<div align="center">
    <a href="#basic-react-coding-exercises">
        <img alt="Releases" src="https://img.shields.io/badge/BASIC%20EXERCISES-2-white?&logo=codeforces&logoColor=white&labelColor=DB6BAD&style=for-the-badge" />
    </a>
    <a href="#intermediate-react-coding-exercises">
        <img alt="Releases" src="https://img.shields.io/badge/INTERMEDIATE%20EXERCISES-1-white?&logo=codeforces&logoColor=white&labelColor=6B75DB&style=for-the-badge" />
    </a>
    <a href="#advanced-react-coding-exercises">
        <img alt="Releases" src="https://img.shields.io/badge/ADVANCED%20EXERCISES-1-white?&logo=codeforces&logoColor=white&labelColor=44AC99&style=for-the-badge" />
    </a>
</div>
<br />

## BASIC REACT CODING EXERCISES
### EXERCISE 1𝕓
![][Basic] 

Something isn’t right about this component. How can it be fixed?

```js
export default function Avatar() {
  return
    <img src="https://i.imgur.com/jA8hHMpm.jpg" alt="Katsuko Saruhashi" />;
}
```

<div>𝗢𝗣𝗧𝗜𝗢𝗡 𝟭 ➠ Write return statements all on one line. </div>
<div>𝗢𝗣𝗧𝗜𝗢𝗡 𝟮 ➠ Wrap return statements in a pair of parentheses. </div>
<div>𝗢𝗣𝗧𝗜𝗢𝗡 𝟯 ➠ Any of the solutions above. </div>
<div>𝗢𝗣𝗧𝗜𝗢𝗡 𝟰 ➠ There is no appropriate solution. </div>
<br />
<details><summary>𝗔𝗡𝗦𝗪𝗘𝗥</summary>

##### 𝗢𝗣𝗧𝗜𝗢𝗡 𝟯
Return statements of React components can be written all on one line or must be wrapped in a pair of parentheses.
</details>
<br/>
<div align='right'><a href="#top"><sup><b>🔝 back to top 🔝</b></sup></a></div>
<hr/>

### EXERCISE 2𝕓
![][Basic]

How to import the following component considering that this component lives in a file, named `Avatar.jsx`?

```js
export default function Avatar() {
    return <img src="https://i.imgur.com/jA8hHMpm.jpg" alt="Katsuko Saruhashi" />;
}
```

<div>𝗢𝗣𝗧𝗜𝗢𝗡 𝟭 ➠ <code>import Avatar from './Avatar.jsx'</code> </div>
<div>𝗢𝗣𝗧𝗜𝗢𝗡 𝟮 ➠ <code>import Component from './Avatar'</code> </div>
<div>𝗢𝗣𝗧𝗜𝗢𝗡 𝟯 ➠ <code>import App from './Avatar'</code></div>
<div>𝗢𝗣𝗧𝗜𝗢𝗡 𝟰 ➠ Any of the solutions above.</div>
<div>𝗢𝗣𝗧𝗜𝗢𝗡 𝟱 ➠ There is no appropriate solution.</div>
<br />
<details><summary>𝗔𝗡𝗦𝗪𝗘𝗥</summary>

##### 𝗢𝗣𝗧𝗜𝗢𝗡 𝟰
When you write a `default` import, you can put `any name` you want after import.
Either './Button.js' or './Button' will work with React, though the former is closer to how native ES Modules work.
</details>
<br/>
<div align='right'><a href="#top"><sup><b>🔝 back to top 🔝</b></sup></a></div>
<hr/>

### EXERCISE 3𝕓
![][Basic]

Considering the code below, what will be displayed in the browser?

```js
function Messages({ messages = [] }) {
    return <>{messages.length && <p>New messages</p>}</>;
}

export default function App() {
    return <Messages />;
}

```

<div>𝗢𝗣𝗧𝗜𝗢𝗡 𝟭 ➠ Nothing will be displayed. </div>
<div>𝗢𝗣𝗧𝗜𝗢𝗡 𝟮 ➠  A <code>New messages</code> message will be displayed. </div>
<div>𝗢𝗣𝗧𝗜𝗢𝗡 𝟯 ➠ <code>0</code> will be displayed.</div>
<br />
<details><summary>𝗔𝗡𝗦𝗪𝗘𝗥</summary>

##### 𝗢𝗣𝗧𝗜𝗢𝗡 𝟯

To test the condition, JavaScript converts the left side to a boolean automatically. 
However, if the left side is 0, then the whole expression gets that value (0), and React will happily render `0` rather than nothing.
</details>
<br/>
<div align='right'><a href="#top"><sup><b>🔝 back to top 🔝</b></sup></a></div>
<hr/>

## INTERMEDIATE REACT CODING EXERCISES
### EXERCISE 2𝕚
![][Intermediate] [![][useEffect Badge]][useEffect Link]

Considering the code below, how many times will the `Hello` message be displayed on the console?

```js
import { useEffect, useState } from 'react'

function App(props) {
    const [message, setMessage] = useState('Hi!')

    useEffect(() => {
        console.log('Hello')
        setMessage('Bye!')
    }, [props.visible])

    return <div>{message}</div>
}
```
<div>𝗢𝗣𝗧𝗜𝗢𝗡 𝟭 ➠ 0 </div>
<div>𝗢𝗣𝗧𝗜𝗢𝗡 𝟮 ➠ 1 </div>
<div>𝗢𝗣𝗧𝗜𝗢𝗡 𝟯 ➠ 2 </div>
<div>𝗢𝗣𝗧𝗜𝗢𝗡 𝟰 ➠ 3 </div>
<br />
<details><summary>𝗔𝗡𝗦𝗪𝗘𝗥</summary>
<p>

##### 𝗢𝗣𝗧𝗜𝗢𝗡 𝟮
When the component is added to the DOM, React will run your setup function with your Effect’s logic.
Since the dependency is not changed, setup function won't be run during re-render.

<sup>🔖 <b>NOTE:</b> When Strict Mode is on, React will run one extra <b>development-only</b> 
setup+cleanup cycle before the first real setup.
This is just a stress-test that verifies your Effect’s logic is implemented correctly.</sup>
<a href="https://react.dev/reference/react/useEffect#my-effect-runs-twice-when-the-component-mounts"><sup><b>See more ❱❱❱</b></sup></a>
</p>
</details>
<br/>
<div align='right'><a href="#top"><sup><b>🔝 back to top 🔝</b></sup></a></div>
<hr/>


## ADVANCED REACT CODING EXERCISES
### EXERCISE 1𝕒
![][Advanced]

Which statement describes the code below?

```js
import { useState } from 'react'

const getData = () => new Promise((r) => setTimeout(() => r(Date.now()), 100))

function App() {
    const [result, setResult] = useState()
    const data = getData().then((value) => setResult(value))
    
    return (
        <div>
            {result === data.toString() ? (
                <div>Hi</div>
            ) : (
                <div>Bye</div>
            )}
        </div>
    )
}
```
<div>𝗢𝗣𝗧𝗜𝗢𝗡 𝟭 ➠ A <code>Bye</code> message will be displayed.</div>
<div>𝗢𝗣𝗧𝗜𝗢𝗡 𝟮 ➠ A <code>Hi</code> message will be displayed.</div>
<div>𝗢𝗣𝗧𝗜𝗢𝗡 𝟯 ➠ The code results in a memory leak. </div>
<div>𝗢𝗣𝗧𝗜𝗢𝗡 𝟰 ➠ <code>Maximum Call Stack Size Exceeded</code> error.</div>
<div>𝗢𝗣𝗧𝗜𝗢𝗡 𝟱 ➠ <code>setResult</code> is never called.</div>
<br />
<details><summary>𝗔𝗡𝗦𝗪𝗘𝗥</summary>
<p>

##### 𝗢𝗣𝗧𝗜𝗢𝗡 𝟭

<!-- TODO: explanation -->
</p>
</details>
<br/>
<div align='right'><a href="#top"><sup><b>🔝 back to top 🔝</b></sup></a></div>
<hr/>


<!-- REFERENCE LINKS -->
[useEffect Link]: https://react.dev/reference/react/useEffect

<!-- BADGES -->
[useEffect Badge]: https://img.shields.io/badge/Hook-useEffect-149eca.svg?&labelColor=23272f&logo=react

<!-- LEVELS LABELS -->
[Basic]: https://img.shields.io/badge/BASIC-DB6BAD?&logo=codeforces&logoColor=white&labelColor=DB6BAD
[Advanced]: https://img.shields.io/badge/ADVANCED-44AC99?&logo=codeforces&logoColor=white&labelColor=44AC99
[Intermediate]: https://img.shields.io/badge/INTERMEDIATE-6B75DB?&logo=codeforces&logoColor=white&labelColor=6B75DB
