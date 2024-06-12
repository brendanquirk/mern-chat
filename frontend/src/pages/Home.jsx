import MessageContainer from '../components/MessageContainer'
import Sidebar from '../components/Sidebar'

const Home = () => {
  return (
    <div className="flex h-screen w-full">
      <Sidebar />
      <div className="flex-1 bg-gray-200 p-4 min-w-lg">
        <MessageContainer />
      </div>
    </div>
  )
}

export default Home
