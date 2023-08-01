import { useState } from 'react'

const getData = () => new Promise((r) => setTimeout(() => r(Date.now()), 100))

function App() {
    const [result, setResult] = useState()
    const data = getData().then((value) => setResult(value))

    console.log(data, data.toString(), result)

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

export default App
