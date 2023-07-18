import { MultiChatSocket, MultiChatWindow, useMultiChatLogic } from 'react-chat-engine-advanced'

const ChatsPage = (props) => {
    const chatProps = useMultiChatLogic('a797b5de-5a7b-45e7-9448-ab0fa7053091', 
    props.user.username,
     props.user.secret
    );
    return (
    <div style={{ height: '100vh'}}>
        <MultiChatSocket {...chatProps}/>
        <MultiChatWindow {...chatProps} style={{ height: '100%'}}/>
    </div>
    )
}

export default ChatsPage