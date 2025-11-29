const Child = ({onSendMessage}: any) => {

    return (
        <div>
         <h1>child component</h1>
         <button onClick={() => onSendMessage('send message')}>Child click</button>
        </div>
    )
}

export default Child;