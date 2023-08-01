import { useState } from 'react'

const getData = () => new Promise((r) =>
    // "r" is a resolve function which will be called with the timestamp of the current time
    // after promise fulfills 100ms later
    setTimeout(() => r(Date.now()), 100))

function App() {
    // The constant "result" stores the timestamp in milliseconds which is number
    const [result, setResult] = useState()
    // The function "getData" returns a promise,
    // so the constant "data" stores this promise.
    // data.toString() === '[object Promise]'
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
