export const RestaurantListItem = ({ name, rating }) => {
  return (
    <p>
      {name}
      {Array(Math.floor(rating)).fill('⭐️')}
    </p>
  );
};
