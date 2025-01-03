import React, { useState } from "react";

function UserContainer({ user, onDelete, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editData, setEditData] = useState({ ...user });

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditData({ ...editData, [name]: value });
  };

  const handleSave = () => {
    onEdit(user.id, editData);
    setIsEditing(false);
  };

  return (
    <div className="user-box">
      {isEditing ? (
        <>
          <input
            type="text"
            name="name"
            value={editData.name}
            onChange={handleEditChange}
          />
          <input
            type="email"
            name="email"
            value={editData.email}
            onChange={handleEditChange}
          />
          <input
            type="number"
            name="age"
            value={editData.age}
            onChange={handleEditChange}
          />
          <textarea
            name="address"
            value={editData.address}
            onChange={handleEditChange}
          />
          <button onClick={handleSave}>Save</button>
          <button onClick={() => setIsEditing(false)}>Cancel</button>
        </>
      ) : (
        <>
          <p><strong>ID:</strong> {user.id}</p>
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Age:</strong> {user.age}</p>
          <p><strong>Gender:</strong> {user.gender}</p>
          <p><strong>Address:</strong> {user.address}</p>
          <button onClick={() => setIsEditing(true)}>Edit</button>
          <button onClick={() => onDelete(user.id)}>Delete</button>
        </>
      )}
    </div>
  );
}

export default UserContainer;
