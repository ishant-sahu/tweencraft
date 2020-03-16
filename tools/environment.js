const getEnvironment = () => {
    return false;
    const nodeEnv = process.env.NODE_ENV || 'development';
    const isDev = nodeEnv === 'development';
    return isDev;
}

module.exports = {
    getEnvironment : getEnvironment
}