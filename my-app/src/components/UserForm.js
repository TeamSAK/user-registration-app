import React, { useState } from "react";

function UserForm({ onAddUser }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: "",
    gender: "",
    address: "",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (formData.name.length < 3) newErrors.name = "Name must be at least 3 characters.";
    if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Invalid email format.";
    if (isNaN(formData.age) || formData.age < 18) newErrors.age = "Age must be 18 or older.";
    if (!formData.gender) newErrors.gender = "Please select a gender.";
    if (formData.address.length < 10) newErrors.address = "Address must be at least 10 characters.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      onAddUser(formData);
      setFormData({
        name: "",
        email: "",
        age: "",
        gender: "",
        address: "",
      });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <form className="user-form" onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Full Name"
        value={formData.name}
        onChange={handleChange}
      />
      {errors.name && <span className="error">{errors.name}</span>}

      <input
        type="email"
        name="email"
        placeholder="Email Address"
        value={formData.email}
        onChange={handleChange}
      />
      {errors.email && <span className="error">{errors.email}</span>}

      <input
        type="number"
        name="age"
        placeholder="Age"
        value={formData.age}
        onChange={handleChange}
      />
      {errors.age && <span className="error">{errors.age}</span>}

      <select name="gender" value={formData.gender} onChange={handleChange}>
        <option value="">Select Gender</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Other">Other</option>
      </select>
      {errors.gender && <span className="error">{errors.gender}</span>}

      <textarea
        name="address"
        placeholder="Address"
        value={formData.address}
        onChange={handleChange}
      />
      {errors.address && <span className="error">{errors.address}</span>}

      <button type="submit">Submit</button>
    </form>
  );
}

export default UserForm;
