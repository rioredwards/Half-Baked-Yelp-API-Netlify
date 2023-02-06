import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Divider,
  Link,
  ListItemButton,
  ListItemText,
  Typography,
} from '@mui/material';
import { Restaurant, AccountCircle } from '@mui/icons-material';
import './Restaurant.css';

export const RestaurantListItem = ({ name, rating, image_url, location, categories }) => {
  return (
    <Card sx={{ width: 445, margin: 2 }}>
      <ListItemButton />
      <CardHeader
        avatar={
          <Avatar aria-label="utensils">
            <Restaurant />
          </Avatar>
        }
        title={
          <Typography gutterBottom variant="h6" component="div">
            <Link href="#" underline="hover">
              {name}
            </Link>
          </Typography>
        }
        subheader={
          <>
            <ListItemText>{location.display_address.map((addr) => addr)}</ListItemText>
            <ListItemText>{Array(Math.floor(rating)).fill('⭐️')}</ListItemText>
          </>
        }
      />
      <Divider />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {categories.map((cat, idx) => `${idx === 0 ? '' : ' • '}${cat.title}`)}
        </Typography>
      </CardContent>
      <CardMedia component="img" height="194" image={image_url} alt={name} />
    </Card>
  );
};
