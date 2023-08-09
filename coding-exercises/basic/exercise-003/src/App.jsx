function Messages({ messages = [] }) {
    return <>{messages.length && <p>New messages</p>}</>;
}

export default function App() {
    return <Messages/>;
}
