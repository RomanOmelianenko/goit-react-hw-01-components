import React from 'react';
import PropTypes from 'prop-types';
import getRandomColor from '../../helpers/random-color';
import styles from './Statistics.module.css';

function Statistics({ title, stats }) {
    return (
        <section className={styles.statistics}>
            {title && <h2 className={styles.title}>{title}</h2>}
            <ul className={styles.statList}>
                {stats.map(list => (
                    <li className={styles.item} id={list.id} style={{ background: getRandomColor() }}>
                        <span className="label">{list.label}</span>
                        <span className="percentage">{list.percentage}%</span>
                    </li>
                ))}   
            </ul>
        </section>
    )
}

Statistics.defaultProps = {
    title: 'Upload stats',
};

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired
        })
    )
}

export default Statistics;
