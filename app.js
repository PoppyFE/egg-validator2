'use strict';

const validator = require('validator');
const Parameter = require('parameter');

// 8-20 必须包含至少一个
const passwrodRegexp = new RegExp('^(?=.*[a-zA-Z])(?=.*\\d)(?=.*[#@!~%^&*])[a-zA-Z\\d#@!~%^&*].{7,19}$');
const idNoReg = /(^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$)|(^[1-9]\d{5}\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{2}[0-9Xx]$)/;
const idNameReg = /^[\u4e00-\u9fa5]+(·|\.)?[\u4e00-\u9fa5]$/;

const customerValidator = {
  isValidComplexPassword(val) {
    return passwrodRegexp.test(val);
  },

  isValidIdNo(val) {
    return idNoReg.test(val);
  },

  isValidIdName(val) {
    return idNameReg.test(val);
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
