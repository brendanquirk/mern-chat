import User from './User'
import useGetChats from '../hooks/useGetChats'

const UserList = () => {
  const { chats } = useGetChats()

  return (
    <div>
      {chats.length === 0 ? (
        <p>Loading chats...</p>
      ) : (
        <ul>
          {chats.users.map((user) => (
            <User key={user._id} user={user} />
          ))}
        </ul>
      )}
    </div>
  )
}

export default UserList
