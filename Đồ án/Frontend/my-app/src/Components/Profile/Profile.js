import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faPhone, faLocationDot, faEdit } from '@fortawesome/free-solid-svg-icons';
import { getUserById } from '../../Service/UserService';
import styles from './Profile.module.scss';
import EditProfileModal from '../EditProfile/EditProfileModal';

function Profile() {
    const [userData, setUserData] = useState(null);
    const [showEditModal, setShowEditModal] = useState(false);
    const [refreshTrigger, setRefreshTrigger] = useState(0);

    useEffect(() => {
        const fetchUserData = async () => {
            const user = JSON.parse(localStorage.getItem('user'));
            if (user?.userID) {
                const userId = parseInt(user.userID);
                const response = await getUserById(userId);
                setUserData(response.data);
                // console.log(response);
            }
        };
        fetchUserData();
    }, [[refreshTrigger]]);

    const handleEditClick = () => {
        setShowEditModal(true);
    };

    const handleCloseModal = () => {
        setShowEditModal(false);
    };
    const handleUpdateSuccess = (updatedUser) => {
        setRefreshTrigger(prev => prev + 1);
        const headerUserName = document.querySelector('[data-testid="header-username"]');
        if (headerUserName) {
            headerUserName.textContent = updatedUser.userName;
        }
    };
    return (
        <div className={styles.profile_container}>
            <div className={styles.profile_header}>
                <h1>My Profile</h1>
            </div>

            <div className={styles.profile_content}>
                <div className={styles.profile_avatar}>
                    <img src="https://via.placeholder.com/150" alt="Profile" />
                    <button className={styles.edit_avatar}>
                        <FontAwesomeIcon icon={faEdit} />
                    </button>
                </div>

                <div className={styles.profile_info}>
                    <div className={styles.info_group}>
                        <FontAwesomeIcon icon={faUser} />
                        <div className={styles.info_content}>
                            <label>Full Name</label>
                            <p>{userData?.name || 'Not available'}</p>
                        </div>
                    </div>

                    <div className={styles.info_group}>
                        <FontAwesomeIcon icon={faEnvelope} />
                        <div className={styles.info_content}>
                            <label>Email</label>
                            <p>{userData?.email || 'Not available'}</p>
                        </div>
                    </div>

                    <div className={styles.info_group}>
                        <FontAwesomeIcon icon={faPhone} />
                        <div className={styles.info_content}>
                            <label>Phone</label>
                            <p>{userData?.phoneNumber || 'Not available'}</p>
                        </div>
                    </div>

                    <div className={styles.info_group}>
                        <FontAwesomeIcon icon={faLocationDot} />
                        <div className={styles.info_content}>
                            <label>Address</label>
                            <p>{userData?.address || 'Not available'}</p>
                        </div>
                    </div>

                    <button
                        className={styles.edit_profile}
                        onClick={handleEditClick}
                    >
                        Edit Profile
                    </button>

                    {showEditModal && (
                        <EditProfileModal
                            userData={userData}
                            onClose={handleCloseModal}
                            onUpdateSuccess={handleUpdateSuccess}
                        />
                    )}
                </div>
            </div>
        </div>
    );
}

export default Profile;
