import { gql } from '@apollo/client';

export const QUERY_DISCOUNT_LIST = gql`
  query discountCollection {
    discountCollection {
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
        amount
        code
      }
    }
  }
`