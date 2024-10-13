export const productsQuery = `{
  productsCollection(order: id_DESC){
    items{
      name
      id
      headDescription{
        json
      }
      bottomDescription{
        json
      }
      imagesCollection{
        items{
          url
        }
      }
    }
    total
  }
}`;