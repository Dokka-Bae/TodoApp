const configValues = require('./config.json');

module.exports = {
    getDbConnectionString: function(){
        return `mongodb+srv://${ configValues.username }:${ configValues.password }@cluster0.2y9au.mongodb.net/${ configValues.database }?retryWrites=true&w=majority`;
    }
}