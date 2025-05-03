function ResturantCards({Key, resturantCard}) {
    return (
      <>
        <div className="resturant-cards-dinning">
          <div className="resturant-card-dinning-image">
            <img
              src={resturantCard.IMAGE_URL}
              alt="ResturantFood"
              className="resturant-card-image"
            />
          </div>
          <div className="resturant-card-dinning-title">
            <div className="dinning-title-rating">
              <div className="dinning-title">{resturantCard.HOTEL_NAME}</div>
              <div className="dinning-rating">{resturantCard.HOTEL_RATING}★</div>
            </div>
            <div className="dinning-cuisine">{resturantCard.HOTEL_DESCRIPTION}</div>
            <div className="dinning-address">{resturantCard.ADDRESS}</div>
            <div className="dinning-price-distance">
              <span>₹600 for two</span>
            </div>
          </div>
        </div>
      </>
    );
  }
  
  export default ResturantCards;
  