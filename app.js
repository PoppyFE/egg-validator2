'use strict';

const validator = require('validator');

const customerValidator = {
};

module.exports = app => {
  app.validator = Object.assign(customerValidator, validator);
};
