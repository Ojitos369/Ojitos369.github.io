import { Fragment, useState, useEffect } from 'react';
import styles from './styles/index.module.scss';
// import './styles/index.css';

const Card1 = props => {
    const { name, description, info, NameIcon, images } = props;
    const [styleContent, setStyleContent] = useState({
        backgroundColor: '#151515'
    });

    useEffect(() => {
        if (!images) return;
        // set interval per image to change the background
        let i = 0;
        const interval = setInterval(() => {
            const image = images[i];
            setStyleContent({
                backgroundColor: '151515',
                backgroundImage: `url(${image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
            });
            i = i === images.length - 1 ? 0 : i + 1;
        }, 3000);

    }, [images]);

    return (
        <div className={`${styles.card}`}>
            <div className={`${styles.content}`}>
                <div className={`${styles.back}`}>
                    <div className={`${styles.back_content}`} style={styleContent}>
                        <div className={`${styles.filter_bg}`}></div>
                        <p className='text-2xl font-bold'>
                            {!!NameIcon && 
                            <span className={`${styles.name_icon}`}>
                                <NameIcon />
                            </span>}
                            {name}
                        </p>
                        <p>{description}</p>
                    </div>
                </div>
                <div className={`${styles.front}`}>
                    <div className={`${styles.img}`}>
                        <div className={`${styles.circle}`}>
                        </div>
                        <div className={`${styles.circle} ${styles.right}`}>
                        </div>
                        <div className={`${styles.circle} ${styles.bottom}`}>
                        </div>
                    </div>

                    <div className={`${styles.front_content}`}>
                        {info.map((data, index) => {
                            return (
                                <div key={`info_${index}`}>
                                    <small className={`${styles.badge}`}>{data.name}</small>
                                    <div className={`${styles.description}`}>
                                        {data.data.map((item, index) => {
                                            const Icon = item.Icon;
                                            return (
                                                <Fragment key={`tech_${index}`}>
                                                    <div className={`${styles.title}`}>
                                                        {item.type === "text" &&
                                                        <>
                                                            <p className={`${styles.title}`}>
                                                                <strong>{item.text}</strong>
                                                            </p>
                                                            {Icon &&
                                                            <span>
                                                                <Icon />
                                                            </span>}
                                                        </>}
                                                        {item.type === "link" &&
                                                        <>
                                                            <a
                                                                href={item.url}
                                                                target="_blank"
                                                                rel="noreferrer"
                                                                >
                                                                <strong>{item.text}</strong>
                                                            </a>
                                                            {Icon &&
                                                            <a
                                                                href={item.url}
                                                                target="_blank"
                                                                rel="noreferrer"
                                                                >
                                                                <span>
                                                                    <Icon />
                                                                </span>
                                                            </a>}
                                                        </>}

                                                    </div>
                                                    <p className={`${styles.card_footer}`}>
                                                        {item.footer || "----------------"}
                                                    </p>
                                                </Fragment>
                                            )
                                        })}
                                    </div>
                                </div>
                            )
                        })}

                        {!!images && images.length > 1 &&
                        // show gallery of images and open each in other tab when clicked
                        <div>
                            <small className={`${styles.badge}`}>Images</small>
                            <div className={`${styles.description}`}>
                                <div className={`${styles.gallery}`}>
                                    {images.map((image, index) => {
                                        return (
                                            <a
                                                key={`img_${index}`}
                                                href={image}
                                                target="_blank"
                                                rel="noreferrer"
                                                >
                                                <img src={image} alt={`img_${index}`} />
                                            </a>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>}
                    </div>
                </div>
            </div>
        </div>
    )
}

export { Card1 };