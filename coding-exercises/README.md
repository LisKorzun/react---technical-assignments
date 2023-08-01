<a name="top"></a>

<a href="https://github.com/LisKorzun/react---technical-assignments/tree/main#readme-top">
    <sup><b>❰❰❰ back to home</b></sup>
</a>

<div align="right">
    <a href="https://react.dev/">
        <img alt="react logo" src="/react-logo.png" height="150"/>
    </a>
    <h1>𝙲𝙾𝙳𝙸𝙽𝙶 𝙴𝚇𝙴𝚁𝙲𝙸𝚂𝙴𝚂</h1>
</div>
<br />

<div align="center">
    <a href="#basic-react-coding-exercises">
        <img alt="Releases" src="https://img.shields.io/badge/BASIC%20EXERCISES-0-white?&logo=codeforces&logoColor=white&labelColor=DB6BAD&style=for-the-badge" />
    </a>
    <a href="#intermediate-react-coding-exercises">
        <img alt="Releases" src="https://img.shields.io/badge/INTERMEDIATE%20EXERCISES-1-white?&logo=codeforces&logoColor=white&labelColor=6B75DB&style=for-the-badge" />
    </a>
    <a href="#advanced-react-coding-exercises">
        <img alt="Releases" src="https://img.shields.io/badge/ADVANCED%20EXERCISES-0-white?&logo=codeforces&logoColor=white&labelColor=44AC99&style=for-the-badge" />
    </a>
</div>

## BASIC REACT CODING EXERCISES

## INTERMEDIATE REACT CODING EXERCISES
### 𝗘𝗫𝗘𝗥𝗖𝗜𝗦𝗘 1


### EXERCISE 2𝒊
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
<div>❖ 𝗢𝗣𝗧𝗜𝗢𝗡 𝟭 ➠ 0 </div>
<div>❖ 𝗢𝗣𝗧𝗜𝗢𝗡 𝟮 ➠ 1 </div>
<div>❖ 𝗢𝗣𝗧𝗜𝗢𝗡 𝟯 ➠ 2 </div>
<div>❖ 𝗢𝗣𝗧𝗜𝗢𝗡 𝟰 ➠ 3 </div>
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

### 𝗘𝗫𝗘𝗥𝗖𝗜𝗦𝗘 3

## ADVANCED REACT CODING EXERCISES


<!-- REFERENCE LINKS -->
[useEffect Link]: https://react.dev/reference/react/useEffect

<!-- BADGES -->
[useEffect Badge]: https://img.shields.io/badge/Hook-useEffect-149eca.svg?&labelColor=23272f&logo=react

<!-- LEVELS LABELS -->
[Basic]: https://img.shields.io/badge/BASIC-DB6BAD?&logo=codeforces&logoColor=white&labelColor=DB6BAD
[Advanced]: https://img.shields.io/badge/ADVANCED-44AC99?&logo=codeforces&logoColor=white&labelColor=44AC99
[Intermediate]: https://img.shields.io/badge/INTERMEDIATE-6B75DB?&logo=codeforces&logoColor=white&labelColor=6B75DB
