import React from 'react';
import {Grid} from '@material-ui/core';
import VideoItem from './VideoItem';

const VideoList = ({videos,onVideoSelect}) => {
    const listOfVideos = videos.map((video,id) => {
        return <VideoItem key={id} video={video} onVideoSelect={onVideoSelect} />
    });
    return (
        <Grid container spacing={10} style={{marginRight:'20px'}}>{listOfVideos}</Grid>
    );
}

export default VideoList;