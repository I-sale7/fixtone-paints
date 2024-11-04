export const contactQuery = (locale = "en-US")=> `{
  contactCollection(order: id_ASC, locale: "${locale}"){
    items{
      id
      title
      description
    }
  }
}`