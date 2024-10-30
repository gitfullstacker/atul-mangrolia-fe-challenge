import axios from 'axios'

export interface SearchData {
  products: ProductData[]
  brands: BrandData[]
  sellers: SellerData[]
}

export interface ProductData {
  id: string
  productId: string
  title: string
  description: string
  price: number
  oldPrice?: number
  imageUrl: string
  options: any[]
  badges: string[]
  brand: string
  categories: string[]
  commissionRate: number
  available: boolean
}

export interface BrandData {
  id: string
  name: string
  imageUrl: string
}

export interface SellerData {
  id: string
  url: string
  name: string
  imageUrl: string
}

export const fetchSearchResults = async (
  query?: string
): Promise<SearchData> => {
  try {
    const response = await axios.post('/api/search', { query })
    const { products, merchants, facets } = response.data

    const productData: ProductData[] = products.map((product: any) => {
      const variant = product.locales[0].variants[0]
      return {
        id: product.id,
        productId: product.productId,
        title: variant.title,
        description: variant.description,
        price: variant.price,
        oldPrice: variant.oldPrice,
        options: variant.options,
        imageUrl: variant.images[0].url,
        badges: product.badges,
        brand: product.brand.name,
        categories: product.categories.map((cat: any) => cat.name),
        commissionRate: product.commissionRate,
        available: variant.available,
      }
    })

    const brandData: BrandData[] = facets.brands.map((brand: any) => ({
      id: brand.name,
      name: brand.name,
    }))

    const sellerData: SellerData[] = merchants.map((merchant: any) => ({
      id: merchant.id,
      url: merchant.url,
      name: merchant.name,
      imageUrl: merchant.profileImage,
    }))

    return {
      products: productData,
      brands: brandData,
      sellers: sellerData,
    }
  } catch (error: any) {
    console.error('Error fetching results:', error.message)
    throw new Error('Failed to fetch results')
  }
}
