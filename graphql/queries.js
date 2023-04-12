import { gql } from '@apollo/client';

export const GET_ALL_TODOS = gql`
  query {
    todoFindAll {
      todo_id
      title
      detail
      status
      deadline
    }
  }
`;
