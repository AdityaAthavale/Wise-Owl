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

export default class AppContainer extends Component {
	static propTypes = {
		selectedTab: React.PropTypes.number 
	}

	render() {
		console.log(this.props.selectedTab)
		return(
			<View style={styles.container}>
				<View style={styles.topBar}><Text style={styles.topBarText}> Wise Owl Preschool</Text></View>
				<View style={styles.leftBar}>
					<TouchableHighlight
						style={styles.navButton}
						onPress={actions.home}
					>
						<Image source={require('../../assets/logo.png')} />
					</TouchableHighlight>
					<TouchableHighlight
						style={styles.navButton}
						onPress={actions.exercise}
					>
						<Text style={styles.whiteText}>'Exercise'</Text>
					</TouchableHighlight>
					<TouchableHighlight
						style={styles.navButton}
						onPress={actions.programs}
					>
						<Text style={styles.whiteText}>'Programs'</Text>
					</TouchableHighlight>
					<TouchableHighlight
						style={styles.navButton}
						onPress={actions.admissions}
					>
						<Text style={styles.whiteText}>'Admissions'</Text>
					</TouchableHighlight>
					<TouchableHighlight
						style={styles.navButton}
						onPress={actions.contactus}
					>
						<Text style={styles.whiteText}>'Contact Us'</Text>
					</TouchableHighlight>
					<TouchableHighlight
						style={styles.navButton}
						onPress={actions.blog}
					>
						<Text style={styles.whiteText}>'Blog'</Text>
					</TouchableHighlight>
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
	console.log('in map actions')
	console.log(actions)
	return ({
		actions: bindActionCreators(actions, dispatch)
	})
}

export default connect((state) => (mapStateToProps),
(dispatch) => (mapActions)
)(AppContainer);

