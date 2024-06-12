import User from './User'

const UserList = () => {
  const users = [
    { id: 1, username: 'User 1' },
    { id: 2, username: 'User 2' },
    { id: 3, username: 'User 3' },
    { id: 4, username: 'User 4' },
    { id: 5, username: 'User 5' },
  ]
  return (
    <div>
      <ul>
        {users.map((user) => (
          <User key={user.id} user={user} />
        ))}
      </ul>
    </div>
  )
}

export default UserList
