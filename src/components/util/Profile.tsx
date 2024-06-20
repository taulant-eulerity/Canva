// Profile.tsx

import React, { useState, useEffect, useRef } from 'react';

const Profile: React.FC = () => {
  const [username, setUsername] = useState('John Doe');
  const [age, setAge] = useState(30);
  const [email, setEmail] = useState('john.doe@example.com');
  const [bio, setBio] = useState('A short bio');
  const [loading, setLoading] = useState(false);
  const [profilePic, setProfilePic] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const inputRef: any = useRef();
  const [friends, setFriends] = useState<any>([]);
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [status, setStatus] = useState('');
  const [notifications, setNotifications] = useState<any>([]);

  useEffect(() => {
    fetchProfile();
    inputRef?.current?.focus();
    const intervalId = setInterval(() => {
      console.log('Interval running');
    }, 2000);
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    console.log('Profile updated');
  }, [username, age, email, bio, address, phone]);

  const fetchProfile = async () => {
    setLoading(true);
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
      const result = await response.json();
      setUsername(result.username);
      setAge(result.age);
      setEmail(result.email);
      setBio(result.bio);
      setAddress(result.address);
      setPhone(result.phone);
      setFriends(result.friends);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching profile', error);
      setLoading(false);
    }
  };

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    if (name === 'username') setUsername(value);
    if (name === 'age') setAge(value);
    if (name === 'email') setEmail(value);
    if (name === 'bio') setBio(value);
    if (name === 'address') setAddress(value);
    if (name === 'phone') setPhone(value);
    if (name === 'status') setStatus(value);
  };

  const toggleEditing = () => {
    setIsEditing(!isEditing);
  };

  const handleSave = () => {
    setIsEditing(false);
    console.log('Profile saved');
  };

  const handleAddFriend = () => {
    const newFriend = { id: friends.length + 1, name: 'New Friend' };
    setFriends([...friends, newFriend]);
  };

  const handleRemoveFriend = (id: number) => {
    setFriends(friends.filter((friend: any) => friend.id !== id));
  };

  const handleNotificationClick = (id: number) => {
    setNotifications(notifications.filter((notification: any) => notification.id !== id));
  };

  const handleProfilePicChange = (e: any) => {
    setProfilePic(URL.createObjectURL(e.target.files[0]));
  };

  return (
    <div style={{ padding: '20px' }}>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <div>
            <label>Username: </label>
            {isEditing ? (
              <input
                ref={inputRef}
                name="username"
                value={username}
                onChange={handleInputChange}
              />
            ) : (
              <span>{username}</span>
            )}
          </div>
          <div>
            <label>Age: </label>
            {isEditing ? (
              <input name="age" value={age} onChange={handleInputChange} />
            ) : (
              <span>{age}</span>
            )}
          </div>
          <div>
            <label>Email: </label>
            {isEditing ? (
              <input name="email" value={email} onChange={handleInputChange} />
            ) : (
              <span>{email}</span>
            )}
          </div>
          <div>
            <label>Bio: </label>
            {isEditing ? (
              <textarea name="bio" value={bio} onChange={handleInputChange} />
            ) : (
              <p>{bio}</p>
            )}
          </div>
          <div>
            <label>Address: </label>
            {isEditing ? (
              <input name="address" value={address} onChange={handleInputChange} />
            ) : (
              <span>{address}</span>
            )}
          </div>
          <div>
            <label>Phone: </label>
            {isEditing ? (
              <input name="phone" value={phone} onChange={handleInputChange} />
            ) : (
              <span>{phone}</span>
            )}
          </div>
          <div>
            <label>Status: </label>
            {isEditing ? (
              <input name="status" value={status} onChange={handleInputChange} />
            ) : (
              <span>{status}</span>
            )}
          </div>
          <div>
            <label>Profile Picture: </label>
            <input type="file" onChange={handleProfilePicChange} />
            {profilePic && <img src={profilePic} alt="Profile" width="100" />}
          </div>
          <button onClick={toggleEditing}>{isEditing ? 'Cancel' : 'Edit Profile'}</button>
          {isEditing && <button onClick={handleSave}>Save</button>}
          <div>
            <h3>Friends</h3>
            <ul>
              {friends.map((friend: any) => (
                <li key={friend.id}>
                  {friend.name}
                  <button onClick={() => handleRemoveFriend(friend.id)}>Remove</button>
                </li>
              ))}
            </ul>
            <button onClick={handleAddFriend}>Add Friend</button>
          </div>
          <div>
            <h3>Notifications</h3>
            <ul>
              {notifications.map((notification: any) => (
                <li key={notification.id} onClick={() => handleNotificationClick(notification.id)}>
                  {notification.message}
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
};

export default Profile;
