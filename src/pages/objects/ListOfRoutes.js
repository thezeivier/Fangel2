import Support from '../Support'
import FAQs from '../FAQs'
import PoliticsNPrivacy from '../PoliticsNPrivacy'
import TermsNConditions from '../TermsNConditions'
import Register from '../signInAndUp/Register'
import Login from '../signInAndUp/Login'
import RecoverPassword from '../signInAndUp/RecoverPassword'
import EmailSended from '../signInAndUp/EmailSended'
import NotFound from '../NotFound'

const ListOfRoutes = [
    {
        path: '/support',
        component: Support
    },
    {
        path: '/faqs',
        component: FAQs
    },
    {
        path: '/politics-privacy',
        component: PoliticsNPrivacy
    },
    {
        path: '/terms-conditions',
        component: TermsNConditions
    },
    {
        path: '/register',
        component: Register
    },
    {
        path: '/login',
        component: Login
    },
    {
        path: '/recover-password',
        component: RecoverPassword
    },
    {
        path: '/email-sended',
        component: EmailSended
    },
    {
        path: '/404',
        component: NotFound
    }
]

export default ListOfRoutes