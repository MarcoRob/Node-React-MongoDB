const env = process.env;

/*export const nodeEnv = env.NODE_ENV || 'development';
*/
/*module.exports var logStars = function(message) {
    console.log('**********');
    console.log(message);
    console.log('**********');
};*/

module.exports = {
    mongodbUri: 'mongodb://localhost/test',
    port: env.PORT || 8000,
    host: env.HOST || '127.0.0.1',
    get serverUrl(){
        return `http://${this.host}:${this.port}`;
    }
};