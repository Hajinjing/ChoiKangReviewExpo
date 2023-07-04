import SearchBox from '../components/SearchBox'
import { View } from 'react-native';


const Header = () => {
    return (
        <View>
            <SearchBox title={"검색창"} placeholder={"검색어를 입력하세요."}/>
        </View>
    );
};

export default Header;
