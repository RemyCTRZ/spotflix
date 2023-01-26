import { View, Text, ScrollView, TextInput, Button } from 'react-native'
import styles from '../styles/movies.scss';
import Icon from 'react-native-vector-icons/Feather';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Carrousel from './Carrousel';
import ActorMovies from './ActorMovies';

export default function Movies() {

    const [loading, setLoading] = useState(true)

    const [popularMovies, setPopularMovies] = useState(null)

    const [actorMovies, setActorMovies] = useState(null)

    const [pagesEnd, setPagesEnd] = useState(10)

    const API_KEY = "d4dfced817985d414b727774821c9678"

    const imagesURL = "https://image.tmdb.org/t/p/original"

    const queryURL = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=`

    const getPopularMovies = async () => {
        await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=fr-FR&page=1`)
            .then(response => {
                setPopularMovies(response.data.results)
            })
            .catch(error => {
                console.log('ERROR:', error)
            })
    }

    const getActorMovies = async (e) => {
        const personName = e.replace(/\s/g, '+')
        await axios.get(`${queryURL}${personName}`)
            .then(response => {
                console.log(response.data.results)
                setActorMovies(response.data.results)
            })
            .catch(error => {
                console.log('ERROR:', error)
            })
    }

    useEffect(() => {
        getPopularMovies()
            .then(() => setLoading(false))
    }, [])


    if (loading) return (
        <View style={styles.main}>
            <Text style={styles.text}>CHARGEMENT</Text>
        </View>
    )

    return (
        <View style={styles.main}>
            <View style={styles.popular}>
                <Text style={styles.header}> <Icon name="star" style={styles.star} /> Populaire</Text>
                {popularMovies != null ?
                    (
                        <Carrousel popularMovies={popularMovies} imagesURL={imagesURL} />
                    )
                    :
                    (
                        <ScrollView style={styles.carrousel} horizontal={true}>
                            <View style={styles.fake_popular_movie}></View>
                            <View style={styles.fake_popular_movie}></View>
                        </ScrollView>
                    )}
            </View>
            <View style={styles.main_container}>
                <View style={styles.header_container}>
                    <Text style={styles.header}>Rechercher </Text>
                    <TextInput style={styles.input} onChangeText={(e) => getActorMovies(e)}></TextInput>
                </View>
                <View style={styles.movies_list}>
                    {actorMovies ?
                        (
                            <ActorMovies actorMovies={actorMovies} pagesEnd={pagesEnd} imagesURL={imagesURL} />
                        )
                        :
                        (
                            <Text style={styles.guideline}>Veuillez entrer le nom d'un acteur</Text>
                        )
                    }
                    {actorMovies &&
                        <View style={styles.button_container}>
                            {actorMovies.length > pagesEnd && <Button style={styles.button} title='V' onPress={() => setPagesEnd(pagesEnd + 10)} />}
                        </View>
                    }
                </View>
            </View>
        </View >
    )
}