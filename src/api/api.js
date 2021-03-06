import * as axios from "axios";

const instance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    withCredentials: true,
    headers: {
        "API-KEY": "03264173-eec8-4502-908e-4f5cb750fde1"
    }
});

const instanceNews = axios.create({
    baseURL: "/v2/",
    withCredentials: true,
});

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => {
            return response.data
        })
    },
    followUser(userId) {
        return instance.post(`follow/${userId}`).then(response => {
            return response.data
        })
    },
    unfollowUser(userId) {
        return instance.delete(`follow/${userId}`).then(response => {
            return response.data
        })
    }
};

export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/${userId}`).then(response => {
            return response.data
        })
    },
    getStatus(userId) {
        return instance.get(`profile/status/${userId}`).then(response => {
            return response.data
        })
    },
    updateStatus(status) {
        return instance.put(`profile/status`, {status: status}).then(response => {
            return response.data
        })
    },
    updatePhoto(photoFile) {
        let formData = new FormData();
        formData.append('file', photoFile);

        return instance.put(`profile/photo`, formData).then(response => {
            return response.data
        })
    },
    updateProfile(profile) {
        return instance.put(`profile`, profile).then(response => {
            return response.data
        })
    }
};

export const authAPI = {
    getAuth() {
        return instance.get(`auth/me`).then(response => {
            return response.data
        })
    },
    login(email, password, rememberMe = false, captcha = null) {
        return instance.post(`auth/login`, {email, password, rememberMe, captcha}).then(response => {
            return response.data
        })
    },
    logout() {
        return instance.delete(`auth/login`).then(response => {
            return response.data
        })
    }
};

export const newsAPI = {
    getNews() {
        return instanceNews.get(`top-headlines?country=ru&apiKey=5ed99f894ed747178013e1bff5814a24`).then(response => {
            return response.data
        })
    }
};

export const securityAPI = {
  getCaptchaUrl() {
      return instance.get(`security/get-captcha-url`).then(response => {
          return response.data
      })
  }
};


