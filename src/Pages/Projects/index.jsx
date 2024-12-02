import { useEffect, useMemo } from 'react';
import { useStates } from '../../Hooks/useStates';

import { 
    Bash, BootstrapIcon, CirclesConnect, Cpp, Css, Django, 
    Docker, GCP, GithubBlue, GlobePointer, Html, 
    JavaScript, MariaDB, MySQL, Php, Postgres, Python, Pypi, 
    ReactIcon, Tailwind, 

    Desktop, Blog, 
} from '../../Components/Icons';

import { useHybotImages, useUpsImages, useBlgImages } from '../../Hooks/useImages';

import { Card1 } from '../../Components/Cards/Card1';

import styles from './styles/index.module.scss';

const Projects = props => {
    const { ls, lf, s, f } = useStates();
    const { hybot1, hybot2, hybot3, hybot4, hybot5, hybot6 } = useHybotImages();
    const { ups1, ups2, ups3, ups4, ups5, ups6, ups7 } = useUpsImages();
    const { blg1, blg2, blg3, blg4 } = useBlgImages();

    const data = [
        {
            name: "Business Administration",
            description: "A system to manage a business",
            // NameIcon: Desktop,
            info: [
                {
                    name: "tech",
                    data: [
                        {type: "text", text: "Django", Icon: Django},
                        {type: "text", text: "React", Icon: ReactIcon},
                        {type: "text", text: "Bootstrap", Icon: BootstrapIcon},
                        {type: "text", text: "PostgreSQL", Icon: Postgres},
                        {type: "text", text: "Docker", Icon: Docker},
                        {type: "text", text: "GCP", Icon: GCP},
                        {type: "text", text: "Sockets", Icon: CirclesConnect},
                        {type: "text", text: "Python", Icon: Python},
                        {type: "text", text: "C++", Icon: Cpp},
                        {type: "text", text: "Javascript", Icon: JavaScript},
                        {type: "text", text: "HTML", Icon: Html},
                        {type: "text", text: "CSS/SCSS", Icon: Css},
                    ],
                },
            ]
        },
        {
            name: "Upscaler",
            description: "A page with upscaled images",
            // NameIcon: Blog,
            info: [
                {
                    name: "tech", 
                    data: [
                        {type: "text", text: "Python", Icon: Python},
                        {type: "text", text: "Django", Icon: Django},
                        {type: "text", text: "React", Icon: ReactIcon},
                        {type: "text", text: "Tailwind", Icon: Tailwind},
                        {type: "text", text: "MariaDB", Icon: MariaDB},
                        {type: "text", text: "Html", Icon: Html},
                        {type: "text", text: "JavaScript", Icon: JavaScript},
                        {type: "text", text: "Css/Scss", Icon: Css},
                    ]
                },
                {
                    name: "urls",
                    data: [
                        // {type: "link", text: "Github", url: "https://github.com/Ojitos369/blog", Icon: GithubBlue},
                        {type: "link", text: "Page", url: "https://ups.ojitos369.com", Icon: GlobePointer},
                    ]
                },
            ],
            images: [ups1, ups2, ups3, ups4, ups5, ups6, ups7],
        },
        {
            name: "Blog",
            description: "Personal blog",
            // NameIcon: Blog,
            info: [
                {
                    name: "tech", 
                    data: [
                        {type: "text", text: "Django", Icon: Django},
                        {type: "text", text: "React", Icon: ReactIcon},
                        {type: "text", text: "Tailwind", Icon: Tailwind},
                        {type: "text", text: "MariaDB", Icon: MariaDB},
                        {type: "text", text: "Html", Icon: Html},
                        {type: "text", text: "JavaScript", Icon: JavaScript},
                        {type: "text", text: "Css/Scss", Icon: Css},
                    ]
                },
                {
                    name: "urls",
                    data: [
                        {type: "link", text: "Github", url: "https://github.com/Ojitos369/blog", Icon: GithubBlue},
                        {type: "link", text: "Page", url: "https://blog.ojitos369.com", Icon: GlobePointer},
                    ]
                },
            ],
            images: [blg1, blg2, blg3, blg4],
        },
        {
            name: "Apps",
            description: "A page with diferentes simple apps",
            info: [
                {
                    name: "tech", 
                    data: [
                        {type: "text", text: "Django", Icon: Django},
                        {type: "text", text: "React", Icon: ReactIcon},
                        {type: "text", text: "Tailwind", Icon: Tailwind},
                        // {type: "text", text: "MariaDB", Icon: MariaDB},
                        {type: "text", text: "Html", Icon: Html},
                        {type: "text", text: "JavaScript", Icon: JavaScript},
                        {type: "text", text: "Css/Scss", Icon: Css},
                    ]
                },
                {
                    name: "urls",
                    data: [
                        {type: "link", text: "Github", url: "https://github.com/Ojitos369/static_apps", Icon: GithubBlue},
                        {type: "link", text: "Page", url: "https://sa.ojitos369.com", Icon: GlobePointer},
                    ]
                },
            ]
        },
        {
            name: "Pip Ojitos369",
            description: "My python package with some utils",
            info: [
                {
                    name: "tech", 
                    data: [
                        {type: "text", text: "Python", Icon: Python},
                    ]
                },
                {
                    name: "urls",
                    data: [
                        {type: "link", text: "Github", url: "https://github.com/Ojitos369/ojitos369-pip", Icon: GithubBlue},
                        {type: "link", text: "Pypi", url: "https://pypi.org/project/ojitos369/", Icon: Pypi},
                    ]
                },
            ]
        },
        {
            name: "Reango Base",
            description: "A base to start a project using Django and React",
            info: [
                {
                    name: "tech", 
                    data: [
                        {type: "text", text: "Django", Icon: Python},
                        {type: "text", text: "React", Icon: ReactIcon},
                        {type: "text", text: "Tailwind", Icon: Tailwind},
                        {type: "text", text: "Python", Icon: Python},
                        {type: "text", text: "Javascript", Icon: JavaScript},
                        {type: "text", text: "Html", Icon: Html},
                        {type: "text", text: "Css/Scss", Icon: Css},
                    ]
                },
                {
                    name: "urls",
                    data: [
                        {type: "link", text: "Github", url: "https://github.com/Ojitos369/reango-base", Icon: GithubBlue},
                    ]
                },
            ]
        },
        {
            name: "Django Deploy",
            description: "Scripts to deploy and delete deploy of a django project in a server",
            info: [
                {
                    name: "tech", 
                    data: [
                        {type: "text", text: "Bash", Icon: Bash},
                    ]
                },
                {
                    name: "urls",
                    data: [
                        {type: "link", text: "Github", url: "https://github.com/Ojitos369/deploy_django", Icon: GithubBlue},
                    ]
                },
            ]
        },
        {
            name: "Pip OracleSql DB",
            description: "A package to manage OracleSql database with python",
            info: [
                {
                    name: "tech", 
                    data: [
                        {type: "text", text: "Python", Icon: Python},
                    ]
                },
                {
                    name: "urls",
                    data: [
                        {type: "link", text: "Github", url: "https://github.com/Ojitos369/ojitos369_oracle_db", Icon: GithubBlue},
                        {type: "link", text: "Pypi", url: "https://pypi.org/project/ojitos369-oracle-db/", Icon: Pypi},
                    ]
                },
            ]
        },
        {
            name: "Pip MySql DB",
            description: "A package to manage MySQL database with python",
            info: [
                {
                    name: "tech", 
                    data: [
                        {type: "text", text: "Python", Icon: Python},
                    ]
                },
                {
                    name: "urls",
                    data: [
                        {type: "link", text: "Github", url: "https://github.com/Ojitos369/ojitos369_mysql_db", Icon: GithubBlue},
                        {type: "link", text: "Pypi", url: "https://pypi.org/project/ojitos369-mysql-db/", Icon: Pypi},
                    ]
                },
            ]
        },
        {
            name: "Psicometrix",
            description: "A page to make psicometric tests",
            info: [
                {
                    name: "tech", 
                    data: [
                        {type: "text", text: "Php", Icon: Php},
                        {type: "text", text: "Javascript", Icon: JavaScript},
                        {type: "text", text: "Html", Icon: Html},
                        {type: "text", text: "Css", Icon: Css},
                        {type: "text", text: "MySQL", Icon: MySQL},
                    ]
                },
                {
                    name: "urls",
                    data: [
                        {type: "link", text: "Github", url: "https://github.com/Ojitos369/psicometria", Icon: GithubBlue},
                    ]
                },
            ]
        },
        {
            name: "Chat Vlaid",
            description: "Script to terminal that use GPT Api",
            info: [
                {
                    name: "tech", 
                    data: [
                        {type: "text", text: "Python", Icon: Python},
                    ]
                },
                {
                    name: "urls",
                    data: [
                        {type: "link", text: "Github", url: "https://github.com/Ojitos369/chat_vlaid", Icon: GithubBlue},
                    ]
                },
            ]
        },
        {
            name: "Vlaid",
            description: "An assistant to control the pc with voice commands",
            info: [
                {
                    name: "tech", 
                    data: [
                        {type: "text", text: "Python", Icon: Python},
                    ]
                },
                {
                    name: "urls",
                    data: [
                        {type: "link", text: "Github", url: "https://github.com/Ojitos369/vlaid", Icon: GithubBlue},
                    ]
                },
            ]
        },
        {
            name: "React Base",
            description: "My base to start a project using React",
            info: [
                {
                    name: "tech", 
                    data: [
                        {type: "text", text: "React", Icon: ReactIcon},
                        {type: "text", text: "Tailwind", Icon: Tailwind},
                        {type: "text", text: "Javascript", Icon: JavaScript},
                        {type: "text", text: "Html", Icon: Html},
                        {type: "text", text: "Css/Scss", Icon: Css},
                    ]
                },
                {
                    name: "urls",
                    data: [
                        {type: "link", text: "Github", url: "https://github.com/Ojitos369/base-react", Icon: GithubBlue},
                    ]
                },
            ]
        },
        {
            name: "HyGaBot",
            description: "A Discord bot to check data about hypixel server",
            info: [
                {
                    name: "tech", 
                    data: [
                        {type: "text", text: "Python", Icon: Python},
                    ]
                },
                {
                    name: "urls",
                    data: [
                        {type: "link", text: "Github", url: "https://github.com/Ojitos369/hygabot", Icon: GithubBlue},
                        {type: "link", text: "Github", url: "https://discord.com/oauth2/authorize?client_id=876992671284076546&permissions=8&scope=bot%20applications.commands", Icon: GlobePointer},
                    ]
                },
            ],
            images: [hybot1, hybot2, hybot3, hybot4, hybot5, hybot6],
        },
    ]


    useEffect(() => {
        if (ls.theme === 'black') {
            document.documentElement.style.setProperty('--my-major', '#2B1900');
            document.documentElement.style.setProperty('--my-major-sec', '#75542A');
            document.documentElement.style.setProperty('--my-middle', '#B0874A');
            document.documentElement.style.setProperty('--my-minor-sec', '#E3B677');
            document.documentElement.style.setProperty('--my-minor', '#F2C28E');
        } else {
            document.documentElement.style.setProperty('--my-major', '#F2C28E');
            document.documentElement.style.setProperty('--my-major-sec', '#E3B677');
            document.documentElement.style.setProperty('--my-middle', '#B0874A');
            document.documentElement.style.setProperty('--my-minor-sec', '#75542A');
            document.documentElement.style.setProperty('--my-minor', '#2B1900');
        }
    }, [ls.theme]);

    return (
        <section className={`${styles.projects_container}`}>
            <h2 className='w-full text-center text-4xl font-bold mt-5'>
                Projects
            </h2>
            <div className="flex flex-row flex-wrap w-full px-4 justify-center mt-5 pb-24">
                {data.map((item, index) => {
                    const show = item?.show ?? true;
                    if (!show) return null;
                    return (
                        <div 
                            className="flex w-10/12 md:w-1/3 px-3 justify-around mt-5"
                            key={`project_${index}`}>
                            <Card1 
                                {...item}
                            />
                        </div>
                    )
                })}
                
            </div>
        </section>
    )
}

export { Projects };
