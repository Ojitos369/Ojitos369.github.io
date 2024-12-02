import styles from '../styles/reptileEye.module.scss';

const ReptileEye = props => {
    const { show, toggleShow } = props;
    return (
        <label className={styles.reptileEyeContainer}>
            <input 
                value="on"
                name="dummy"
                type="checkbox"
                checked={show}
                onChange={toggleShow}
                className={`${styles.bubble}`} />
        </label>
    )
}

export { ReptileEye }