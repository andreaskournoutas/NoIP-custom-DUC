function encodeCredentials(credentials) {
    return btoa(`${credentials.get('username')}:${credentials.get('password')}`);
}