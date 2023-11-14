import Form from './Form'
import { inject } from 'mobx-react'
import { observer } from 'mobx-react'

export default inject(({ shoppingListStore }) => ({
  categories: shoppingListStore.categories,
  setCategory: shoppingListStore.setCategory,
  addToShoppingList: shoppingListStore.addToShoppingList,
  products: shoppingListStore.products,
  productsCount: shoppingListStore.productsCount,
}))(observer(Form))
