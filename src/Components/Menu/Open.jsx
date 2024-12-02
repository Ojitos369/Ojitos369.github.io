import { useState, useEffect, useMemo } from 'react';
import { useStates } from '../../Hooks/useStates';
// import { ToggleTheme } from '../Settings/ToggleTheme';
import styles from './styles/open.module.scss';

const menuElements = [
    'main',
    'projects',
    'contacto',
    'experience',
    'skills',
    'goals',
]

const Open = props => {
    
    const { s, f, Link } = useStates();

    const [grades, setGrade] = useState({});
    const [cercanias, setCercania] = useState({});
    const [sombras, setSombras] = useState({});
    const [colors, setColors] = useState({});

    const menuTranslates= useMemo(() => {
        return {
            main: {
                top: `calc(50% - 35px - 150px)`,
                left: `calc(50% - 35px)`,
            },
            projects: {
                top: `calc(50% - 35px - 75px)`,
                left: `calc(50% - 35px - 130.1px)`,
            },
            contacto: {
                top: `calc(50% - 35px + 75px)`,
                left: `calc(50% - 35px - 103.1px)`,
            },
            experience: {
                top: `calc(50% - 35px + 130.1px)`,
                left: `calc(50% - 35px)`,
            },
            skills: {
                top: `calc(50% - 35px + 75px)`,
                left: `calc(50% - 35px + 130.1px)`,
            },
            goals: {
                top: `calc(50% - 35px - 75px)`,
                left: `calc(50% - 35px + 130.1px)`,
            },
        }
    }, []);

    const styleMenuItemBase = mode => {
        const grade = grades?.[mode] || 145;
        const cercania = cercanias?.[mode] || 90;
        const color = colors?.[mode] || {color: 'var(--my-minor)'};
        const sombra = sombras?.[mode] || {
            light: {
                x: 2,
                y: 2,
                b: 2,
                s: 2,
            },
            dark: {
                x: -2,
                y: -2,
                b: 2,
                s: 2,
            },
        };
        return {
            ...color,
            background: `linear-gradient(${grade}deg, var(--my-minor), var(--my-minor-sec) ${Math.abs(cercania * 0.3)}%, var(--my-major-sec) ${Math.abs(cercania * 0.6)}%, #0000 ${Math.abs(cercania)}%)`,
            boxShadow: `${sombra.light.x}px ${sombra.light.y}px ${sombra.light.b}px ${sombra.light.s}px var(--my-major), ${sombra.dark.x}px ${sombra.dark.y}px ${sombra.dark.b}px ${sombra.dark.s}px var(--my-minor)`,
            top: menuTranslates[mode].top,
            left: menuTranslates[mode].left,
        }
    }


    const [styleMenuItem, setStyleMenuItem] = useState({
        main: styleMenuItemBase('main'),
        projects: styleMenuItemBase('projects'),
        contacto: styleMenuItemBase('contacto'),
        experience: styleMenuItemBase('experience'),
        skills: styleMenuItemBase('skills'),
        goals: styleMenuItemBase('goals'),
    });


    const upgradeStyles = () => {
        let style = {
            main: styleMenuItemBase('main'),
            projects: styleMenuItemBase('projects'),
            contacto: styleMenuItemBase('contacto'),
            experience: styleMenuItemBase('experience'),
            skills: styleMenuItemBase('skills'),
            goals: styleMenuItemBase('goals'),
        };
        setStyleMenuItem(style);
    }

    const checkMouse = ev => {
        if (!!s?.modals?.menu?.showNavbar) {
            const mouse_x = ev.offsetX;
            const mouse_y = ev.offsetY;
            // console.log(mouse_x, mouse_y)
            let new_grades = {}
            let new_distances = {}
            let new_sombras = {}
            let new_colors = {}

            menuElements.forEach(ele => {

                // ----------------------   GRADES   ---------------------- #
                const item = document.getElementById(`menu-${ele}`);
                const item_x = item.offsetLeft;
                const item_y = item.offsetTop;
                const center = [(item_x + (item.offsetWidth / 2)), (item_y + (item.offsetHeight / 2))];
                const punto_b = [mouse_x, mouse_y];
                let angulo = Math.atan2(center[1] - punto_b[1], center[0] - punto_b[0]) * 180 / Math.PI;
                angulo += 90;
                
                
                
                // ----------------------   DISTANCES   ---------------------- #
                let cercania = Math.abs(Math.sqrt(Math.pow(center[0] - punto_b[0], 2) + Math.pow(center[1] - punto_b[1], 2))) / 10;
                // console.log(cercania)
                // if (cercania > 85) {
                //     cercania = 85;
                // }
                let color = {color: 'var(--my-color-light)'};
                if (cercania < 10) {
                        color = {
                            color: 'var(--my-color-dark)',
                            fontWeight: 'bold',
                        };
                    }
                cercania = Math.abs(100 - cercania);
                    
                
                // ----------------------   SHADOWS   ---------------------- #
                let sx = Math.cos((angulo + 90) * Math.PI / 180);
                let sy = Math.sin((angulo + 90) * Math.PI / 180);
                // if (angulo < 91) {
                //     sx = Math.abs(Math.cos(angulo * Math.PI / 180));
                //     sy = Math.abs(Math.sin(angulo * Math.PI / 180));
                // } else {
                //     sx = Math.abs(Math.cos((angulo - 180) * Math.PI / 180));
                //     sy = Math.abs(Math.sin((angulo - 180) * Math.PI / 180));
                // }
                let sombra = {
                    light: {
                        x: -(sx * 2),
                        y: -(sy * 2),
                        b: Math.abs(cercania) / 15,
                        s: Math.abs(cercania) / 15,
                    },
                    dark: {
                        x: sx * 2,
                        y: sy * 2,
                        b: Math.abs(cercania) / 15,
                        s: Math.abs(cercania) / 15,
                    }
                }
                // ele === 'projects' && console.log(`${angulo}: [${-(sx * 2)}, ${-(sy * 2)}], [${sx * 2}, ${sy * 2}]`);
                // ele === 'projects' && console.log(`cercania: ${cercania}`);
                
                
                new_grades = {
                    ...new_grades,
                    [ele]: `${angulo}`,
                };
                new_distances = {
                    ...new_distances,
                    [ele]: `${cercania}`,
                };
                new_sombras = {
                    ...new_sombras,
                    [ele]: sombra
                };
                new_colors = {
                    ...new_colors,
                    [ele]: color
                };

            })
            setGrade(new_grades);
            setCercania(new_distances);
            setSombras(new_sombras);
            setColors(new_colors);
            upgradeStyles();
        }
    }

    useEffect(() => {
        // eslint-disable-next-line
        addEventListener('mousemove', checkMouse);
        return () => {
            // eslint-disable-next-line
            removeEventListener('mousemove', checkMouse);
        }
        // eslint-disable-next-line
    }, [grades, cercanias, s?.modals?.menu?.showNavbar])

    return (
        <nav 
                className={`${styles.menu_container}`}
                id='menu-container'>
            {/* <ToggleTheme
                /> */}
            <div
                className={`${styles.menu_list}`}
            >
                <Link to='/'
                    className={`${styles.menu_item} ${styles.menu_main}`}
                    id="menu-main"
                    style={styleMenuItem.main}
                    onClick={close}
                >
                    Home
                </Link>
                
                <Link to='/projects'
                    className={`${styles.menu_item} ${styles.menu_projects}`}
                    id="menu-projects"
                    style={styleMenuItem.projects}
                    onClick={close}
                >
                    Projects
                </Link>
                
                <Link to='/contact'
                    className={`${styles.menu_item} ${styles.menu_contacto}`}
                    id="menu-contacto"
                    style={styleMenuItem.contacto}
                    onClick={close}
                >
                    Contact
                </Link>
                
                <Link to='/experience'
                    className={`${styles.menu_item} ${styles.menu_experience}`}
                    id="menu-experience"
                    style={styleMenuItem.experience}
                    onClick={close}
                >
                    Experience
                </Link>
                
                <Link to='/skills'
                    className={`${styles.menu_item} ${styles.menu_skills}`}
                    id="menu-skills"
                    style={styleMenuItem.skills}
                    onClick={close}
                >
                    Skills
                </Link>
                
                <Link to='/goals'
                    className={`${styles.menu_item} ${styles.menu_goals}`}
                    id="menu-goals"
                    style={styleMenuItem.goals}
                    onClick={close}
                >
                    Goals
                </Link>

            </div>
        </nav>
    )
}

export { Open };

/* 

*/