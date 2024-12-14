import UserFilter from "../components/userDashboard/filter/UserFilter"
import Header from "../components/userDashboard/navbar/Header"
import Sidebar from "../components/userDashboard/navbar/Sidebar"

function Filter() {
  return (
    <main>
      <Header />
      <Sidebar />
      <section className='dashboard'>
        <UserFilter />
      </section>
    </main>
  )
}

export default Filter
