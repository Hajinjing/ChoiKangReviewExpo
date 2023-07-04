import { StyleSheet, Text, View, TextInput, Dimensions} from 'react-native';
import PropTypes from 'prop-types'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const SearchBox = ({ title, placeholder }) => {
    return (
        <View>
            <TextInput
                style={styles.input}
                placeholder={placeholder ?? title}
                autoCapitalize="none"
                autoCorrect={false}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {},
    title: {},
    input: {
        borderWidth: 1,
        borderRadius: 8,
        height: 40,
        padding: 10,
        margin: 0,
        width: windowWidth -40,
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius:30,
        backgroundColor: '#EBE9E9',
        borderColor: '#EBE9E9'
    },
});

export default SearchBox;
