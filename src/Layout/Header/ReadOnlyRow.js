import React,{useReducer} from "react";

const ReadOnlyRow = ({ user, handleEditClick, handleDeleteClick }) => {
  console.log(user);
  return (
    <tr>
      <td>{user.userid}</td>
      <td>{user.userName}</td>
      <td>{user.email}</td>
      <td>
        <button
          type="button"
          onClick={(event) => handleEditClick(event, user)}
        >
          Edit
        </button>
        <button type="button" onClick={() => handleDeleteClick(user.userid)}>
          Delete
        </button>
      </td>
    </tr>
  );
};

export default ReadOnlyRow;
