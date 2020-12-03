import React from 'react';
import Profile from './Profile/Profile';
import user from '../json/user.json';
import Statistics from './Statistics/Statistics';
import stats from '../json/statistical-data.json';
import FriendList from './FriendsList/FriendList';
import friends from '../json/friends.json';
import TransactionHistory from './TransactionHistory/TransactionHistory';
import transactions from '../json/transactions.json';

function Composition () {
  return (
    <>
      <Profile user={user} />
      <Statistics stats={stats} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  )
}

export default Composition;