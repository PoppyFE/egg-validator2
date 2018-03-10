'use strict';

const validator = require('validator');
const Parameter = require('parameter');

const customerValidator = {
};

module.exports = app => {
  const parameter = new Parameter(app.config.validator2);
  app.validator = Object.assign(parameter, customerValidator, validator);
};
