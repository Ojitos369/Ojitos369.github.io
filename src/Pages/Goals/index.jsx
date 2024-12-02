import { useEffect, useMemo } from 'react';
import { useStates } from '../../Hooks/useStates';

import styles from './styles/index.module.scss';

const Goals = props => {
    const { ls, lf, s, f } = useStates();

    useEffect(() => {
        if (ls.theme === 'black') {
            document.documentElement.style.setProperty('--my-major', '#000B3A');
            document.documentElement.style.setProperty('--my-major-sec', '#002B72');
            document.documentElement.style.setProperty('--my-middle', '#004AA5');
            document.documentElement.style.setProperty('--my-minor-sec', '#006ADB');
            document.documentElement.style.setProperty('--my-minor', '#1387F5');
        } else {
            document.documentElement.style.setProperty('--my-major', '#1387F5');
            document.documentElement.style.setProperty('--my-major-sec', '#006ADB');
            document.documentElement.style.setProperty('--my-middle', '#004AA5');
            document.documentElement.style.setProperty('--my-minor-sec', '#002B72');
            document.documentElement.style.setProperty('--my-minor', '#000B3A');
        }
    }, [ls.theme]);

    return (
        <p>
            Goals
        </p>
    )
}

export { Goals };
