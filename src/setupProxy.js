const proxy = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    proxy('/tutorchat', {
      target: 'http://bdportal.weitutorstage.com:8081/webapi/lead'
    })
  );
};
