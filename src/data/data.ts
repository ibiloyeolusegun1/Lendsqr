import { DashboardUserInterface } from "../utils/types";

import user1 from '../assets/dash-user.png'
import user2 from '../assets/dash-active-user.png'
import user3 from '../assets/dash-user-with-loan.png'
import user4 from '../assets/dash-user-with-saving.png'

export const dashboardUserData: DashboardUserInterface[] = [
    {
        id: 1,
        image: user1,
        user: 'USERS',
        numUser: '2,453',
    },
    {
        id: 2,
        image: user2,
        user: 'ACTIVE USERS',
        numUser: '2,453',
    },
    {
        id: 3,
        image: user3,
        user: 'USERS WITH LOANS',
        numUser: '12,453',
    },
    {
        id: 4,
        image: user4,
        user: 'USERS WITH SAVINGS',
        numUser: '102,453',
    },
]