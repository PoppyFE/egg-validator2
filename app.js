'use strict';

const validator = require('validator');
const Parameter = require('parameter');

const customerValidator = {
};

module.exports = app => {
  const parameter = new Parameter(app.config.validator2);
  app.validator = Object.assign(parameter, customerValidator, validator);
  app.validator.isValid = (rules, obj) => {
    try {
      const errMsg = parameter.validate(rules, obj);
      if (errMsg !== undefined) return false;
    } catch (err) {
      return false;
    }

    return true;
  };
};
