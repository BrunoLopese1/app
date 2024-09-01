import { Paper, Typography, Box } from "@mui/material";
import { styles } from "./styles";

export function CardItem({ title, subtitle, count, Icon }) {
  const classes = styles;
  return (
    <Paper sx={{ padding: "1rem" }}>
      <Typography variant="h1" sx={classes.title_card}>
        <Box sx={{display:'flex', flexDirection:'row', gap:'1rem'}}>
            <i className={Icon}></i>
            {title}
        </Box> 
      </Typography>
      <Typography sx={classes.subtitle_card}>{subtitle}</Typography>
      <Typography variant="h2" sx={classes.result_card}>
        {count}
      </Typography>
    </Paper>
  );
}
