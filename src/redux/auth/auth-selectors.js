const selectIsLoggedIn = state => state.auth.isLoggedIn;
const selectIsRefreshing = state => state.auth.isRefreshing;
const selectUserEmail = state => state.auth.user.email;

const authSelectors = {
    selectIsLoggedIn,
    selectIsRefreshing,
    selectUserEmail,
}

export default authSelectors;