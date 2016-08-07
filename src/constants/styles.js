import {
	StyleSheet,
	Dimensions
} from 'react-native'

const screenWidth = Dimensions.get('window').width
const screenHeight = Dimensions.get('window').height

export const styles = StyleSheet.create({
	linearGradient: {
	    flex: 1,
  	},
	container: {
	    flex: 1,
	    flexDirection: 'column',
	},
	topBar: {
	    flex: 1,
	    height: 64,
	    width: screenWidth,
	    backgroundColor: '#3B6B81',
	},
	leftBar: {
	    width: 100,
	    height: screenHeight - 64,
	    backgroundColor: 'rgba(59, 107, 129, 1)',
	    padding: 20,
	    flexDirection:'column',
	    justifyContent: 'space-between',
	},
	navButton: {
	  	borderColor: 'white',
	  	borderWidth: 1,
	  	width: 60,
	  	height: 60,
	  	borderRadius: 10,
	  	justifyContent: 'space-between',
	  	marginTop: 1,
	},
	whiteText: {
	  	color:'white',
	},
	topBarText:{
	  	color: 'white',
	  	fontWeight: 'bold',
	  	fontSize: 35,
	  	flex: 1,
	  	justifyContent:'center',
	  	textAlign:'center',
	  	marginTop: 10,
	},
});

export const homeScreenStlyes = StyleSheet.create({
	container: {
	    flex: 1,
	    flexDirection: 'column',
	},
	image: {
		flex: 1,
	}
});
