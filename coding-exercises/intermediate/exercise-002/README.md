### 𝗘𝗫𝗘𝗥𝗖𝗜𝗦𝗘 𝟮

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
<div>💡 𝗢𝗣𝗧𝗜𝗢𝗡 𝟭 ➠ 0 </div>
<div>💡 𝗢𝗣𝗧𝗜𝗢𝗡 𝟮 ➠ 1 </div>
<div>💡 𝗢𝗣𝗧𝗜𝗢𝗡 𝟯 ➠ 2 </div>
<div>💡 𝗢𝗣𝗧𝗜𝗢𝗡 𝟰 ➠ 3 </div>
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