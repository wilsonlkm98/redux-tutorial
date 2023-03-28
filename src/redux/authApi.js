const login = async (username, password) => {
    if (username === 'admin' && password === 'admin') {
        return { success: true };
    } else {
        return { success: false, error: 'Invalid username or password' };
    }
};

export default {
    login,
};