import { gql } from '@apollo/client';
import { CORE_REPOSITORY_FIELDS, CORE_REVIEW_FIELDS } from './fragments';

export const GET_REPOSITORIES = gql`
  ${CORE_REPOSITORY_FIELDS}
  query Repositories($orderBy: AllRepositoriesOrderBy, $orderDirection: OrderDirection, $searchKeyword: String) {
    repositories(orderBy: $orderBy, orderDirection: $orderDirection, searchKeyword: $searchKeyword) {
      edges {
        node {
            ...CoreRepositoryFields
        }
      }
    }
  }
`;

export const GET_REPOSITORY = gql`
  ${CORE_REPOSITORY_FIELDS}
  ${CORE_REVIEW_FIELDS}
  query repository($repositoryId: ID!) {
    repository(id: $repositoryId) {
      ...CoreRepositoryFields
      reviews {
        edges {
          node {
            ...CoreReviewFields
          }
        }
      }
    }
  }
`;

export const ME = gql`
  ${CORE_REVIEW_FIELDS}
  query getCurrentUser($includeReviews: Boolean = false) {
    me {
      id
      username
      reviews @include(if: $includeReviews) {
        edges {
          node {
            ...CoreReviewFields
          }
        }
      }
    }
  }
`;