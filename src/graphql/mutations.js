import { gql } from '@apollo/client';

export const AUTHENTICATE = gql`
    mutation authenticate($credentials: AuthenticateInput!) {
        authenticate(credentials: $credentials){
            accessToken
        }
    }
`;

export const CREATE_REVIEW = gql`
    mutation createreview($ownerName: String! $repositoryName: String!, $rating: Number!, $review: String!) {
        createreview(ownerName: $ownerName, repositoryName: $repositoryName, rating: $rating, review: $review){
            ownerName
            repositoryName
            rating
            review
        }
    }
`;

export const CREATE_USER = gql`
    mutation createuser($credentials: AuthenticateInput!) {
        createuser(credentials: $credentials){
            accessToken
        }
    }
`;