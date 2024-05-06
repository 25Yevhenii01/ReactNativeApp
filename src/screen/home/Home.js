import React from 'react';
import { SafeAreaView, FlatList } from 'react-native';
import ItemComponent from './components/ItemComponent';

const data = [
    {
        id: 1,
        image: 'https://img.freepik.com/free-photo/top-view-pepperoni-pizza-with-mushroom-sausages-bell-pepper-olive-corn-black-wooden_141793-2158.jpg',
        title: 'Назва продукту',
        price: parseFloat('19.99'),
        oldPrice: parseFloat('29.99'),
        description: 'Опис продукту',
    },
];


const Home = () => {
    const renderItem = ({ item }) => (
        <ItemComponent
            image={item.image}
            title={item.title}
            price={item.price}
            oldPrice={item.oldPrice}
            description={item.description}
        />
    );
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={item => item.id.toString()}
            />
        </SafeAreaView>
    );
}

export default Home;

