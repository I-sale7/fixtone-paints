export const homeAboutComponentCollection = (locale= "en-US")=> `{
  homeAboutComponentCollection(locale: "${locale}"){
      items{
          title
          bigTitle
          yearsOfExperience
          description{
              json
          }
          aboutImagesCollection{
              items{
                  url
                  title
                  description
              }
          }
      }
  }
}`

export const aboutUsQuery = (locale= "en-US")=> `{
  aboutPage(id: "3TVqbZtztccoZdcJl8C7TI", locale: "${locale}") {
    title
    subtitle
    topMedia{
      url
    }
    description {
      json
      links {
        entries {
          inline {
            sys {
              id
            }
          }
        }
      }
    }
  }
}`

export const ourTeamsQuery = (locale= "en-US")=> `{
  ourTeamsCollection (order: sys_firstPublishedAt_ASC, locale: "${locale}") {
    items{
      title
      position
      image{
        url
      }
    }
  }
}`