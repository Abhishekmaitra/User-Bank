import React, { useState } from "react";
function User({ user, deleteBtnHandler }) {
  const [userStyle, setUserStyle] = useState({});
  const [editUser, setEditUser] = useState(false);

  const onUserClick = () => {
    setUserStyle({
      backgroundColor: "grey",
      color: "white",
    });
    setEditUser(!editUser);
  };

  return (
    <div className="User">
      <h6 style={userStyle} onClick={onUserClick}>
        {user.name}
      </h6>

      {editUser && (
        <div>
          <button>View</button>
          <button onClick={deleteBtnHandler}>Delete</button>
        </div>
      )}
    </div>
  );
}
export default User;
