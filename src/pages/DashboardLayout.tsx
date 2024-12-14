
import { Outlet } from 'react-router-dom'
// import UsersDashboard from '../components/userDashboard/dashboard/UsersDashboard'
// import Header from '../components/userDashboard/navbar/Header'
// import Sidebar from '../components/userDashboard/navbar/Sidebar'

import '../scss/pages/_dashboard.scss'

function DashboardLayout() {
  return (
    <main>
     
      <section>
        <Outlet />
      </section>
    </main>
  )
}

export default DashboardLayout
