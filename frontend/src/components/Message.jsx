const Message = () => {
  return (
    <div className="flex justify-end items-center w-full mb-4">
      <div className="max-w-xs">
        <div className="chat chat-end">
          <div className="chat-bubble chat-bubble-primary">
            <p className="text-sm">message</p>
          </div>
        </div>
      </div>
      <div className="chat-image avatar ml-2">
        <div className="w-10 rounded-full">
          <img
            src="https://www.milton.edu/wp-content/uploads/2019/11/avatar-placeholder.jpg"
            alt="avatar"
          />
        </div>
      </div>
    </div>
  )
}

export default Message
