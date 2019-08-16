// Followed configuration from package documentation
// See more at: https://www.npmjs.com/package/express-swagger-generator#usage

module.exports = {
  swaggerDefinition: {
    info: {
      description: 'Swagger definition of the Galaxies API',
      title: 'Galaxies API',
      version: '1.0.0',
    },
    produces: ['application/json', 'application/xml'],
    schemes: ['http'],
  },
  basedir: __dirname,
  files: ['../**/*.js'],
}
