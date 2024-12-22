import React, { useState } from 'react';
import './Users.css';
import { useEffect } from "react";

import { getAllUsers, updateUser } from '../../../../Service/UserService';

function Users() {

  const [users, setUsers] = useState([]);
  const [showEditModal, setShowEditModal] = useState(false);
  const [editingUser, setEditingUser] = useState(null);
  

  useEffect(() => { 
    const fetchUsers = async () => { 
      let response = await getUsersFromApi(); 
      if (response && response.data) { 
          setUsers(response.data); 
        } }; 
    fetchUsers()
  }, []);

  const getUsersFromApi = async () => {
    let response = await getAllUsers();
    if (response && response.data) {
      setUsers(response.data);
    }
  };

  const handleEditClick = (user) => {
    setEditingUser(user);
    setShowEditModal(true);
  };

  const handleEditSave = async () => {
    let response = await updateUser(editingUser.userID, editingUser);

    if (response.status === 200)
    {
      setUsers(users.map(user => user.userID === editingUser.userID ? editingUser : user ));
    }
    setShowEditModal(false);
    setEditingUser(null);
  };

  return (
    <div className="users-container">
      <div className="users-header">
        <h2>User Management</h2>
      </div>

      <div className="users-table-container">
        <table className="users-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user.userID}>
                <td>{user.userID}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.role}</td>
                <td>
                  <span className={`status-badge ${user.status}`}>
                    {user.status}
                  </span>
                </td>
                <td>
                  <button 
                    className="edit-btn"
                    onClick={() => handleEditClick(user)}
                  >
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Edit Modal */}
      {showEditModal && (
        <div className="modal">
          <div className="modal-content">
            <h3>Edit User</h3>
            <select
              value={editingUser.role}
              onChange={(e) => setEditingUser({...editingUser, role: e.target.value})}
            >
              <option value="Customer">Customer</option>
              <option value="Admin">Admin</option>
            </select>
            <select
              value={editingUser.status}
              onChange={(e) => setEditingUser({...editingUser, status: e.target.value})}
            >
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>
            <div className="modal-buttons">
              <button onClick={handleEditSave}>Save Changes</button>
              <button onClick={() => setShowEditModal(false)}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Users;
