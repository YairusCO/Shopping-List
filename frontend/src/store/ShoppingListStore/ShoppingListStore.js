import { observable, makeObservable, action } from 'mobx'

import { getCategories, getProducts, addProduct } from '../../services/apis'

class ShoppingListStore {
  category = ''
  products = []
  categories = []
  productsCount = 0

  constructor() {
    makeObservable(this, {
      category: observable,
      categories: observable,
      products: observable,
      productsCount: observable,
      /* Actions */
      addToShoppingList: action,
      setCategory: action,
      getCategories: action,
      getAllProducts: action,
    })
  }
  getCategories = async () => {
    this.categories = await getCategories()
  }
  setCategory = (value) => {
    this.category = value
  }

  addToShoppingList = async (value) => {
    await addProduct(value, this.category)
    await this.getAllProducts()
  }
  getAllProducts = async () => {
    const products = await getProducts()
    this.products = [...products]
  }
}

export default ShoppingListStore
