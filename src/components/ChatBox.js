import { useState, useContext, useEffect } from "react"
import { MessageContext } from "../MessageContext"
import { OnlineContext } from "../OnlineContext"

export default function ChatBox({ user, isWriting, setIsWriting }) {
	const [text, setText] = useState("")
	const [selfTyping, setSelfTyping] = useState(false)
	
	const { setIsOnline, isOnline } = useContext(OnlineContext)
	const { setMessages } = useContext(MessageContext)

	useEffect(function() {
		setTimeout(function() {
			setIsWriting(false)
			setSelfTyping(false)
			setTimeout(function() {
				setIsOnline(isOnline.map(item => item.user === user ? { ...item, isOnline: false } : item))
			}, 4000)
		}, 1000)
	}, [isWriting])

	function sendMessage(event) {
		setMessages(previousState => [...previousState, {user, message: text}])
		setText("")
	}

	return (
	<>
		{isWriting && !selfTyping ? <div>...</div> : null}
		<input
			type="text"
			value={text}
			onKeyUp={() => {
				setIsWriting(true);
				setSelfTyping(true);
				setIsOnline(isOnline.map(item => item.user === user ? { ...item, isOnline: true } : item))
			}}
			onChange={e => setText(e.target.value)} />
		<button onClick={sendMessage}>Send</button>
	</>
	)
}