import React from 'react';
import PropTypes from 'prop-types';
import styles from './FriendList.module.css'

function FriendList({friends}) {
    return (
        <ul className={styles.friendList}>
            {friends.map(friend => (
                <li className={styles.item} id={friend.id}>
                    <span className={styles.status}>
                        {friend.isOnline ?
                        (<div className={styles.online} />) :
                        (<div className={styles.offline} />)}
                    </span>
                    <img className={styles.avatar} src={friend.avatar} alt="" width="48" />
                    <p className={styles.name}>{friend.name}</p>
                </li>
            ))}
        </ul>
    );
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            avatar: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            isOnline: PropTypes.bool.isRequired,
            id: PropTypes.number.isRequired
        })
    )
}

export default FriendList;