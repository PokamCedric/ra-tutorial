import mock from './mock'

import './cards'
import './table'
import './auth/jwt'
import './pages/faq'
import './apps/invoice'
import './autocomplete'
import './apps/userList'
import './pages/pricing'
import './pages/profile'
import './iconify-icons'
import './app-bar-search'
import './apps/permissions'
import './pages/help-center'
import './server-side-menu/vertical'
import './server-side-menu/horizontal'

mock.onAny().passThrough()
