import {useState, useEffect} from 'react'
import CasaDePapel from './Casa de papel.jpg'
import Gladiator from './Gladiator.jpg'
import GOT from './GOT.jpg'
import PrisonBreak from './Prison Break.jpg'
import Suits from './Suits.jpg'
import Transporteur from './Transporteur.jpg'
import HarryPotter from './HarryPotter.jpg'

function MovieList() {
     const [movie,setMovie] = useState([{title:'Casa de Papel',poster:CasaDePapel, description:'Un film de bracage intelligent', rating:1},{title:"Game Of Throne",poster:GOT, description:"Un film d'aventur où plusieurs famille sont à la conquête du trone de fer", rating:2},{title:'Gladiator', description:"Un folm de combat de gladiateurs", poster:Gladiator, rating:3},{title:'Suits', description:"Un fil d'avocats", poster:Suits, rating:4},{title:'Prison Break', description:"Un film de prisonniers fugitifs", poster:PrisonBreak, rating:5},{title:'Transporteur', description:"Un film de missionnaire driver", poster:Transporteur, rating:6},{title:'Harry Potter', description:"Un film de Sorciers", poster:HarryPotter, rating:7}])
     
     const title=(<ul>
        {movie.map(
            (movie)=> 
            <li key={movie.rating}><img src={movie.poster} alt="" /><br/>{movie.title}<br/>{movie.description}</li>
        )}
    </ul>);
    useEffect(() => {
        setMovie(movie)
    }, [])
    
    return (
        <div>
        {title}
        </div>
    )
}

export default MovieList
