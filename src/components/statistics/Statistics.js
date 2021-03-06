import PropTypes from 'prop-types';
import styles from './Statistics.module.css';
import randomColor from './randomColor';


export default function Statistics({ title, stats }) {
    return (
        <section className={styles.statistics} >
            {title && <h2 className={styles.title}>{title}</h2>}
            <ul className={styles.statList}>
                {stats.map(stat => (
                    <li className={styles.item}
                        key={stat.id} style={{backgroundColor: randomColor()}}>
                        <span className="label">{stat.label}</span>
                        <span className="percentage">{stat.percentage}%</span>
                    </li>
                ))}
            </ul>
        </section>
    );
}

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired,
        }),
    ),
};