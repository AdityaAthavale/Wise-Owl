const initialState = {
	selectedTab: 0,
};

export default function getSelectedTab(state = initialState, action) {
	switch (action.type) {
		case 'HOME':
			return({
				...state,
				selectedTab: 0,
			});
		case 'EXERCISE':{
			return({
				...state,
				selectedTab: 1,
			});
		}
		case 'PROGRAMS':{
			return({
				...state,
				selectedTab: 2,
			});
		}
		case 'ADMISSIONS':{
			return({
				...state,
				selectedTab: 3,
			});
		}
		case 'CONTACTUS':{
			return({
				...state,
				selectedTab: 4,
			});
		}
		case 'BLOG':{
			return({
				...state,
				selectedTab: 5,
			});
		}
		default:
			return state;
	}
}