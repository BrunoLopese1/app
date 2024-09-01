import { Tabs, Tab, Paper } from "@mui/material"
import { styles } from "./styles"
export default function Header(){
    const classes = styles
    return(
        <Paper className={classes.header}>
        <Tabs
          className={classes.tab}
          style={{height: '100%'}}
          value={1}
        >
          <Tab
            style={{height: '4rem', fontSize: '1rem'}}
            value={1}
            label={<span><i style={{marginRight: '0.5rem', marginLeft: '-0.5rem'}}
                            className="fa-regular fa-clock"></i> Agora</span>}
            wrapped
          />
        </Tabs>
      </Paper>
    )
}