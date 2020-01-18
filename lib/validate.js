"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _lodash = _interopRequireDefault(require("lodash.isequal"));

var _lodash2 = _interopRequireDefault(require("lodash.isplainobject"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var assetIdDelimiter = '#';
var accountIdDelimiter = '@';
var accountDetailsKeyPattern = /^[A-Za-z0-9_]{1,64}$/;
var accountDetailsValueLenght = 4096;
var accountPattern = /^[a-z_0-9]{1,32}$/;
var domainPattern = /^[a-z_0-9]{1,9}$/;
var roleNamePattern = /^[a-z_0-9]{1,32}$/;
var assetNamePattern = /^[a-z_0-9]{1,32}$/;
var allowEmpty = ['key', 'writer'];
var schema = {
  amount: checkAmount,
  precision: checkPresission,
  accountName: checkAccountName,
  accountId: checkAccountId,
  domainId: checkDomain,
  assetId: checkAssetId,
  srcAccountId: checkAccountId,
  destAccountId: checkAccountId,
  description: checkDescription,
  quorum: checkQuorum,
  assetName: checkAssetName,
  roleName: checkRoleName,
  defaultRole: checkRoleName,
  key: checkAccountDetailsKey,
  value: checkAccountDetailsValue,
  roleId: checkRoleName,
  writer: checkAccountId,
  peerKey: toImplement,
  publicKey: toImplement,
  permissionsList: toImplement,
  permission: toImplement,
  txHashesList: toImplement,
  address: toImplement,
  pageSize: toImplement,
  firstTxHash: toImplement,
  height: toImplement
};

function toImplement() {
  return {
    isValid: true
  };
}

var compare = function compare(a, b) {
  return a - b;
};

function validateParams(object, required) {
  if (!(0, _lodash2["default"])(object)) {
    throw new Error("Expected type of arguments: object, actual: ".concat(_typeof(object)));
  }

  var isEquals = (0, _lodash["default"])(Object.keys(object).sort(compare), required.sort(compare));

  if (!isEquals) {
    throw new Error("Expected arguments: ".concat(required, ", actual: ").concat(Object.keys(object)));
  }

  var errors = required.map(function (property) {
    var validator = schema[property]; // TODO: Create better way to handle not required arguments

    if (allowEmpty.includes(property)) {
      return [property, {
        isValid: true
      }];
    }

    return [property, validator(object[property])];
  }).reduce(function (errors, pair) {
    if (pair[1].isValid === false) {
      errors.push(new Error("Field \"".concat(pair[0], "\" (value: \"").concat(object[pair[0]], "\") is incorrect\nReason: ").concat(pair[1].reason)));
    }

    return errors;
  }, []);

  if (errors.length) {
    throw errors;
  }

  return object;
}

function checkAmount(amount) {
  var formattedAmount = Number(amount);

  if (!Number.isFinite(formattedAmount)) {
    return {
      isValid: false,
      reason: 'Amount should be a number'
    };
  }

  if (formattedAmount < 0) {
    return {
      isValid: false,
      reason: 'Amount should be positive'
    };
  }

  if (formattedAmount > Number.MAX_SAFE_INTEGER) {
    return {
      isValid: false,
      reason: 'Amount does not fit into MAX_SAFE_INTEGER'
    };
  }

  return {
    isValid: true
  };
}

function checkPresission(precision) {
  if (precision < 0 || precision > 255) {
    return {
      isValid: false,
      reason: 'Precision should be 0 <= precision <= 255'
    };
  }

  return {
    isValid: true
  };
}

function checkAccountName(accountName) {
  if (!accountPattern.test(accountName)) {
    return {
      isValid: false,
      reason: "Account name should match ".concat(accountPattern)
    };
  }

  return {
    isValid: true
  };
}

function checkAssetName(assetName) {
  if (!assetNamePattern.test(assetName)) {
    return {
      isValid: false,
      reason: "Asset name should match ".concat(assetNamePattern)
    };
  }

  return {
    isValid: true
  };
}

function checkDomain(domain) {
  if (!domainPattern.test(domain)) {
    return {
      isValid: false,
      reason: "Domain should match ".concat(domainPattern)
    };
  }

  return {
    isValid: true
  };
}

function checkAccountId(accountId) {
  var parts = accountId.split(accountIdDelimiter);

  if (parts.length !== 2) {
    return {
      isValid: false,
      reason: 'Account ID should match account@domain'
    };
  }

  var vName = checkAccountName(parts[0]);
  var vDomain = checkDomain(parts[1]);

  if (!vName.isValid) {
    return vName;
  }

  if (!vDomain.isValid) {
    return vDomain;
  }

  return {
    isValid: true
  };
}

function checkAssetId(assetId) {
  var parts = assetId.split(assetIdDelimiter);

  if (parts.length !== 2) {
    return {
      isValid: false,
      reason: 'Asset ID should match asset#domain'
    };
  }

  var vName = checkAssetName(parts[0]);
  var vDomain = checkDomain(parts[1]);

  if (!vName.isValid) {
    return vName;
  }

  if (!vDomain.isValid) {
    return vDomain;
  }

  return {
    isValid: true
  };
}

function checkDescription(description) {
  if (description.length > 64) {
    return {
      isValid: false,
      reason: 'Description length should be smaller then 64 symbols'
    };
  }

  return {
    isValid: true
  };
}

function checkQuorum(quorum) {
  if (quorum < 0 || quorum > 128) {
    return {
      isValid: false,
      reason: 'Quorum should be 0 < quorum <= 128'
    };
  }

  return {
    isValid: true
  };
}

function checkRoleName(name) {
  if (!roleNamePattern.test(name)) {
    return {
      isValid: false,
      reason: "Role name should match ".concat(roleNamePattern)
    };
  }

  return {
    isValid: true
  };
}

function checkAccountDetailsKey(key) {
  if (!accountDetailsKeyPattern.test(key)) {
    return {
      isValid: false,
      reason: "Key should match ".concat(accountDetailsKeyPattern)
    };
  }

  return {
    isValid: true
  };
}

function checkAccountDetailsValue(value) {
  if (value.length > accountDetailsValueLenght) {
    return {
      isValid: false,
      reason: "Value length should be smaller then ".concat(accountDetailsValueLenght)
    };
  }

  return {
    isValid: true
  };
}

var _default = validateParams;
exports["default"] = _default;