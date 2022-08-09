import React, { useEffect, useState } from "react";
import User from "./User";
function UserList({ userList }) {
  //   const [list, setList] = useState(userList);
  //   useEffect(() => setList(userList), [userList]);

  //   const deleteBtnHandler = (index) =>
  //     setList(userList.filter((item) => item.id !== index));

  return userList.map((user, id) => <User user={user} />);
}
export default UserList;
