import styles from '../styles/moreless.module.scss';

const MoreLess = props => {
    const { show, toggleShow } = props;
    return (
        <input 
            type="checkbox" 
            value={show}
            checked={show}
            onChange={toggleShow}
            className={`${styles.plusMinus}`}
        />
    )
}

export { MoreLess }