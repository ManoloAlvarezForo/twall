import gql from 'graphql-tag';

/**
 * GraphQL Query to gets the Calendar Events by a month and locale params from the Server.
 */
export const GET_EVENTS_BY_MONTH = gql`
  query getEventsByMonth($month: String, $year: String, $locale: String) {
    getEventsByMonth(month: $month, year: $year, locale: $locale) {
      date
      events {
        ... on Preaching {
          __typename
          id
          lead
          territories
          title
          date
          time
          location
          description
          moment
          type
        }
        ... on PublicMeeting {
          __typename
          id
          title
          date
          time
          location
          meetingType
          president
          speaker
          watchtowerGuider
          watchtowerReader
          type
        }
      }
    }
  }
`;
/**
 * GraphQL Query to gets Calendar Events by a date from and a date to with format "YYYY-MM-DD" from the Server.
 */
export const GET_EVENTS_BY_DATE = gql`
  query getEventsByDate($fromDate: String, $toDate: String) {
    getEventsByDate(fromDate: $fromDate, toDate: $toDate) {
      date
      events {
        ... on Preaching {
          __typename
          id
          lead
          territories
          title
          date
          time
          location
          description
        }
        ... on PublicMeeting {
          __typename
          id
          title
          date
          time
          location
          meetingType
          president
          speaker
          watchtowerGuider
          watchtowerReader
        }
      }
    }
  }
`;
/**
 * GraphQL Query to gets an Calendar Event by a Event Id from the Server
 */
export const GET_EVENT_BY_ID = gql`
  query getEventById($id: String) {
    eventById(id: $id) {
      title
      date
      timeFrom
      timeTo
      participants
      description
    }
  }
`;
