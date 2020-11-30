import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';

import VideoCard from './VideoCard';

const styles = {
  videoHeader: {
    position: 'sticky',
    minWidth: '100%',
    height: '40%',
    overflow: 'hidden',
    marginTop: '-20vh',
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
