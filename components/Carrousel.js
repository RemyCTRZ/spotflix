import { View, Text, ScrollView, ImageBackground } from 'react-native'
import styles from '../styles/carrousel.scss'

export default function Carrousel({ popularMovies, imagesURL }) {
    return (
        <ScrollView style={styles.carrousel} horizontal={true}>
            {
                popularMovies.map((movie, index) => {
                    return (
                        <View style={styles.popular_movie} key={index}>
                            <ImageBackground style={styles.popular_movie_img} resizeMode='cover' source={{
                                uri: `${imagesURL}${movie.poster_path}`,
                            }} >
                                <View style={styles.black_backdrop}>
                                    <Text style={styles.popular_movie_name}>{movie.title}</Text>
                                </View>
                            </ImageBackground>
                        </View>
                    )
                })
            }
        </ScrollView>
    )
}