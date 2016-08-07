import React, { Component } from 'react';
import {
	View,
	Text,
	TouchableHighlight,
	Image,
} from 'react-native'
// import { Slider } from 'react-slick'
import { homeScreenStlyes } from '../constants/styles'
import HomeImage from '../../assets/Wise-Owl-Preschool.jpeg'

var settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
};

export default class Home extends Component {
	render() {
		return(
			<View style={homeScreenStlyes.container}>
				<Image style= {homeScreenStlyes.image} source={ HomeImage } resizeMode='cover' />
				<Text>'This is Home view' </Text>
			</View>
		)
	}
}