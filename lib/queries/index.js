"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _lodash = _interopRequireDefault(require("lodash.flow"));

var _queryHelper = _interopRequireDefault(require("../queryHelper"));

var pbResponse = _interopRequireWildcard(require("../proto/qry_responses_pb"));

var _util = require("../util");

var _validate = _interopRequireDefault(require("../validate"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var DEFAULT_OPTIONS = {
  privateKey: '',
  creatorAccountId: '',
  queryService: null,
  timeoutLimit: 5000
  /**
   * wrapper function of queries
   * @param {Object} queryOptions
   * @param {Object} query
   * @param {Function} onResponse
   */

};

function sendQuery() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : DEFAULT_OPTIONS,
      privateKey = _ref.privateKey,
      creatorAccountId = _ref.creatorAccountId,
      queryService = _ref.queryService,
      timeoutLimit = _ref.timeoutLimit;

  var query = arguments.length > 1 ? arguments[1] : undefined;
  var onResponse = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function (resolve, reject, responseName, response) {};
  return new Promise(function (resolve, reject) {
    var queryClient = queryService;
    var queryToSend = (0, _lodash["default"])(function (q) {
      return _queryHelper["default"].addMeta(q, {
        creatorAccountId: creatorAccountId
      });
    }, function (q) {
      return _queryHelper["default"].sign(q, privateKey);
    })(query);
    /**
     * grpc-node hangs against unresponsive server, which possibly occur when
     * invalid node IP is set. To avoid this problem, we use timeout timer.
     * c.f. {@link https://github.com/grpc/grpc/issues/13163 Grpc issue 13163}
     */

    var timer = setTimeout(function () {
      queryClient.$channel.close();
      reject(new Error('please check IP address OR your internet connection'));
    }, timeoutLimit);
    queryClient.find(queryToSend, function (err, response) {
      clearTimeout(timer);

      if (err) {
        return reject(err);
      }

      var type = response.getResponseCase();
      var responseName = (0, _util.getProtoEnumName)(pbResponse.QueryResponse.ResponseCase, 'iroha.protocol.QueryResponse', type);
      onResponse(resolve, reject, responseName, response);
    });
  });
}
/**
 * getAccount
 * @param {Object} queryOptions
 * @param {Object} params
 * @property {String} params.accountId
 * @link https://iroha.readthedocs.io/en/latest/api/queries.html#get-account
 */


function getAccount(queryOptions, params) {
  return sendQuery(queryOptions, _queryHelper["default"].addQuery(_queryHelper["default"].emptyQuery(), 'getAccount', (0, _validate["default"])(params, ['accountId'])), function (resolve, reject, responseName, response) {
    if (responseName !== 'ACCOUNT_RESPONSE') {
      var error = JSON.stringify(response.toObject().errorResponse);
      return reject(new Error("Query response error: expected=ACCOUNT_RESPONSE, actual=".concat(responseName, "\nReason: ").concat(error)));
    }

    var account = response.getAccountResponse().getAccount().toObject();
    resolve(account);
  });
}
/**
 * getRawAccount
 * @param {Object} queryOptions
 * @param {Object} params
 * @property {String} params.accountId
 * @link https://iroha.readthedocs.io/en/latest/api/queries.html#get-account
 */


function getRawAccount(queryOptions, params) {
  return sendQuery(queryOptions, _queryHelper["default"].addQuery(_queryHelper["default"].emptyQuery(), 'getAccount', (0, _validate["default"])(params, ['accountId'])), function (resolve, reject, responseName, response) {
    if (responseName !== 'ACCOUNT_RESPONSE') {
      var error = JSON.stringify(response.toObject().errorResponse);
      return reject(new Error("Query response error: expected=ACCOUNT_RESPONSE, actual=".concat(responseName, "\nReason: ").concat(error)));
    }

    var account = response.getAccountResponse();
    resolve(account);
  });
}
/**
 * getSignatories
 * @param {Object} queryOptions
 * @param {Object} params
 * @property {String} params.accountId
 * @link https://iroha.readthedocs.io/en/latest/api/queries.html#get-signatories
 */


function getSignatories(queryOptions, params) {
  return sendQuery(queryOptions, _queryHelper["default"].addQuery(_queryHelper["default"].emptyQuery(), 'getSignatories', (0, _validate["default"])(params, ['accountId'])), function (resolve, reject, responseName, response) {
    if (responseName !== 'SIGNATORIES_RESPONSE') {
      var error = JSON.stringify(response.toObject().errorResponse);
      return reject(new Error("Query response error: expected=SIGNATORIES_RESPONSE, actual=".concat(responseName, "\nReason: ").concat(error)));
    }

    var account = response.getSignatoriesResponse().toObject().keysList;
    resolve(account);
  });
}
/**
 * getTransactions
 * @param {Object} queryOptions
 * @param {Object} params
 * @property {String[]} params.txHashesList
 * @link https://iroha.readthedocs.io/en/latest/api/queries.html#get-transactions
 */


function getTransactions(queryOptions, params) {
  return sendQuery(queryOptions, _queryHelper["default"].addQuery(_queryHelper["default"].emptyQuery(), 'getTransactions', (0, _validate["default"])(params, ['txHashesList'])), function (resolve, reject, responseName, response) {
    if (responseName !== 'TRANSACTIONS_RESPONSE') {
      var error = JSON.stringify(response.toObject().errorResponse);
      return reject(new Error("Query response error: expected=TRANSACTIONS_RESPONSE, actual=".concat(responseName, "\nReason: ").concat(error)));
    }

    var transactions = response.getTransactionsResponse();
    resolve(transactions);
  });
}
/**
 * getPendingTransactions
 * @param {Object} queryOptions
 * @link https://iroha.readthedocs.io/en/latest/api/queries.html#get-pending-transactions
 */


function getPendingTransactions(queryOptions, _ref2) {
  var pageSize = _ref2.pageSize,
      firstTxHash = _ref2.firstTxHash;
  return sendQuery(queryOptions, _queryHelper["default"].addQuery(_queryHelper["default"].emptyQuery(), 'getPendingTransactions', {
    paginationMeta: {
      pageSize: pageSize,
      firstTxHash: firstTxHash
    }
  }), function (resolve, reject, responseName, response) {
    if (responseName !== 'TRANSACTIONS_RESPONSE') {
      var error = JSON.stringify(response.toObject().errorResponse);
      return reject(new Error("Query response error: expected=TRANSACTIONS_RESPONSE, actual=".concat(responseName, "\nReason: ").concat(error)));
    }

    var transactions = response.getTransactionsResponse().toObject().transactionsList;
    resolve(transactions);
  });
}
/**
 * getRawPendingTransactions
 * @param {Object} queryOptions
 * @link https://iroha.readthedocs.io/en/latest/api/queries.html#get-pending-transactions
 */


function getRawPendingTransactions(queryOptions) {
  return sendQuery(queryOptions, _queryHelper["default"].addQuery(_queryHelper["default"].emptyQuery(), 'getPendingTransactions', {}), function (resolve, reject, responseName, response) {
    if (responseName !== 'TRANSACTIONS_RESPONSE') {
      var error = JSON.stringify(response.toObject().errorResponse);
      return reject(new Error("Query response error: expected=TRANSACTIONS_RESPONSE, actual=".concat(responseName, "\nReason: ").concat(error)));
    }

    var transactions = response.getTransactionsResponse();
    resolve(transactions);
  });
}
/**
 * getAccountTransactions
 * @param {Object} queryOptions
 * @param {Object} params
 * @property {String} params.accountId
 * @property {Number} params.pageSize
 * @property {String | undefined} params.firstTxHash
 * @link https://iroha.readthedocs.io/en/latest/api/queries.html#get-account-transactions
 */


function getAccountTransactions(queryOptions, _ref3) {
  var accountId = _ref3.accountId,
      pageSize = _ref3.pageSize,
      firstTxHash = _ref3.firstTxHash;
  return sendQuery(queryOptions, _queryHelper["default"].addQuery(_queryHelper["default"].emptyQuery(), 'getAccountTransactions', {
    accountId: accountId,
    paginationMeta: {
      pageSize: pageSize,
      firstTxHash: firstTxHash
    }
  }), function (resolve, reject, responseName, response) {
    if (responseName !== 'TRANSACTIONS_PAGE_RESPONSE') {
      var error = JSON.stringify(response.toObject().errorResponse);
      return reject(new Error("Query response error: expected=TRANSACTIONS_PAGE_RESPONSE, actual=".concat(responseName, "\nReason: ").concat(error)));
    }

    var transactions = response.getTransactionsPageResponse().toObject();
    resolve(transactions);
  });
}
/**
 * getAccountAssetTransactions
 * @param {Object} queryOptions
 * @param {Object} params
 * @property {String} params.accountId
 * @property {String} params.assetId
 * @property {Number} params.pageSize
 * @property {String | undefined} params.firstTxHash
 * @link https://iroha.readthedocs.io/en/latest/api/queries.html#get-account-asset-transactions
 */


function getAccountAssetTransactions(queryOptions, _ref4) {
  var accountId = _ref4.accountId,
      assetId = _ref4.assetId,
      pageSize = _ref4.pageSize,
      firstTxHash = _ref4.firstTxHash;
  return sendQuery(queryOptions, _queryHelper["default"].addQuery(_queryHelper["default"].emptyQuery(), 'GetAccountAssetTransactions', {
    accountId: accountId,
    assetId: assetId,
    paginationMeta: {
      pageSize: pageSize,
      firstTxHash: firstTxHash
    }
  }), function (resolve, reject, responseName, response) {
    if (responseName !== 'TRANSACTIONS_PAGE_RESPONSE') {
      var error = JSON.stringify(response.toObject().errorResponse);
      return reject(new Error("Query response error: expected=TRANSACTIONS_PAGE_RESPONSE, actual=".concat(responseName, "\nReason: ").concat(error)));
    }

    var transactions = response.getTransactionsPageResponse().toObject();
    resolve(transactions);
  });
}
/**
 * getAccountAssets
 * @param {Object} queryOptions
 * @param {Object} params
 * @property {String} params.accountId
 * @link https://iroha.readthedocs.io/en/latest/api/queries.html#get-account-assets
 */


function getAccountAssets(queryOptions, _ref5) {
  var accountId = _ref5.accountId,
      pageSize = _ref5.pageSize,
      firstAssetId = _ref5.firstAssetId;
  return sendQuery(queryOptions, _queryHelper["default"].addQuery(_queryHelper["default"].emptyQuery(), 'getAccountAssets', {
    accountId: accountId,
    paginationMeta: {
      pageSize: pageSize,
      firstAssetId: firstAssetId
    }
  }), function (resolve, reject, responseName, response) {
    if (responseName !== 'ACCOUNT_ASSETS_RESPONSE') {
      var error = JSON.stringify(response.toObject().errorResponse);
      return reject(new Error("Query response error: expected=ACCOUNT_ASSETS_RESPONSE, actual=".concat(responseName, "\nReason: ").concat(error)));
    }

    var assets = response.getAccountAssetsResponse().toObject().accountAssetsList;
    resolve(assets);
  });
}
/**
 * getAccountDetail
 * @param {Object} queryOptions
 * @param {Object} params
 * @property {String} params.accountId
 * @property {String} params.key
 * @property {String} params.writer
 * @link https://iroha.readthedocs.io/en/latest/api/queries.html#get-account-detail
 */


function getAccountDetail(queryOptions, _ref6) {
  var accountId = _ref6.accountId,
      key = _ref6.key,
      writerId = _ref6.writerId,
      pageSize = _ref6.pageSize,
      paginationWriter = _ref6.paginationWriter,
      paginationKey = _ref6.paginationKey;
  return sendQuery(queryOptions, _queryHelper["default"].addQuery(_queryHelper["default"].emptyQuery(), 'getAccountDetail', {
    accountId: accountId,
    key: key,
    writerId: writerId,
    paginationMeta: {
      pageSize: pageSize,
      firstRecordId: {
        writer: paginationWriter,
        key: paginationKey
      }
    }
  }), function (resolve, reject, responseName, response) {
    if (responseName !== 'ACCOUNT_DETAIL_RESPONSE') {
      var error = JSON.stringify(response.toObject().errorResponse);
      return reject(new Error("Query response error: expected=ACCOUNT_DETAIL_RESPONSE, actual=".concat(responseName, "\nReason: ").concat(error)));
    }

    var transactions = JSON.parse(response.getAccountDetailResponse().toObject().detail);
    resolve(transactions);
  });
}
/**
 * getAssetInfo
 * @param {Object} queryOptions
 * @param {Object} params
 * @property {String} params.assetId
 * @link https://iroha.readthedocs.io/en/latest/api/queries.html#get-asset-info
 */


function getAssetInfo(queryOptions, params) {
  return sendQuery(queryOptions, _queryHelper["default"].addQuery(_queryHelper["default"].emptyQuery(), 'getAssetInfo', (0, _validate["default"])(params, ['assetId'])), function (resolve, reject, responseName, response) {
    if (responseName !== 'ASSET_RESPONSE') {
      var error = JSON.stringify(response.toObject().errorResponse);
      return reject(new Error("Query response error: expected=ASSET_RESPONSE, actual=".concat(responseName, "\nReason: ").concat(error)));
    }

    var info = response.getAssetResponse().toObject().asset;
    resolve(info);
  });
}
/**
 * getPeers
 * @param {Object} queryOptions
 * @param {Object} args
 * @property {Object[]} args.peersList
 * @link https://iroha.readthedocs.io/en/latest/api/queries.html#get-peers
 */


function getPeers(queryOptions, _ref7) {
  var peersList = _ref7.peersList;
  return sendQuery(queryOptions, _queryHelper["default"].addQuery(_queryHelper["default"].emptyQuery(), 'getPeers', {
    peersList: peersList
  }), function (resolve, reject, responseName, response) {
    if (responseName !== 'PEERS_RESPONSE') {
      var error = JSON.stringify(response.toObject().errorResponse);
      return reject(new Error("Query response error: expected=PEERS_RESPONSE, actual=".concat(responseName, "\nReason: ").concat(error)));
    }

    var transactions = response.getPeersResponse();
    resolve(transactions);
  });
}
/**
 * getRoles
 * @param {Object} queryOptions
 * @link https://iroha.readthedocs.io/en/latest/api/queries.html#get-roles
 */


function getRoles(queryOptions) {
  return sendQuery(queryOptions, _queryHelper["default"].addQuery(_queryHelper["default"].emptyQuery(), 'getRoles', {}), function (resolve, reject, responseName, response) {
    if (responseName !== 'ROLES_RESPONSE') {
      var error = JSON.stringify(response.toObject().errorResponse);
      return reject(new Error("Query response error: expected=ROLES_RESPONSE, actual=".concat(responseName, "\nReason: ").concat(error)));
    }

    var roles = response.getRolesResponse().toObject().rolesList;
    resolve(roles);
  });
}
/**
 * getRolePermissions
 * @param {Object} queryOptions
 * @param {Object} params
 * @property {Number} params.roleId
 * @link https://iroha.readthedocs.io/en/latest/api/queries.html#get-role-permissions
 */


function getRolePermissions(queryOptions, params) {
  return sendQuery(queryOptions, _queryHelper["default"].addQuery(_queryHelper["default"].emptyQuery(), 'getRolePermissions', (0, _validate["default"])(params, ['roleId'])), function (resolve, reject, responseName, response) {
    if (responseName !== 'ROLE_PERMISSIONS_RESPONSE') {
      var error = JSON.stringify(response.toObject().errorResponse);
      return reject(new Error("Query response error: expected=ROLE_PERMISSIONS_RESPONSE, actual=".concat(responseName, "\nReason: ").concat(error)));
    }

    var permissions = response.getRolePermissionsResponse().toObject().permissionsList;
    resolve(permissions);
  });
}
/**
 * getBlock
 * @param {Object} queryOptions
 * @param {Object} params
 * @property {Number} params.height
 * @link https://iroha.readthedocs.io/en/latest/api/queries.html#get-block
 */


function getBlock(queryOptions, params) {
  return sendQuery(queryOptions, _queryHelper["default"].addQuery(_queryHelper["default"].emptyQuery(), 'getBlock', (0, _validate["default"])(params, ['height'])), function (resolve, reject, responseName, response) {
    if (responseName !== 'BLOCK_RESPONSE') {
      var error = JSON.stringify(response.toObject().errorResponse);
      return reject(new Error("Query response error: expected=BLOCK_RESPONSE, actual=".concat(responseName, "\nReason: ").concat(error)));
    }

    var block = response.getBlockResponse().toObject().block.blockV1;
    resolve(block);
  });
}
/**
 * fetchCommits
 * @param {Object} queryOptions
 * @param {Function} onBlock
 * @param {Function} onError
 * @link https://iroha.readthedocs.io/en/latest/api/queries.html#fetchcommits
 */


function fetchCommits() {
  var _ref8 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : DEFAULT_OPTIONS,
      privateKey = _ref8.privateKey,
      creatorAccountId = _ref8.creatorAccountId,
      queryService = _ref8.queryService;

  var onBlock = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function (block) {};
  var onError = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function (error) {};

  var query = _queryHelper["default"].emptyBlocksQuery();

  var queryToSend = (0, _lodash["default"])(function (q) {
    return _queryHelper["default"].addMeta(q, {
      creatorAccountId: creatorAccountId
    });
  }, function (q) {
    return _queryHelper["default"].sign(q, privateKey);
  })(query);
  var stream = queryService.fetchCommits(queryToSend);
  stream.on('data', function (response) {
    var type = response.getResponseCase();
    var responseName = (0, _util.getProtoEnumName)(pbResponse.BlockQueryResponse.ResponseCase, 'iroha.protocol.BlockQueryResponse', type);

    if (responseName !== 'BLOCK_RESPONSE') {
      var error = JSON.stringify(response.toObject().blockErrorResponse);
      onError(new Error("Query response error: expected=BLOCK_RESPONSE, actual=".concat(responseName, "\nReason: ").concat(error)));
    } else {
      var block = response.toObject().blockResponse.block;
      onBlock(block);
    }
  });
}

var _default = {
  getAccount: getAccount,
  getRawAccount: getRawAccount,
  getSignatories: getSignatories,
  getTransactions: getTransactions,
  getPendingTransactions: getPendingTransactions,
  getRawPendingTransactions: getRawPendingTransactions,
  getAccountTransactions: getAccountTransactions,
  getAccountAssetTransactions: getAccountAssetTransactions,
  getAccountAssets: getAccountAssets,
  getAccountDetail: getAccountDetail,
  getAssetInfo: getAssetInfo,
  getPeers: getPeers,
  getRoles: getRoles,
  getRolePermissions: getRolePermissions,
  getBlock: getBlock,
  fetchCommits: fetchCommits
};
exports["default"] = _default;