
import UsersDashboard from '../components/userDashboard/dashboard/UsersDashboard'
import Header from "../components/userDashboard/navbar/Header"
import Sidebar from "../components/userDashboard/navbar/Sidebar"

function Dashboard() {
  return (
    <main>
      <Header />
      <Sidebar />
      <section className='dashboard'>
        <UsersDashboard />
      </section>
    </main>
  )
}

export default Dashboard
