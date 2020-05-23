export const getUsers = (state) => {
    return state.usersPage.users;
};

export const getPagesize = (state) => {
    return state.usersPage.pageSize;
};

export const getTotalUsersCount = (state) => {
    return state.usersPage.totalUsersCount;
};

export const getCurrentPage = (state) => {
    return state.usersPage.currentPage;
};

export const getIsFetching = (state) => {
    return state.usersPage.isFetching;
};

export const getIsFollowing = (state) => {
    return state.usersPage.isFollowing;
};