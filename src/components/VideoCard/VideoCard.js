import React from 'react';
import ReactPlayer from 'react-player/lazy';
import video from '../../videos/hand-in-water.mp4';
import { withStyles } from '@material-ui/core/styles';
// import { Container } from '@material-ui/core';
import 'bootstrap/dist/css/bootstrap.min.css';
import '..//Navigation/Navigation.css';
import '../VideoCard/VideoCard.css';

const styles = {
  root: {

    width: '100%',
  },
  reactPlayer: {
    width: '100%',
  }
};

const VideoCard = props => {
  const { classes } = props;
  return (
      
    <div className={classes.root}>
      <ReactPlayer
        className={classes.reactPlayer}
        url={video}
        playing
        loop
        muted
        width='100%'
        height='100%'
      />
    </div>
  );
};

export default withStyles(styles)(VideoCard);
