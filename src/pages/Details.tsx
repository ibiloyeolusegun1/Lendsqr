import UserDetails from "../components/userDashboard/details/UserDetails"
import Header from "../components/userDashboard/navbar/Header"
import Sidebar from "../components/userDashboard/navbar/Sidebar"

import '../scss/pages/_dashboard.scss'

function Details() {
  return (
    <main>
    <Header />
    <Sidebar />
    <section className='dashboard'>
      <UserDetails />
    </section>
  </main>
  )
}

export default Details
