import React from 'react';
import PropTypes from 'prop-types'
import styles from './TransactionHistory.module.css';

function TransactionHistory({ items }) {
    return (
        <table className={styles.transactionHistory}>
            <thead className={styles.thead}>
                <tr className={styles.title}>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </tr>
            </thead>

            <tbody className={styles.tbody}>
                {items.map(item => (
                    <tr className={styles.item} id={item.id}>
                        <td>{item.type}</td>
                        <td>{item.amount}</td>
                        <td>{item.currency}</td>
                    </tr>
                ))}  
            </tbody>
        </table>
    )
}

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            amount: PropTypes.string,
            currency: PropTypes.string.isRequired
        })
    )
}

export default TransactionHistory;