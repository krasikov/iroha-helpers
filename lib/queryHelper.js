"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _buffer = require("buffer");

var _ed = require("ed25519.js");

var _jsSha = require("js-sha3");

var _lodash = _interopRequireDefault(require("lodash.clonedeep"));

var _primitive_pb = require("./proto/primitive_pb");

var Queries = _interopRequireWildcard(require("./proto/queries_pb"));

var _util = require("./util.js");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var emptyQuery = function emptyQuery() {
  return new Queries.Query();
};

var emptyBlocksQuery = function emptyBlocksQuery() {
  return new Queries.BlocksQuery();
};
/**
 * Returns payload from the query or a new one
 * @param {Object} query
 */


var getOrCreatePayload = function getOrCreatePayload(query) {
  return query.hasPayload() ? (0, _lodash["default"])(query.getPayload()) : new Queries.Query.Payload();
};
/**
 * Returns new query with added command.
 * @param {Object} query base query
 * @param {stringing} queryName name of a query. For reference, visit http://iroha.readthedocs.io/en/latest/api/queries.html
 * @param {Object} params query parameters. For reference, visit http://iroha.readthedocs.io/en/latest/api/queries.html
 */


var addQuery = function addQuery(query, queryName, params) {
  var payloadQuery = new Queries[(0, _util.capitalize)(queryName)]();

  for (var _i = 0, _Object$entries = Object.entries(params); _i < _Object$entries.length; _i++) {
    var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
        key = _Object$entries$_i[0],
        value = _Object$entries$_i[1];

    var capitalizedKeyName = "set".concat((0, _util.capitalize)(key));

    if (capitalizedKeyName === 'setPaginationMeta') {
      var paginationMeta = new Queries.TxPaginationMeta();
      paginationMeta.setPageSize(value.pageSize);
      paginationMeta.setFirstTxHash(value.firstTxHash);
      payloadQuery[capitalizedKeyName](paginationMeta);
    } else {
      payloadQuery[capitalizedKeyName](value);
    }
  }

  var payload = getOrCreatePayload(query);
  payload['set' + (0, _util.capitalize)(queryName)](payloadQuery);
  var queryWithQuery = (0, _lodash["default"])(query);
  queryWithQuery.setPayload(payload);
  return queryWithQuery;
};
/**
 * Returns new query with meta information
 * @param {Object} query base query
 * @param {Object} meta - meta info
 * @param {stringing} meta.creatorAccountId accountID of query's creator
 * @param {Number} meta.createdTime time of query creation
 * @param {Number} meta.queryCounter query counter (will be removed soon)
 */


var addMeta = function addMeta(query, _ref) {
  var creatorAccountId = _ref.creatorAccountId,
      _ref$createdTime = _ref.createdTime,
      createdTime = _ref$createdTime === void 0 ? Date.now() : _ref$createdTime,
      _ref$queryCounter = _ref.queryCounter,
      queryCounter = _ref$queryCounter === void 0 ? 1 : _ref$queryCounter;
  var meta = new Queries.QueryPayloadMeta();
  meta.setCreatorAccountId(creatorAccountId);
  meta.setCreatedTime(createdTime);
  meta.setQueryCounter(queryCounter);
  var queryWithMeta = (0, _lodash["default"])(query);

  if (query instanceof Queries.Query) {
    var payload = getOrCreatePayload(query);
    payload.setMeta(meta);
    queryWithMeta.setPayload(payload);
  } else if (query instanceof Queries.BlocksQuery) {
    queryWithMeta.setMeta(meta);
  } else {
    throw new Error('Unknown query type');
  }

  return queryWithMeta;
};
/**
 * Returns new signed query
 * @param {Object} query base query
 * @param {stringing} privateKeyHex - private key of query's creator in hex.
 */


var sign = function sign(query, privateKeyHex) {
  var privateKey = _buffer.Buffer.from(privateKeyHex, 'hex');

  var publicKey = (0, _ed.derivePublicKey)(privateKey);
  var payload = null;

  if (query instanceof Queries.Query) {
    payload = query.getPayload();
  } else if (query instanceof Queries.BlocksQuery) {
    payload = query.getMeta();
  } else {
    throw new Error('Unknown query type');
  }

  var payloadHash = _buffer.Buffer.from(_jsSha.sha3_256.array(payload.serializeBinary()));

  var signatory = (0, _ed.sign)(payloadHash, publicKey, privateKey);
  var s = new _primitive_pb.Signature();
  s.setPublicKey(publicKey.toString('hex'));
  s.setSignature(signatory.toString('hex'));
  var signedQueryWithSignature = (0, _lodash["default"])(query);
  signedQueryWithSignature.setSignature(s);
  return signedQueryWithSignature;
};

var _default = {
  sign: sign,
  addMeta: addMeta,
  addQuery: addQuery,
  emptyQuery: emptyQuery,
  emptyBlocksQuery: emptyBlocksQuery
};
exports["default"] = _default;