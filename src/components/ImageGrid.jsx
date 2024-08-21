import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; 
import './ImageGrid.css';

const ImageGrid = () => {
 
  const images1 = [
    '/assets/image1.jpg',
    '/assets/image2.jpg',
    '/assets/image3.jpg',
  ];

  const images2 = [
    '/assets/image4.jpg',
    '/assets/image5.jpg',
    '/assets/image6.jpg',
  ];

  const images3 = [
    '/assets/image7.jpg',
    '/assets/image8.jpg',
    '/assets/image9.jpg',
  ];

  return (
    <div className="grid-container">
      <div className="grid-item">
        <Carousel
          showArrows={true}
          showThumbs={false}
          showStatus={false}
          renderArrowPrev={() => null}
          renderArrowNext={(onClickHandler, hasNext) =>
            hasNext && (
              <button type="button" onClick={onClickHandler} className="arrow-button right-arrow">
                &#8594;
              </button>
            )
          }
        >
          {images1.map((image, index) => (
            <div key={index}>
              <img src={image} alt={`Slide ${index + 1}`} />
            </div>
          ))}
        </Carousel>
      </div>
      <div className="grid-item">
        <Carousel
          showArrows={true}
          showThumbs={false}
          showStatus={false}
          renderArrowPrev={() => null}
          renderArrowNext={(onClickHandler, hasNext) =>
            hasNext && (
              <button type="button" onClick={onClickHandler} className="arrow-button right-arrow">
                &#8594;
              </button>
            )
          }
        >
          {images2.map((image, index) => (
            <div key={index}>
              <img src={image} alt={`Slide ${index + 1}`} />
            </div>
          ))}
        </Carousel>
      </div>
      <div className="grid-item">
        <Carousel
          showArrows={true}
          showThumbs={false}
          showStatus={false}
          renderArrowPrev={() => null}
          renderArrowNext={(onClickHandler, hasNext) =>
            hasNext && (
              <button type="button" onClick={onClickHandler} className="arrow-button right-arrow">
                &#8594;
              </button>
            )
          }
        >
          {images3.map((image, index) => (
            <div key={index}>
              <img src={image} alt={`Slide ${index + 1}`} />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default ImageGrid;
