import React, {
    Component
} from 'react';
import {
    ScrollView
} from 'react-native';
import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {
    state = {
        albums: []
    }
    componentDidMount() {
        console.log('componentDidMount in AlmbumList');

        fetch('https://rallycoding.herokuapp.com/api/music_albums')
            .then((response) => response.json())
            .then((responseData) => this.handleResponse(responseData))
            .catch(error => { throw error; });

        console.log(this.state.albums);
    }

    handleResponse(responseData) {
        console.log(responseData)
        this.setState({ albums: responseData });

        console.log('after set');
        console.log(this.state.albums);
    }

    renderAllAlmbums() {
        return this.state.albums.map(album =>
            <AlbumDetail
                key={album.title}
                album={album}
            />
        );
    }

    render() {

        return (
            <ScrollView>
                {this.renderAllAlmbums()}
            </ScrollView>
        );
    }

}


export default AlbumList;
