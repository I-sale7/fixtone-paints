const partnersQuery = (locale = "en-US")=> `{
  partnersCollection(locale: "${locale}") {
    items {
      name
      image{
        url
      }
      link
    }
  }
}`

export default partnersQuery;