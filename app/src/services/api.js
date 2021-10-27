let token = '';

const getOptions = (method, data) => {
    const options = {
        method,
        headers: {}
    }

    if(data) {
        options.headers['Content-Type'] = 'application/json';
        options.body = JSON.stringify(data);
    }

    if(token) {
        options.headers.Authorization = token;
    }

    return options;
}

export default {

    signUp(profile) {
        console.log('here in the api');
        return fetch('/api/auth/signup', getOptions('POST', profile))
            .then(response => {
                return response.ok ? response.json()
                    : response.json()
                        .then(error => Promise.reject(error));
            });
    }

}