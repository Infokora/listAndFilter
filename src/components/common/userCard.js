import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
} from 'react-native';
import propTypes from 'prop-types';

export const UserCard = ({ picture, name, age, city }) => (
  <View style={style.card}>
    <Image style={style.img} source={}/>

    <View style={style.infoWrap}>
      <View style={style.info}>
        <Text>{name} + ','</Text>
        <Text>{age}</Text>
      </View>

      <Text style={style.city}>{city}</Text>
    </View>
  </View>
);

UserCard.propTypes = {
  picture: propTypes.string,
  name: propTypes.string,
  age: propTypes.number,
  city: propTypes.string,
};

const style = StyleSheet.create({
  card: {
    width: '40%',
    borderRadius: 10,
  },
  img: {
    flex: 1,
    width: null,
    height: 100,
    resizeMode: 'contain',
  },
  infoWrap: {
    padding: 10,
  },
  info: {
    flexDirection: 'row',
  },
  city: {
    fontSize: 12,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    color:  '#5f6be3'
  }
});
