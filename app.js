'use strict';

const validator = require('validator');
const Parameter = require('parameter');

// 8-20 必须包含至少一个
const passwrodRegexp = new RegExp('^(?=.*[a-zA-Z])(?=.*\\d)(?=.*[#@!~%^&*])[a-zA-Z\\d#@!~%^&*].{7,19}$');

const customerValidator = {
  isValidComplexPassword(val) {
    return passwrodRegexp.test(val);
  },
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
