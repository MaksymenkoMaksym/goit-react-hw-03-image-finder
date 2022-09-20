import ImageGalleryItem from 'components/ImageGalleryItem';
import Ul from './ImageGallery.styled';
const ImageGallery = ({ imgItems, modalHandler }) => (
  <Ul className="gallery">
    {imgItems.map((img, i) => (
      <ImageGalleryItem
        key={`${img.id}` + i}
        alt={img.tags}
        webformatURL={img.webformatURL}
        largeImageURL={img.largeImageURL}
        modalHandler={modalHandler}
      />
    ))}
  </Ul>
);

export default ImageGallery;
