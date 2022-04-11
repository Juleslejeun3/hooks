import { Component } from 'react';
import MovieList from './MovieList';
import GOT from './GOT.jpg'
import Filtre from './Filtre';

class MovieCard extends Component {
  state = {show : false  }

  handleShow=()=>this.setState({show:true})
  handleCached=()=>this.setState({show:false})
  render(){
    let show = this.state.show;
    let Button;
    if (show) {
      Button = <button onClick={this.handleCached}>Fermer Liste Films</button>;
    } else {
      Button = <button onClick={this.handleShow}> Ouvrir Liste Films</button>;
    }
   
  return (
    <div className="MovieCard">
    <div className='aLaffiche'>
        <h1>A L'affiche</h1>
        <img src={GOT} alt="GOT film" />
        <p>Game Of Throne est un film où plusieurs famille sont en confrontation pour la conquête du trone de fer.</p>
        
        <div>
            <Filtre/>
        </div>
    <div className='listMovie'>
    {show?<MovieList/> : null}
    </div>
    {Button}
    </div>
    </div>
  );
}
}


export default MovieCard;
