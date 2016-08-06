import React, { Component } from 'react';
import {
	View,
	Text,
	TouchableHighlight,
	Image,
} from 'react-native'
import { styles } from '../constants/styles'
import HomeImage from '../../assets/Wise-Owl-Preschool.png'

class Home extends Component {
	render(
		<View>
			<Image source={ HomeImage } />
			<Text>'This is some view' </Text>
		</View>
	)
}