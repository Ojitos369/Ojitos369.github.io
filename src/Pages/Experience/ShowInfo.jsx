import { useEffect, useMemo } from 'react';
import { useStates } from '../../Hooks/useStates';
import { Python as PythonIcon, JavaScript as JavaScriptIcon, Angular, Bash, Django, Docker, GCP, Github, MariaDB, ReactIcon, Php, Postgres } from '../../Components/Icons';
import { ReptileEye } from '../../Components/Buttons/ReptileEye';

const icons = {
    Python: PythonIcon,
    JavaScript: JavaScriptIcon,
    Sql: MariaDB,
    Docker: Docker,
    GCP: GCP,
    Angular: Angular,
    Bash: Bash,
    Git: Github,
    Django: Django,
    React: ReactIcon,
    Php: Php,
    Postgres: Postgres,
}

import styles from './styles/index.module.scss';

const ShowInfo = props => {
    const { s, f } = useStates();
    const { data, index, grupo1, grupo2 } = props;

    const show = useMemo(() => !!s.accordion?.[grupo1]?.[grupo2]?.[index], [s.accordion, grupo1, grupo2, index]);
    // console.log('show:', show, index);

    const { name, f_inicio, f_fin, actividades, techs } = data;

    const toggleShow = () => {
        f.u2('accordion', grupo1, grupo2, null);
        f.u3('accordion', grupo1, grupo2, index, !show);
    }

    return (
        <div className={`${styles.dataContainer} w-10/12 flex flex-col items-center manita`}>
            <div 
                className={`${styles.dataItem} w-full`}
                onClick={toggleShow}
                >
                <p>
                    {name}
                </p>
                <div className={`${styles.icon}`}>
                    <ReptileEye show={show} toggleShow={toggleShow} />
                </div>
            </div>
            <div className={`${styles.dataInfo} w-full ${show ? 'entradaHeight' : 'salidaHeight'}`}>
                <p className={`${styles.date} w-full text-end px-5`}>
                    {f_inicio} - {f_fin || 'Present'}
                </p>

                <ul>
                {actividades.map((description, index) => {
                    return (
                        <li key={`desc-act-${index}`} className="list-disc">
                            <div className={`${styles.description} w-full px-5`} dangerouslySetInnerHTML={{ __html: description }}></div>
                        </li>
                    )
                })}
                </ul>

                <div className={`${styles.techs}`}>
                    {techs.map((tech, tIndex) => {
                        const { name } = tech;
                        const IconText = icons[name];

                        return (
                            <div key={tIndex} className={`${styles.tech}`}>
                                <p>
                                    {name}
                                </p>
                                <span className={`${styles.iconTech}`}>
                                    <IconText index={index} />
                                </span>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export { ShowInfo };
