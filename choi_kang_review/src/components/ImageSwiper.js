import {Image, StyleSheet} from "react-native";
import Swiper from 'react-native-swiper';

const ImageSwiper = ({photos}) => {
    return (
        <Swiper>
            {photos.map(({uri}, idx)=>(
                <Image
                    key={idx}
                    source={{uri}}
                    style={styles.photo}
                    resizeMode={"contain"}
                />
            ))}
        </Swiper>
    )

}

const styles = StyleSheet.create({
    photo: {
        width: '100%',
        height: '100%'
    }

});

export default ImageSwiper;
