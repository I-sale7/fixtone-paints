export const MISSION_AND_VISION_QUERY = (locale = "en-US")=> `{
  ourVisionMission (id: "6cAnfwhLpWTanZdN6My1QY", locale: "${locale}"){
    title
    subTitle
    media{
      url
    }
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
  }
}`