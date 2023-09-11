import { gql } from '@apollo/client';

export const QUERY_CAR_COLLECTION = gql`
query carCollection {
  carCollection {
    total
    skip
    limit
    items {
      sys {
        id
        spaceId
        environmentId
        publishedAt
        firstPublishedAt
        publishedVersion
      }
      contentfulMetadata {
        tags {
          id
          name
        }
      }
      title
      price
      photo
    }
  }
}
`