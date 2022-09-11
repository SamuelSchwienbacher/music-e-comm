//TODO add database connection in here
//TODO make config safe
module.exports = {
    "jwt_secret": "thisisverysecret8819200",
    "jwt_refresh_secret": "thisisarefreshingsecret2309258",
    "jwt_expiration": '2h',
    "jwt_refresh_expiration": '30d',
    "salt_rounds": 10,
    "environment": "dev",
    "port": "3000"
};