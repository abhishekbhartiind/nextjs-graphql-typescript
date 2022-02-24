import { gql } from "@apollo/client";
import { TodoMvc } from "../src/graphql/types";

interface Props {
  todoId: String;
}

gql`
  query Todo($todoId: ID!) {
    Todo(todoId: $todoId) {
      description
      completed
    }
  }
`;

const Todo = (props: Props) => {
  const { todoId } = props;
  const todo: TodoMvc = undefined; // This line will be replaced by query to server
  const { completed, description } = todo;
  return (
    <tr>
      <td>
        <input type="checkbox" checked={completed}></input>
      </td>
      <td>{description}</td>
    </tr>
  );
};

export default Todo;
