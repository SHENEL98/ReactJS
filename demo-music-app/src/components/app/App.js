import React from "react";
import "./App.css";
import Playlist from "../playlist/Playlist";
import SearchBar from "../searchbar/SearchBar";
import SearchResults from "../searchresults/SearchResults";
import Spotify from "../../util/Spotify";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      SearchResults: [],
      playListName: "New Playlist",
      playListTracks: [],
    };
    this.search = this.search.bind(this);
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
    this.removeTrackSearch = this.removeTrackSearch.bind(this);
    this.doThese = this.doThese.bind(this); 
  }

  search(term){
    Spotify.search(term).then(SearchResults =>{
      this.setState({SearchResults: SearchResults});
    });
  }

  addTrack(track){
    let tracks = this.state.playListTracks;
    if(tracks.find(savedTrack => savedTrack.id === track.id)){
      return;
    }
    tracks.push(track);
    this.setState({playListTracks: tracks});
  }

  removeTrack(track){
    let tracks = this.state.playListTracks;
    let trackSearch = this.state.SearchResults;
    tracks = tracks.filter(currentTrack => currentTrack.id !== track.id);
    trackSearch.unshift(track);
    this.setState({playListTracks: tracks});
  }

  removeTrackSearch(track){
    let tracks = this.state.SearchResults;
    tracks = tracks.filter(currentTrack=> currentTrack.id !== track.id);
    this.setState({SearchResults: tracks});
  }

  doThese(track){
    this.addTrack(track);
    this.removeTrackSearch(track);
  }

  updatePlaylistName(name){
    this.setState({updatePlaylistName: name});
  }

  savePlaylist(){
    const trackUrls = this.state.playListTracks.map(track => track.url);
    Spotify.savePlaylist(this.state.playListName,trackUrls).then (()=>{
      this.setState({
        updatePlaylistName: "New Playlist",
        playListTracks: []
      });
    });
  }
  
  render(){
    return (
      <div>
        <h1>
          <a href="/">Musicophile</a>
        </h1>
        <div className="App">
          <SearchBar onSearch={this.search} />
          <div className="App-playlist">
            <SearchResults SearchResults={this.state.SearchResults} onAdd={this.doThese} />
            <Playlist playListTracks={this.state.playListTracks} onNameChange={this.updatePlaylistName} onRemove={this.removeTrack} onSave={this.savePlaylist} />
            
          </div>
        </div>
      </div>
    );
  }

}
 

export default App;
