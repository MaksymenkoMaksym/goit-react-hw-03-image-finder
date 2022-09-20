import { Li, Img } from './ImageGalleryItem.styled';

const ImageGalleryItem = ({
  webformatURL,
  largeImageURL,
  alt,
  modalHandler,
}) => (
  <Li className="gallery-item">
    <Img
      src={webformatURL}
      alt={alt}
      onClick={() => {
        modalHandler({ largeImageURL, alt });
      }}
    />
  </Li>
);

export default ImageGalleryItem;
