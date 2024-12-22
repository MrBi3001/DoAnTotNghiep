import React, { useState } from 'react';
import styles from './EditProfileModal.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faPhone, faLocationDot, faCamera, faTimes } from '@fortawesome/free-solid-svg-icons';
import clsx from 'clsx';
import { updateUser } from '../../Service/UserService';
import handleUpdateSuccess from '../Profile/Profile';

function EditProfileModal({ userData,onClose, onUpdateSuccess }) {
    const [formData, setFormData] = useState({
        userID: userData?.userID || '',
        name: userData?.name || '',
        email: userData?.email || '',
        phoneNumber: userData?.phoneNumber || '',
        address: userData?.address || ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const updateData = {
                ...formData,
                userID: parseInt(formData.userID)
            };
            const response = await updateUser(updateData.userID, updateData);
            if (response.data) {
                const currentUser = JSON.parse(localStorage.getItem('user'));
                const updatedUser = {
                    ...currentUser,
                    userName: formData.userName
                };
                localStorage.setItem('user', JSON.stringify(updatedUser));
                
                if (onUpdateSuccess) {
                    onUpdateSuccess(updatedUser);
                }
                onClose();
                handleUpdateSuccess();
            }
        } catch (error) {
            console.error('Update failed:', error);
        }
    };

    return (
        <div className={styles.modal_overlay}>
            <div className={styles.modal_content}>
                <div className={styles.modal_header}>
                    <h2>Edit Profile</h2>
                    <button onClick={onClose} className={styles.close_button}>
                        <FontAwesomeIcon icon={faTimes} />
                    </button>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className={styles.form_group}>
                        <label>Full Name</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                        />
                    </div>
                    <div className={styles.form_group}>
                        <label>Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </div>
                    <div className={styles.form_group}>
                        <label>Phone</label>
                        <input
                            type="tel"
                            name="phoneNumber"
                            value={formData.phoneNumber}
                            onChange={handleChange}
                        />
                    </div>
                    <div className={styles.form_group}>
                        <label>Address</label>
                        <input
                            type="text"
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                        />
                    </div>
                    <div className={styles.button_group}>
                        <button type="submit" className={styles.save_button}>
                            Save Changes
                        </button>
                        <button type="button" onClick={onClose} className={styles.cancel_button}>
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default EditProfileModal;
