import { View, Text } from 'react-native'
import styles from '../styles/navbar.scss';
import Icon from 'react-native-vector-icons/AntDesign';

export default function Navbar() {
    return (
        <View style={styles.navbar}>
            <Text style={styles.logo}>SPOTFLIX</Text>
            <Icon name="user" style={styles.user}></Icon>
        </View>
    )
}