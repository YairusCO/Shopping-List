import RootStore from './RootStore'
import AuthenticationStore from '../AuthenticationStore'
import ShoppingListStore from '../ShoppingListStore'

import storage from '../../services/storage'
import router from '../../services/router'

export default new RootStore({
  router,
  storage,
  window,
  shoppingListStore: new ShoppingListStore(),
  authenticationStore: new AuthenticationStore({
    doesUserAuthenticated: false,
    token: null,
    username: '',
    password: '',
    whenLoginRouteUrl: '/',
    logoutUrl: '/login',
  }),
})
