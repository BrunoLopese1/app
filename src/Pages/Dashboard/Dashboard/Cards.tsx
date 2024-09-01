
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { CardItem } from './CardItem';

export default function Cards({cards}) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={{ xs: 1, md: 3 }} columns={{ xs: 12, sm: 12, md: 12, lg:12}}>
        {cards.map((props, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            <CardItem Icon={props.Icon} title={props.title} subtitle={props.subtitle} count={props.count}/>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}