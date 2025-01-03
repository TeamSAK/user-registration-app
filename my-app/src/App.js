import React, { useState } from "react";
import UserForm from "./components/UserForm";
import UserContainer from "./components/UserContainer";
import "./index.css";

function App() {
  const [users, setUsers] = useState([]);

  const addUser = (userData) => {
    const newUser = { ...userData, id: `user-${Date.now()}` }; // Unique ID
    setUsers([...users, newUser]);
  };

  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  const editUser = (id, updatedData) => {
    setUsers(users.map((user) => (user.id === id ? { ...user, ...updatedData } : user)));
  };

  return (
    <div className="app">
      <header>
        <h1>User Registration</h1>
      </header>
      <main>
        <UserForm onAddUser={addUser} />
        <div className="user-container">
          {users.map((user) => (
            <UserContainer
              key={user.id}
              user={user}
              onDelete={deleteUser}
              onEdit={editUser}
            />
          ))}
        </div>
      </main>
      <footer>
        <p>&copy; 2025 User Registration System</p>
      </footer>
    </div>
  );
}

export default App;
