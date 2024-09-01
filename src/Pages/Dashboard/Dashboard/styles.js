export const styles = {
    header: {
      display: 'flex',
      justifyContent: "start",
      alignItems: "center",
      //padding: '1.2rem',
      paddingTop: 0,
      paddingBottom: 0,
      width: '100%',
      height: '4rem',
      background: "white",//theme.palette.background_color_secondary.main,
      borderRadius: '20px',
      marginBottom: "1rem",
      boxShadow: `3px 3px 6px #00000029`
    },
    card_container: {
      height: '10rem',
      padding: "0.5rem",
      width: '100%',
    },
    card: {
      background: "white",//theme.palette.background_color_secondary.main,
      borderRadius: '20px',
      width: '100%',
      padding: "1rem",
      boxShadow: `3px 3px 6px #00000029`,
      display: "flex",
      justifyContent: "start",
      alignItems: "start",
      flexDirection: "column",
    },
    chart: {
      background:"white",//theme.palette.background_color_secondary.main,
      borderRadius: '20px',
      width: '100%',
      height: '100%',
      padding: "1rem",
      boxShadow: `3px 3px 6px #00000029`,
      display: "flex",
      textAlign: "center",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      overflow: 'hidden'
    },
    general: {
      display: 'flex',
      justifyContent: "start",
      alignItems: "start",
      padding: '1.2rem',
      paddingTop: 0,
      paddingBottom: 0,
      width: '100%',
      height: '12rem',
      background: "white",//theme.palette.background_color_secondary.main,
      borderRadius: '20px',
      marginBottom: "1rem",
      marginTop: "1rem",
      boxShadow: `3px 3px 6px #00000029`,
      flexDirection: "column"
    },
    general_FormControl: {
      textAlign: "start",
      width: '100%',
      color: "black",//theme.palette.text_color_default.main
    },
    title_card: {
      margin: 0,
      fontSize: '1.2rem',
      color: "black",//theme.palette.text_color_default.main,
      fontFamily:"Roboto",
      fontWeight:"700"
    },
    subtitle_card: {
      margin: 0,
      fontSize: '0.7rem',
      marginTop: "0.2rem",
      color: "#A4A4A4",
      fontFamily:"Roboto"
    },
    result_card: {
      flex: 1,
      margin: 0,
      marginTop: "0.2rem",
      fontSize: '1.2rem',
      color: "green",//theme.palette.text_color_primary.main,
      fontWeight:'500'
    },
    tab: {
      color: "black",//theme.palette.text_color_primary.main,
    },
    color_default: {},
    bntAdd: {
      alignItems: 'center',
      alignSelf:"center",
      appearance: 'none',
      backgroundColor: "black",//theme.palette.text_color_primary.main,
      borderRadius: '10px',
      borderWidth: 0,
      boxShadow: 'none',
      boxSizing: 'border-box',
      color: '#FFFFFF',
      cursor: 'pointer',
      display: 'inline-flex',
      fontSize: '1rem',
      height: '2rem',
      width: 'auto',
      justifyContent: 'center',
      lineHeight: 1.5,
      padding: '6px 20px',
      position: 'relative',
      textAlign: 'center',
      textDecoration: 'none',
      transition: 'background-color .2s, background-position .2s',
      userSelect: 'none',
      WebkitUserSelect: 'none',
      touchAction: 'manipulation',
      verticalAlign: 'top',
      whiteSpace: 'nowrap',
      '&:hover': {
        backgroundColor: "white",//theme.palette.text_color_secondary.main
      },
    }, 
}