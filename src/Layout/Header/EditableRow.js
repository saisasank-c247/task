import React from "react";

const EditableRow = ({
  editFormData,
  handleEditFormChange,
  handleCancelClick,
}) => {
  return (
    <tr>
      <td>editable

        <input
          type="text"
          required="required"
          placeholder="Enter a userid..."
          name="userid"
          value={editFormData.userid}
          onChange={handleEditFormChange}
        ></input>
        <input
          type="text"
          required="required"
          placeholder="Enter a name..."
          name="userName"
          value={editFormData.userName}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="email"
          required="required"
          placeholder="Enter an email..."
          name="email"
          value={editFormData.email}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <button type="submit">Save</button>
        <button type="button" onClick={handleCancelClick}>
          Cancel
        </button>
      </td>
    </tr>
  );
};

export default EditableRow;