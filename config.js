const env = process.env;

/*export const nodeEnv = env.NODE_ENV || 'development';
*/
/*module.exports var logStars = function(message) {
    console.log('**********');
    console.log(message);
    console.log('**********');
};*/

module.exports = {
    port: env.PORT || 8000
};