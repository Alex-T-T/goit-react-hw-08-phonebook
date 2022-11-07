const getIsLoggedIn = state => state.userAuth.isLoggedIn;
const getUserName = state => state.userAuth.user.name;
const getUserEmail = state => state.userAuth.user.email; 

const userAuthSelectors = { getIsLoggedIn, getUserName, getUserEmail };
export default userAuthSelectors;