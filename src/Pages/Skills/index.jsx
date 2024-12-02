import { useEffect, useMemo } from 'react';
import { useStates } from '../../Hooks/useStates';

import styles from './styles/index.module.scss';

const Skills = props => {
    const { ls, lf, s, f } = useStates();

    useEffect(() => {
        if (ls.theme === 'black') {
            document.documentElement.style.setProperty('--my-major', '#102D36');
            document.documentElement.style.setProperty('--my-major-sec', '#184754');
            document.documentElement.style.setProperty('--my-middle', '#227B8E');
            document.documentElement.style.setProperty('--my-minor-sec', '#3FC1D5');
            document.documentElement.style.setProperty('--my-minor', '#55D6E6');
        } else {
            document.documentElement.style.setProperty('--my-major', '#55D6E6');
            document.documentElement.style.setProperty('--my-major-sec', '#3FC1D5');
            document.documentElement.style.setProperty('--my-middle', '#227B8E');
            document.documentElement.style.setProperty('--my-minor-sec', '#184754');
            document.documentElement.style.setProperty('--my-minor', '#102D36');
        }
    }, [ls.theme]);

    return (
        <p>
            Skills
        </p>
    )
}

export { Skills };
