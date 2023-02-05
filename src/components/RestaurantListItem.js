export const RestaurantListItem = ({ name, rating, image_url }) => {
  return (
    <>
      <p>
        {name}
        {Array(Math.floor(rating)).fill('⭐️')}
      </p>
      <img src={image_url} style={{ width: '10rem' }} />
    </>
  );
};
