import React, { useEffect, useState } from "react";
import { fetchUser } from "../Api";
import UserList from "./UserList";
function UserForm() {
  const [id, setId] = useState();
  const [btnText, setBtnText] = useState("Submit");
  const [userList, setUserList] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("userList")) || [];
    } catch (e) {
      return [];
    }
  });

  useEffect(() => {
    if (userList) localStorage.setItem("userList", JSON.stringify(userList));
  }, [userList]);

  const onClickBtnHandler = async () => {
    const user = await fetchUser(id);
    setUserList([...userList, user]);
    if (isNaN(+id)) {
      alert("Enter A Valid ID");
    }
  };

  return (
    <div className="User-Main">
      <div className="User-Form">
        <input
          placeholder="Enter User ID"
          onChange={(e) => {
            setId(e.target.value);
            setBtnText("Submit");
          }}
        />
        <button
          className="Submit-Btn"
          onClick={() => {
            onClickBtnHandler();
            setBtnText('Loading... from "Search"');
          }}
        >
          {btnText}
        </button>
      </div>
      <div className="User-List">
        <UserList userList={userList} />
      </div>
    </div>
  );
}

export default UserForm;
