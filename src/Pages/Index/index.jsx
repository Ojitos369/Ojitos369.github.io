import { useEffect, useMemo } from 'react';
import { useStates } from '../../Hooks/useStates';

import styles from './styles/index.module.scss';

const Index = props => {
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
        <div 
            className={`${styles.header_container}`}
            >
            <div 
                className={`${styles.header_image}`}
                >
                <div 
                    className={`${styles.header_image_defoque}`}
                    >
                </div>
            </div>
            <div 
                className={`${styles.header_extra_container}`}
                >
                <a 
                    className={`${styles.h1_text}`}
                    href='https://blog.ojitos369.com'
                    target='_blank'
                    rel='noreferrer'
                    >
                    Erick Garcia
                </a>
                <h4 
                    className={`${styles.h4_text}`}>
                    Software Developer
                </h4>
                <p 
                    className={`${styles.me_text}`}>
                    if get_something() == 404: make_it()
                </p>
            </div>
        </div>
    )
}

export { Index };
