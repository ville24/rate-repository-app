import { gql } from '@apollo/client';

export const CORE_REPOSITORY_FIELDS = gql`
fragment CoreRepositoryFields on Repository {
    id
    description
    forksCount
    fullName
    language
    ownerAvatarUrl
    ratingAverage
    reviewCount
    stargazersCount
    url
}
`;

export const CORE_REVIEW_FIELDS = gql`
fragment CoreReviewFields on Review {
    id
    rating
    text
    createdAt
    user {
        id
        username
    }
}
`;