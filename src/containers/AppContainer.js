import React, { Component } from 'react';
import {
	View,
	Text,
	TouchableHighlight,
	Image,
} from 'react-native'

//Importing redux for state management
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Using third party for linear gradient
import LinearGradient from 'react-native-linear-gradient';
import { styles } from '../constants/styles';
import * as actions from '../actions/Home';
import home_icon from '../../assets/home_icon.png';
import Home from '../components/Home'

export default class AppContainer extends Component {
	static propTypes = {
		selectedTab: React.PropTypes.number 
	}

	renderChildView() {
		console.log('in render child view')
		switch(this.props.selectedTab) {
			case 0:
				return(
					<Home />
				)
			case 1:
				return(
					<View><Text>'This is Exercise View'</Text></View>
				)
			case 2:
				return(
					<View><Text>'This is Programs View'</Text></View>
				)
			case 3:
				return(
					<View><Text>'This is Admissions View'</Text></View>
				)
			case 4:
				return(
					<View><Text>'This is contact us View'</Text></View>
				)
			case 5:
				return(
					<View><Text>'This is Home View'</Text></View>
				)
			default:
				<View><Text>'This should never be displayed'</Text></View>
		}

	}

	render() {
		console.log(this.props.selectedTab)
		return(
			<View style={styles.container}>
				<View style={styles.topBar}>
					<Text style={styles.topBarText}> Wise Owl Preschool</Text>
				</View>
				<View style={{backgroundColor: 'white', flexDirection:'row'}}>
					<View style={styles.leftBar}>
						<TouchableHighlight
							style={styles.navButton}
							onPress={this.props.actions.home}
						>
							<Image source={home_icon} />
						</TouchableHighlight>
						<TouchableHighlight
							style={styles.navButton}
							onPress={this.props.actions.exercise}
						>
							<Text style={styles.whiteText}>Exercise</Text>
						</TouchableHighlight>
						<TouchableHighlight
							style={styles.navButton}
							onPress={this.props.actions.programs}
						>
							<Text style={styles.whiteText}>Programs</Text>
						</TouchableHighlight>
						<TouchableHighlight
							style={styles.navButton}
							onPress={this.props.actions.admissions}
						>
							<Text style={styles.whiteText}>Admissions</Text>
						</TouchableHighlight>
						<TouchableHighlight
							style={styles.navButton}
							onPress={this.props.actions.contactus}
						>
							<Text style={styles.whiteText}>Contact Us</Text>
						</TouchableHighlight>
						<TouchableHighlight
							style={styles.navButton}
							onPress={this.props.actions.blog}
						>
							<Text style={styles.whiteText}>Blog</Text>
						</TouchableHighlight>
					</View>
					{this.renderChildView()}
				</View>
			</View>
		)
	}
}

function mapStateToProps(state) {
	return ({
		selectedTab: state.home.selectedTab,
	})
}

function mapActions(dispatch) {
	return ({
		actions: bindActionCreators(actions, dispatch)
	})
}

export default connect((state) => (mapStateToProps),
(dispatch) => (mapActions)
)(AppContainer);

