import { View, Text, ImageBackground } from 'react-native'
import styles from '../styles/actormovies.scss'


export default function ActorMovies({ actorMovies, pagesEnd, imagesURL }) {
    return (
        actorMovies.slice(0, pagesEnd).map((movie, index) => {
            return (
                <View style={styles.movie} key={index}>
                    <ImageBackground style={styles.popular_movie_img} resizeMode='cover' source={{
                        uri: `${imagesURL}${movie.poster_path}`,
                    }} >
                        <View style={styles.black_backdrop}>
                            <Text style={styles.movie_name}>{movie.title}</Text>
                            <Text style={styles.movie_vote}>{movie.vote_average != 0 ? movie.vote_average : '-'}</Text>
                        </View>
                    </ImageBackground>
                </View>
            )
        })
    )
}