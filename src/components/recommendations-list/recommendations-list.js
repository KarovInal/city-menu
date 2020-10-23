import React from 'react';
import map from 'lodash/map';
import Grid from '@material-ui/core/Grid';
import makeStyles from "@material-ui/core/styles/makeStyles";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  wrap: {
    overflowX: 'auto',
    padding: '20px 16px',
  },
  previewItem: {
    flexGrow: 1,
    flexShrink: 0,
    width: '100%',
    maxWidth: '120px',
    height: '120px',
    overflow: 'hidden',
    marginRight: '10px',
    padding: '8px 10px',
    borderRadius: '12px',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundColor: theme.mode.secondary.secondaryColor,
  },
  previewTitle: {
    color: '#fff',
    fontWeight: '500',
    fontSize: '14px',
    lineHeight: '18px',
  },
  gap: {
    flexGrow: 1,
    flexShrink: 0,
    width: '10px',
    height: '120px',
  }
}));

export const RecommendationsList = ({ recommendations }) => {
  const classes = useStyles();
  const history = useHistory();

  return (
    <Grid container direction='row' wrap='nowrap' className={classes.wrap}>
      {
        map(recommendations, ({ previewTitle, preview }, index) => {
          return (
            <Grid onClick={() => history.push(`/stories/${index}`)} container alignItems='flex-end' key={index} className={classes.previewItem} style={{ backgroundImage: `url('${preview}')`, }}>
              <span className={classes.previewTitle}>{ previewTitle }</span>
            </Grid>
          )
        })
      }
      <Grid container className={classes.gap} />
    </Grid>
  )
}