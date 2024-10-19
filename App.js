import React, {useState} from 'react';
import {View, FlatList, StyleSheet, Text, Switch, } from 'react-native';

const data = [
    {id:0, name:'CafeTimes', isFavorite: true},
    {id:1, name:'burgerKing', isFavorite: false},
    {id:1, name:'cafeSun', isFavorite: false},
    {id:3, name:'Worldscafe', isFavorite: true},
    {id:4, name:'kfc', isFavorite: false},
    {id:5, name:'starbucks', isFavorite: true},
];

function App() {

    const[cafeList, setCafeList] = useState(data);
    const [showOnlyFavorites, setShowOnlyFavorites] = useState(false);


    function onFavroiteChange(isFavoriteSelected) {
        setShowOnlyFavorites(isFavoriteSelected);

        isFavoriteSelected
        ? setCafeList(cafeList.filter(cafe => cafe.isFavorite))
        : setCafeList(data);
    }

    return (
        <View>
            <View>
                <Text>Show Only Favorites</Text>
                <Switch value={setShowOnlyFavorites} onValueChange={onFavroiteChange}/>
            </View>

            <FlatList
            data = {cafeList}
            renderItem = {({item}) => <Text>{item.name}</Text>}
            />
        </View>
    );
}



export default App;
