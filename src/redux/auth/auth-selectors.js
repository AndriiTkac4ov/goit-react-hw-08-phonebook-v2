const getIsLoggedIn = state => state.auth.isLoggedIn;
const getIsRefreshing = state => state.auth.isRefreshing;
const getUsername = state => state.auth.user.name;

const authSelectors = {
    getIsLoggedIn,
    getIsRefreshing,
    getUsername,
}

export default authSelectors;