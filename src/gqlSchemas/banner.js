export const heroBannerCollection = (locale = "en-US")=> `{
  heroBannerCollection(locale: "${locale}") {
    items {
      id
      title
      description {
        json
      }
      image {
        title
        url
        description
      }
    }
  }
}`;