import React from 'react';
import ReactPlayer from 'react-player/lazy';
import video from '../../videos/hand-in-water.mp4';
import { withStyles } from '@material-ui/core/styles';
// import { Container } from '@material-ui/core';
import '..//Navigation/Navigation.css';
import './VideoCard.css';

const styles = {
  root: {
    width: '100%',
  },
  reactPlayer: {
    width: '100%',
  },
};

const VideoCard = props => {
  const { classes } = props;
  return (
    <div className="row">
      <div className="title col-12">Discover Colusa</div>
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
    </div>
  );
};

export default withStyles(styles)(VideoCard);
