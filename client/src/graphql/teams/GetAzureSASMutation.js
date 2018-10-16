/* eslint-disable no-unused-vars */
import gql from 'graphql-tag'

export const GET_AZURE_SAS = gql`
  mutation getAzureSAS($teamSlug: String!) {
    teams_GetAzureSAS(teamSlug: $teamSlug)
  }
`

export default GET_AZURE_SAS
