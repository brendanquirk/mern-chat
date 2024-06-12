import Messages from './Messages'

const MessageContainer = () => {
  const noChatSelected = true
  return (
    <div className="flex flex-col h-full">
      {noChatSelected ? (
        <NoChat />
      ) : (
        <>
          <Messages />
          <div className="bg-gray-200 py-2 px-4">
            <input
              type="text"
              placeholder="Type your message..."
              className="w-full bg-white border border-gray-400 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
            />
          </div>
        </>
      )}
    </div>
  )
}

const NoChat = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center p-4">
      <h1 className="text-2xl font-bold mb-2">Welcome!</h1>
      <p className="text-lg">Select a user to start chatting.</p>
    </div>
  )
}

export default MessageContainer
