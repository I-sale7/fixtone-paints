export const productsQuery = (locale = "en-US") => `{
  productsCollection(order: id_DESC, locale: "${locale}"){
    items{
      sys{
        id
      }
      name
      description{
        json
      }
      mainImage{
        url
      }
    }
    total
  }
}`;

export const homeProductsQuery = (locale = "en-US") => `{
  productsCollection(order: id_DESC, locale: "${locale}"){
    items{
      sys{
        id
      }
      name
      id
      mainImage{
        url
      }
    }
  }
}`

export const singleProductQuery = (id, locale = "en-US")=> `{
  products(id: "${id}", locale: "${locale}"){
    name
    description{
      json
      links {
        assets {
          block {
            sys {
              id
            }
            url
            title
          }
        }
      }
    }
    mainImage{
      url
    }
    banner{
      url
    }
  }
}`;