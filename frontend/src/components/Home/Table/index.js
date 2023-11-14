import Table from './Table'
import { inject } from 'mobx-react'
import { observer } from 'mobx-react'

export default inject(({ shoppingListStore }) => ({
  categories: shoppingListStore.categories,

  products: shoppingListStore.products,
  productsCount: shoppingListStore.productsCount,
}))(observer(Table))
