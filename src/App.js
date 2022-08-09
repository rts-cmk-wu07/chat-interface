import './App.css';
import {useState} from "react"
import Message from './components/Message';
import ChatBox from './components/ChatBox';
import {MessageContext} from './MessageContext';

function App() {
  const [messages, setMessages] = useState([])
  const [isWriting, setIsWriting] = useState(false)

  return (
    <MessageContext.Provider value={{messages, setMessages}}>
      <div className="App">
        <section>
          <section>
            {messages.map(message => <Message thisIs="user1" user={message.user} text={message.message} />)}
          </section>
          <section>
            <ChatBox user="user1" isWriting={isWriting} setIsWriting={setIsWriting} />
          </section>
        </section>
        <section>
          <section>
            {messages.map(message => <Message thisIs="user2" user={message.user} text={message.message} />)}
          </section>
          <section>
            <ChatBox user="user2" isWriting={isWriting} setIsWriting={setIsWriting} />
          </section>
        </section>
      </div>
    </MessageContext.Provider>
  );
}

export default App;
