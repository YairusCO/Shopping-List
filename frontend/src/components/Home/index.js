import Home from './Home'

import { inject } from 'mobx-react'
import { observer } from 'mobx-react'
import { withTranslation } from 'react-i18next'

export default inject(({ shoppingListStore }) => ({
  categories: shoppingListStore.categories,
  setCategory: shoppingListStore.setCategory,
  addToShoppingList: shoppingListStore.addToShoppingList,
  products: shoppingListStore.products,
}))(observer(withTranslation()(Home)))
