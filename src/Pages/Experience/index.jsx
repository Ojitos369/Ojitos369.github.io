import { useEffect, useMemo } from 'react';
import { useStates } from '../../Hooks/useStates';
import { ShowInfo } from './ShowInfo';

import styles from './styles/index.module.scss';

const Experience = props => {
    const { ls, s, f } = useStates();

    const data_exp = useMemo(() => s.exp?.data?.data_exp || [], [s.exp?.data?.data_exp]);

    useEffect(() => {
        if (ls.theme === 'black') {
            document.documentElement.style.setProperty('--my-major', '#0D0B07');
            document.documentElement.style.setProperty('--my-major-sec', '#472F1B');
            document.documentElement.style.setProperty('--my-middle', '#593D29');
            document.documentElement.style.setProperty('--my-minor-sec', '#C49B71');
            document.documentElement.style.setProperty('--my-minor', '#8B6220');
        } else {
            document.documentElement.style.setProperty('--my-major', '#8B6220');
            document.documentElement.style.setProperty('--my-major-sec', '#C49B71');
            document.documentElement.style.setProperty('--my-middle', '#593D29');
            document.documentElement.style.setProperty('--my-minor-sec', '#472F1B');
            document.documentElement.style.setProperty('--my-minor', '#0D0B07');
        }
    }, [ls.theme]);

    useEffect(() => {
        f.exp.getData();
    }, []);

    return (
        <>
            <h1 className='w-full text-center text-4xl font-bold mt-5'>
                Experience
            </h1>
            <section className={`${styles.dataExpContainer} flex flex-col w-full items-center mt-3`}>
                {data_exp.map((item, index) => (
                    <ShowInfo 
                        key={index} 
                        data={item} 
                        index={index}
                        grupo1="exp"
                        grupo2="data"
                        />
                ))}
            </section>
        </>
    )
}

export { Experience };
