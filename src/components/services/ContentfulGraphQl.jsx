import React, { useState, useEffect} from 'react'

const ContentfulGraphQl = (query) => {
  const [page, setPage] = useState(null);

  useEffect(() => {
    window
      .fetch(`https://graphql.contentful.com/content/v1/spaces/z4wyy82hq1jx/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // Authenticate the request
          Authorization: "Bearer 8E76tWHOSQqT4zahvaOVyD9dhjOjHceXm4XOj8ybWOs",
        },
        // send the GraphQL query
        body: JSON.stringify({ query }),
      })
      .then((response) => {
        return response.json();
      })
      .then(({ data, errors }) => {
        if (errors) {
          console.error(errors);
        }

        // rerender the entire component with new data
        setPage(data);
      });
  }, []);

  return page;
}

export default ContentfulGraphQl