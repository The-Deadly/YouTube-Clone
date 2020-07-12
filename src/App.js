import React,{Component} from 'react';
import {Grid} from '@material-ui/core';
import youtube from './api/youtube';
import {SearchBar,VideoDetail, VideoList} from './components';

class App extends Component {
    state = {
        videos: [],
        selectedVideo: null
    }

    componentDidMount() {
        this.handleSubmit('cricket');
    }

    onVideoSelect = (video) => {
        const selectedVideo = video;
        this.setState({selectedVideo: selectedVideo});
    }

    handleSubmit = async(searchTerm) => {
        const response = await youtube.get('search',{params: {
            part: 'snippet',
            maxResults: 5,
            key: 'AIzaSyDBrdVvnswiZp45n7UM7n3anZ3k5AU2CiI',
            q: searchTerm
        }});
        const videos = response.data.items;
        const selectedVideo = response.data.items[0];
        this.setState({videos: videos,selectedVideo: selectedVideo});
    }

    render (){
        return(
            <Grid container spacing={10} justify="center">
                <Grid item xs={12}>
                    <Grid container spacing={10}>
                        <Grid item xs={12}>
                            <SearchBar onFormSubmit={this.handleSubmit} />
                        </Grid>
                        <Grid item xs={8}>
                            <VideoDetail video={this.state.selectedVideo} />
                        </Grid>
                        <Grid item xs={4}>
                            <VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect}/>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        );
    }
}

export default App;