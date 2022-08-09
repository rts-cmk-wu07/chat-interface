import { useState, useContext, useEffect } from "react"
import { MessageContext } from "../MessageContext"

export default function ChatBox({ isWriting, setIsWriting }) {
	const [text, setText] = useState("")
	const [selfTyping, setSelfTyping] = useState(false)
	
	const { setMessages } = useContext(MessageContext)

	useEffect(function() {
		setTimeout(function() {
			setIsWriting(false)
			setSelfTyping(false)
		}, 1000)
	}, [isWriting])

	function sendMessage(event) {
		setMessages(previousState => [...previousState, {message: text}])
		setText("")
	}

	return (
	<>
		{isWriting && !selfTyping ? <div>...</div> : null}
		<input type="text" value={text} onKeyUp={() => {setIsWriting(true);setSelfTyping(true)}} onChange={e => setText(e.target.value)} />
		<button onClick={sendMessage}>Send</button>
	</>
	)
}