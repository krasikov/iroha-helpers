"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _txHelper = _interopRequireDefault(require("../txHelper"));

var _util = require("../util");

var _validate = _interopRequireDefault(require("../validate"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var DEFAULT_OPTIONS = {
  privateKeys: [''],
  creatorAccountId: '',
  quorum: 1,
  commandService: null,
  timeoutLimit: 5000
  /**
   * wrapper function of queries
   * @param {Object} commandOptions
   * @param {Object} transactions
   */

};

function command() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : DEFAULT_OPTIONS,
      privateKeys = _ref.privateKeys,
      creatorAccountId = _ref.creatorAccountId,
      quorum = _ref.quorum,
      commandService = _ref.commandService,
      timeoutLimit = _ref.timeoutLimit;

  var tx = arguments.length > 1 ? arguments[1] : undefined;

  var txToSend = _txHelper["default"].addMeta(tx, {
    creatorAccountId: creatorAccountId,
    quorum: quorum
  });

  txToSend = (0, _util.signWithArrayOfKeys)(txToSend, privateKeys);
  var txClient = commandService;
  return (0, _util.sendTransactions)([txToSend], txClient, timeoutLimit);
}
/**
 * addAssetQuantity
 * @param {Object} commandOptions
 * @param {Object} params
 * @property {String} params.assetId
 * @property {Number} params.amount
 * @link https://iroha.readthedocs.io/en/latest/api/commands.html#add-asset-quantity
 */


function addAssetQuantity(commandOptions, params) {
  return command(commandOptions, _txHelper["default"].addCommand(_txHelper["default"].emptyTransaction(), 'addAssetQuantity', (0, _validate["default"])(params, ['assetId', 'amount'])));
}
/**
 * addPeer
 * @param {Object} commandOptions
 * @param {Object} params
 * @property {String} params.address
 * @property {String} params.peerKey
 * @link https://iroha.readthedocs.io/en/latest/api/commands.html#add-peer
 */


function addPeer(commandOptions, params) {
  return command(commandOptions, _txHelper["default"].addCommand(_txHelper["default"].emptyTransaction(), 'addPeer', {
    peer: (0, _validate["default"])(params, ['address', 'peerKey'])
  }));
}
/**
 * addSignatory
 * @param {Object} commandOptions
 * @param {Object} params
 * @property {String} params.accountId
 * @property {String} params.publicKey
 * @link https://iroha.readthedocs.io/en/latest/api/commands.html#add-signatory
 */


function addSignatory(commandOptions, params) {
  return command(commandOptions, _txHelper["default"].addCommand(_txHelper["default"].emptyTransaction(), 'addSignatory', (0, _validate["default"])(params, ['accountId', 'publicKey'])));
}
/**
 * appendRole
 * @param {Object} commandOptions
 * @param {Object} params
 * @property {String} params.accountId
 * @property {String} params.roleName
 * @link https://iroha.readthedocs.io/en/latest/api/commands.html#append-role
 */


function appendRole(commandOptions, params) {
  return command(commandOptions, _txHelper["default"].addCommand(_txHelper["default"].emptyTransaction(), 'appendRole', (0, _validate["default"])(params, ['accountId', 'roleName'])));
}
/**
 * compareAndSetAccountDetail
 * @param {Object} commandOptions
 * @param {Object} args
 * @property {String} args.accountId
 * @property {String} args.key
 * @property {String} args.value
 * @property {String} args.oldValue
 * @link https://iroha.readthedocs.io/en/latest/api/commands.html#compare-and-set-account-detail
 */


function compareAndSetAccountDetail(commandOptions, _ref2) {
  var accountId = _ref2.accountId,
      key = _ref2.key,
      value = _ref2.value,
      oldValue = _ref2.oldValue;
  return command(commandOptions, _txHelper["default"].addCommand(_txHelper["default"].emptyTransaction(), 'compareAndSetAccountDetail', {
    accountId: accountId,
    key: key,
    value: value,
    oldValue: oldValue
  }));
}
/**
 * createAccount
 * @param {Object} commandOptions
 * @param {Object} params
 * @property {String} params.accountName
 * @property {String} params.domainId
 * @property {String} params.publicKey
 * @link https://iroha.readthedocs.io/en/latest/api/commands.html#create-account
 */


function createAccount(commandOptions, params) {
  return command(commandOptions, _txHelper["default"].addCommand(_txHelper["default"].emptyTransaction(), 'createAccount', (0, _validate["default"])(params, ['accountName', 'domainId', 'publicKey'])));
}
/**
 * createAsset
 * @param {Object} commandOptions
 * @param {Object} params
 * @property {String} params.assetName
 * @property {String} params.domainId
 * @property {Number} params.precision
 * @link https://iroha.readthedocs.io/en/latest/api/commands.html#create-asset
 */


function createAsset(commandOptions, params) {
  return command(commandOptions, _txHelper["default"].addCommand(_txHelper["default"].emptyTransaction(), 'createAsset', (0, _validate["default"])(params, ['assetName', 'domainId', 'precision'])));
}
/**
 * createDomain
 * @param {Object} commandOptions
 * @param {Object} params
 * @property {String} params.domainId
 * @property {String} params.defaultRole
 * @link https://iroha.readthedocs.io/en/latest/api/commands.html#create-domain
 */


function createDomain(commandOptions, params) {
  return command(commandOptions, _txHelper["default"].addCommand(_txHelper["default"].emptyTransaction(), 'createDomain', (0, _validate["default"])(params, ['domainId', 'defaultRole'])));
}
/**
 * createRole
 * @param {Object} commandOptions
 * @param {Object} params
 * @property {String} params.roleName
 * @property {Number[]} params.permissionsList
 * @link https://iroha.readthedocs.io/en/latest/api/commands.html#create-role
 */


function createRole(commandOptions, params) {
  return command(commandOptions, _txHelper["default"].addCommand(_txHelper["default"].emptyTransaction(), 'createRole', (0, _validate["default"])(params, ['roleName', 'permissionsList'])));
}
/**
 * detachRole
 * @param {Object} commandOptions
 * @param {Object} params
 * @property {String} params.accountId
 * @property {String} params.roleName
 * @link https://iroha.readthedocs.io/en/latest/api/commands.html#detach-role
 */


function detachRole(commandOptions, params) {
  return command(commandOptions, _txHelper["default"].addCommand(_txHelper["default"].emptyTransaction(), 'detachRole', (0, _validate["default"])(params, ['accountId', 'roleName'])));
}
/**
 * grantPermission
 * @param {Object} commandOptions
 * @param {Object} params
 * @property {String} params.accountId
 * @property {String} params.permission
 * @link https://iroha.readthedocs.io/en/latest/api/commands.html#grant-permission
 */


function grantPermission(commandOptions, params) {
  return command(commandOptions, _txHelper["default"].addCommand(_txHelper["default"].emptyTransaction(), 'grantPermission', (0, _validate["default"])(params, ['accountId', 'permission'])));
}
/**
 * removePeer
 * @param {Object} commandOptions
 * @param {Object} args
 * @property {String} args.publicKey
 * @link https://iroha.readthedocs.io/en/latest/api/commands.html#remove-peer
 */


function removePeer(commandOptions, _ref3) {
  var publicKey = _ref3.publicKey;
  return command(commandOptions, _txHelper["default"].addCommand(_txHelper["default"].emptyTransaction(), 'removePeer', {
    publicKey: publicKey
  }));
}
/**
 * removeSignatory
 * @param {Object} commandOptions
 * @param {Object} params
 * @property {String} params.accountId
 * @property {String} params.publicKey
 * @link https://iroha.readthedocs.io/en/latest/api/commands.html#remove-signatory
 */


function removeSignatory(commandOptions, params) {
  return command(commandOptions, _txHelper["default"].addCommand(_txHelper["default"].emptyTransaction(), 'removeSignatory', (0, _validate["default"])(params, ['accountId', 'publicKey'])));
}
/**
 * revokePermission
 * @param {Object} commandOptions
 * @param {Object} params
 * @property {String} params.accountId
 * @property {String} params.permission
 * @link https://iroha.readthedocs.io/en/latest/api/commands.html#revoke-permission
 */


function revokePermission(commandOptions, params) {
  return command(commandOptions, _txHelper["default"].addCommand(_txHelper["default"].emptyTransaction(), 'revokePermission', (0, _validate["default"])(params, ['accountId', 'permission'])));
}
/**
 * setAccountDetail
 * @param {Object} commandOptions
 * @param {Object} params
 * @property {String} params.accountId
 * @property {String} params.key
 * @property {String} params.value
 * @link https://iroha.readthedocs.io/en/latest/api/commands.html#set-account-detail
 */


function setAccountDetail(commandOptions, params) {
  return command(commandOptions, _txHelper["default"].addCommand(_txHelper["default"].emptyTransaction(), 'setAccountDetail', (0, _validate["default"])(params, ['accountId', 'key', 'value'])));
}
/**
 * setAccountQuorum
 * @param {Object} commandOptions
 * @param {Object} params
 * @property {String} params.accountId
 * @property {Number} params.quorum
 * @link https://iroha.readthedocs.io/en/latest/api/commands.html#set-account-quorum
 */


function setAccountQuorum(commandOptions, params) {
  return command(commandOptions, _txHelper["default"].addCommand(_txHelper["default"].emptyTransaction(), 'setAccountQuorum', (0, _validate["default"])(params, ['accountId', 'quorum'])));
}
/**
 * substractAssetQuantity
 * @param {Object} commandOptions
 * @param {Object} params
 * @property {String} params.assetId
 * @property {Number} params.amount
 * @link https://iroha.readthedocs.io/en/latest/api/commands.html#subtract-asset-quantity
 */


function substractAssetQuantity(commandOptions, params) {
  return command(commandOptions, _txHelper["default"].addCommand(_txHelper["default"].emptyTransaction(), 'substractAssetQuantity', (0, _validate["default"])(params, ['assetId', 'amount'])));
}
/**
 * transferAsset
 * @param {Object} commandOptions
 * @param {Object} params
 * @property {String} params.srcAccountId
 * @property {String} params.destAccountId
 * @property {String} params.assetId
 * @property {String} params.description
 * @property {Number} params.amount
 * @link https://iroha.readthedocs.io/en/latest/api/commands.html#transfer-asset
 */


function transferAsset(commandOptions, params) {
  return command(commandOptions, _txHelper["default"].addCommand(_txHelper["default"].emptyTransaction(), 'transferAsset', (0, _validate["default"])(params, ['srcAccountId', 'destAccountId', 'assetId', 'description', 'amount'])));
}

var _default = {
  addAssetQuantity: addAssetQuantity,
  addPeer: addPeer,
  addSignatory: addSignatory,
  appendRole: appendRole,
  compareAndSetAccountDetail: compareAndSetAccountDetail,
  createAccount: createAccount,
  createAsset: createAsset,
  createDomain: createDomain,
  createRole: createRole,
  detachRole: detachRole,
  grantPermission: grantPermission,
  removePeer: removePeer,
  removeSignatory: removeSignatory,
  revokePermission: revokePermission,
  setAccountDetail: setAccountDetail,
  setAccountQuorum: setAccountQuorum,
  substractAssetQuantity: substractAssetQuantity,
  transferAsset: transferAsset
};
exports["default"] = _default;