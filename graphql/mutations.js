import { gql } from '@apollo/client';

export const CREATE_TODO = gql`
  mutation CreateTodoMutation($todo: CreateTodoInput!) {
    createTodo(todo: $todo) {
      todo_id
      title
      detail
      status
      deadline
    }
  }
`;
