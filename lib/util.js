"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getProtoEnumName = getProtoEnumName;
exports.sendTransactions = sendTransactions;
exports.signWithArrayOfKeys = signWithArrayOfKeys;
exports.capitalize = void 0;

var _txHelper = _interopRequireDefault(require("./txHelper"));

var _endpoint_pb = require("./proto/endpoint_pb");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _listToTorii(txs, txClient, timeoutLimit) {
  var txList = _txHelper["default"].createTxListFromArray(txs);

  return new Promise(function (resolve, reject) {
    /**
     * grpc-node hangs against unresponsive server, which possibly occur when
     * invalid node IP is set. To avoid this problem, we use timeout timer.
     * c.f. {@link https://github.com/grpc/grpc/issues/13163 Grpc issue 13163}
     */
    var timer = setTimeout(function () {
      txClient.$channel.close();
      reject(new Error('Please check IP address OR your internet connection'));
    }, timeoutLimit); // Sending even 1 transaction to listTorii is absolutely ok and valid.

    txClient.listTorii(txList, function (err, data) {
      clearTimeout(timer);

      if (err) {
        return reject(err);
      }

      var hashes = txs.map(function (x) {
        return _txHelper["default"].hash(x);
      });
      resolve(hashes);
    });
  });
}

function _handleStream(hash, txClient) {
  var request = new _endpoint_pb.TxStatusRequest();
  request.setTxHash(hash.toString('hex'));
  return txClient.statusStream(request);
}

function _fromStream(_ref, requiredStatusesStr) {
  var hash = _ref.hash,
      txClient = _ref.txClient;
  var terminalStatuses = [_endpoint_pb.TxStatus.STATELESS_VALIDATION_FAILED, _endpoint_pb.TxStatus.STATEFUL_VALIDATION_FAILED, _endpoint_pb.TxStatus.COMMITTED, _endpoint_pb.TxStatus.NOT_RECEIVED, _endpoint_pb.TxStatus.REJECTED];
  var requiredStatuses = requiredStatusesStr.map(function (s) {
    return _endpoint_pb.TxStatus[s];
  });
  var successStatuses = [_endpoint_pb.TxStatus.COMMITTED].concat(_toConsumableArray(requiredStatuses));

  var isTerminal = function isTerminal(status) {
    return terminalStatuses.includes(status);
  };

  var isRequired = function isRequired(status) {
    return requiredStatuses.includes(status);
  };

  var isError = function isError(status) {
    return !successStatuses.includes(status);
  };

  return new Promise(function (resolve, reject) {
    var timer;

    var connect = function connect() {
      var stream = _handleStream(hash, txClient);

      stream.on('data', dataHandler);
    };

    var resetTimer = function resetTimer() {
      clearTimeout(timer);
      timer = setTimeout(connect, 5000);
    };

    var dataHandler = function dataHandler(tx) {
      resetTimer();
      var status = tx.getTxStatus();

      if (isTerminal(status) || isRequired(status)) {
        clearTimeout(timer);
        resolve({
          tx: tx,
          error: isError(status)
        });
      }
    };

    connect();
  });
}

function _streamVerifier(_x, _x2, _x3) {
  return _streamVerifier2.apply(this, arguments);
}
/**
 * Capitalizes string
 * @param {String} string
 * @returns {String} capitalized string
 */


function _streamVerifier2() {
  _streamVerifier2 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(hash, txClient, requiredStatusesStr) {
    var result;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _fromStream({
              hash: hash,
              txClient: txClient
            }, requiredStatusesStr);

          case 2:
            result = _context.sent;
            return _context.abrupt("return", result);

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _streamVerifier2.apply(this, arguments);
}

var capitalize = function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

exports.capitalize = capitalize;
var protoEnumName = {};

function getProtoEnumName(obj, key, value) {
  if (protoEnumName.hasOwnProperty(key)) {
    if (protoEnumName[key].length < value) {
      return 'unknown';
    } else {
      return protoEnumName[key][value];
    }
  } else {
    protoEnumName[key] = [];

    for (var k in obj) {
      var idx = obj[k];

      if (isNaN(idx)) {
        throw Error("getProtoEnumName:wrong enum value, now is type of ".concat(_typeof(idx), " should be integer"));
      } else {
        protoEnumName[key][idx] = k;
      }
    }

    return getProtoEnumName(obj, key, value);
  }
}

function sendTransactions(txs, txClient, timeoutLimit) {
  var requiredStatusesStr = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : ['COMMITTED'];
  return _listToTorii(txs, txClient, timeoutLimit).then(function (hashes) {
    return new Promise(function (resolve, reject) {
      var requests = hashes.map(function (h) {
        return _streamVerifier(h, txClient, requiredStatusesStr);
      });
      Promise.all(requests).then(function (res) {
        var status = res.map(function (r) {
          return getProtoEnumName(_endpoint_pb.TxStatus, 'iroha.protocol.TxStatus', r.tx.getTxStatus());
        });
        return res.some(function (r) {
          return r.error;
        }) ? reject(new Error("Command response error: expected=".concat(requiredStatusesStr, ", actual=").concat(status))) : resolve();
      });
    });
  });
}

function signWithArrayOfKeys(tx, privateKeys) {
  privateKeys.forEach(function (key) {
    tx = _txHelper["default"].sign(tx, key);
  });
  return tx;
}