import { useEffect, useState } from 'react'

function App(props) {
    const [message, setMessage] = useState('Hi!')

    useEffect(() => {
        console.log('Hello')
        setMessage('Bye!')
    }, [props.visible])

    return (<div>{message}</div>)
}

export default App
