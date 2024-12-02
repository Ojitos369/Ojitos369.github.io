import styles from '../styles/firstLoad.module.scss';
const FirstLoad = () => {
    return (
        <div className={`${styles.loader_container}`}>
            <div className={`${styles.loader}`}>
                <span>Ojitos369</span>
                <span>Ojitos369</span>
            </div>
        </div>
    );
};

export { FirstLoad };