import { post, get } from '../services/http/http'

export const getCategories = async () => {
  try {
    const categories = await get({ url: '/api/categories' })

    return categories
  } catch (error) {
    console.error(error)
    throw error
  }
}
export const getProducts = async () => {
  try {
    const products = await get({ url: '/api/products' })

    return products
  } catch (error) {
    console.error(error)
    throw error
  }
}
export const addProduct = async (name, categoryId) => {
  try {
    return post({ url: '/api/products', body: { name, categoryId } })
  } catch (error) {
    console.error(error)
    throw error
  }
}
