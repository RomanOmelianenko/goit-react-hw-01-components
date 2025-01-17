import React from 'react';
import PropTypes from 'prop-types';
import styles from './Profile.module.css';

function Profile ({user}) {
  const {name, tag, location, avatar, stats} = user
    return (
      <div className={styles.profile}>
        <div className={styles.description}>
          <img
            src={avatar}
            alt="Аватар пользователя"
            className={styles.avatar}
          />
          <p className={styles.name}>{name}</p>
          <p className={styles.tag}>@{tag}</p>
          <p className={styles.location}>{location}</p>
        </div>

        <ul className={styles.stats}>
          <li>
            <span className={styles.label}>Followers</span>
            <span className={styles.quantity}>{stats.followers}</span>
          </li>
          <li>
            <span className={styles.label}>Views</span>
            <span className={styles.quantity}>{stats.views}</span>
          </li>
          <li>
            <span className={styles.label}>Likes</span>
            <span className={styles.quantity}>{stats.likes}</span>
          </li>
        </ul>
      </div>
    )
};

Profile.defaultProps = {
  alt: "Аватар пользователя",
  avatar: "https://dummyimage.com/640x480/2a2a2a/ffffff&text=Product+image+placeholder"
};

Profile.propTypes = {
  alt: PropTypes.string,
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.shape({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired
    })
  })
};

export default Profile;