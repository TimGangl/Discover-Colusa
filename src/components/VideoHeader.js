import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';

import VideoCard from '../components/VideoCard/VideoCard';

const styles = {
  videoHeader: {
    position: 'sticky',
    minWidth: '100%',
    height: '50%',
    overflow: 'hidden',
    marginTop: '-15.6vh',
    marginLeft: 'none',
  },
};

const VideoHeader = props => {
  const { classes } = props;
  return (
    <Container disableGutters className={classes.videoHeader}>
      
      <VideoCard />
    </Container>
  );
};

export default withStyles(styles)(VideoHeader);
