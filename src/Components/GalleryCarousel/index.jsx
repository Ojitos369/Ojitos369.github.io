import styles from './styles/index.modules.scss';

const GalleryCarousel = props => {
    const { images } = props;
    return (
        <div className={styles.galleryCarousel}>
            <h1>Gallery Carousel</h1>
        </div>
    );
};

export { GalleryCarousel };