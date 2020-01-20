"use strict";

var jspb = require('google-protobuf');

var goog = jspb;
var global = Function('return this')();
goog.exportSymbol('proto.iroha.protocol.AccountDetailRecordId', null, global);
goog.exportSymbol('proto.iroha.protocol.EngineResponseRecord', null, global);
goog.exportSymbol('proto.iroha.protocol.GrantablePermission', null, global);
goog.exportSymbol('proto.iroha.protocol.Peer', null, global);
goog.exportSymbol('proto.iroha.protocol.RolePermission', null, global);
goog.exportSymbol('proto.iroha.protocol.Signature', null, global);

proto.iroha.protocol.Signature = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};

goog.inherits(proto.iroha.protocol.Signature, jspb.Message);

if (goog.DEBUG && !COMPILED) {
  proto.iroha.protocol.Signature.displayName = 'proto.iroha.protocol.Signature';
}

proto.iroha.protocol.Peer = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.iroha.protocol.Peer.oneofGroups_);
};

goog.inherits(proto.iroha.protocol.Peer, jspb.Message);

if (goog.DEBUG && !COMPILED) {
  proto.iroha.protocol.Peer.displayName = 'proto.iroha.protocol.Peer';
}

proto.iroha.protocol.AccountDetailRecordId = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};

goog.inherits(proto.iroha.protocol.AccountDetailRecordId, jspb.Message);

if (goog.DEBUG && !COMPILED) {
  proto.iroha.protocol.AccountDetailRecordId.displayName = 'proto.iroha.protocol.AccountDetailRecordId';
}

proto.iroha.protocol.EngineResponseRecord = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};

goog.inherits(proto.iroha.protocol.EngineResponseRecord, jspb.Message);

if (goog.DEBUG && !COMPILED) {
  proto.iroha.protocol.EngineResponseRecord.displayName = 'proto.iroha.protocol.EngineResponseRecord';
}

if (jspb.Message.GENERATE_TO_OBJECT) {
  proto.iroha.protocol.Signature.prototype.toObject = function (opt_includeInstance) {
    return proto.iroha.protocol.Signature.toObject(opt_includeInstance, this);
  };

  proto.iroha.protocol.Signature.toObject = function (includeInstance, msg) {
    var f,
        obj = {
      publicKey: jspb.Message.getFieldWithDefault(msg, 1, ""),
      signature: jspb.Message.getFieldWithDefault(msg, 2, "")
    };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }

    return obj;
  };
}

proto.iroha.protocol.Signature.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.iroha.protocol.Signature();
  return proto.iroha.protocol.Signature.deserializeBinaryFromReader(msg, reader);
};

proto.iroha.protocol.Signature.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }

    var field = reader.getFieldNumber();

    switch (field) {
      case 1:
        var value = reader.readString();
        msg.setPublicKey(value);
        break;

      case 2:
        var value = reader.readString();
        msg.setSignature(value);
        break;

      default:
        reader.skipField();
        break;
    }
  }

  return msg;
};

proto.iroha.protocol.Signature.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.iroha.protocol.Signature.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

proto.iroha.protocol.Signature.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getPublicKey();

  if (f.length > 0) {
    writer.writeString(1, f);
  }

  f = message.getSignature();

  if (f.length > 0) {
    writer.writeString(2, f);
  }
};

proto.iroha.protocol.Signature.prototype.getPublicKey = function () {
  return jspb.Message.getFieldWithDefault(this, 1, "");
};

proto.iroha.protocol.Signature.prototype.setPublicKey = function (value) {
  jspb.Message.setProto3StringField(this, 1, value);
};

proto.iroha.protocol.Signature.prototype.getSignature = function () {
  return jspb.Message.getFieldWithDefault(this, 2, "");
};

proto.iroha.protocol.Signature.prototype.setSignature = function (value) {
  jspb.Message.setProto3StringField(this, 2, value);
};

proto.iroha.protocol.Peer.oneofGroups_ = [[3]];
proto.iroha.protocol.Peer.CertificateCase = {
  CERTIFICATE_NOT_SET: 0,
  TLS_CERTIFICATE: 3
};

proto.iroha.protocol.Peer.prototype.getCertificateCase = function () {
  return jspb.Message.computeOneofCase(this, proto.iroha.protocol.Peer.oneofGroups_[0]);
};

if (jspb.Message.GENERATE_TO_OBJECT) {
  proto.iroha.protocol.Peer.prototype.toObject = function (opt_includeInstance) {
    return proto.iroha.protocol.Peer.toObject(opt_includeInstance, this);
  };

  proto.iroha.protocol.Peer.toObject = function (includeInstance, msg) {
    var f,
        obj = {
      address: jspb.Message.getFieldWithDefault(msg, 1, ""),
      peerKey: jspb.Message.getFieldWithDefault(msg, 2, ""),
      tlsCertificate: jspb.Message.getFieldWithDefault(msg, 3, "")
    };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }

    return obj;
  };
}

proto.iroha.protocol.Peer.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.iroha.protocol.Peer();
  return proto.iroha.protocol.Peer.deserializeBinaryFromReader(msg, reader);
};

proto.iroha.protocol.Peer.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }

    var field = reader.getFieldNumber();

    switch (field) {
      case 1:
        var value = reader.readString();
        msg.setAddress(value);
        break;

      case 2:
        var value = reader.readString();
        msg.setPeerKey(value);
        break;

      case 3:
        var value = reader.readString();
        msg.setTlsCertificate(value);
        break;

      default:
        reader.skipField();
        break;
    }
  }

  return msg;
};

proto.iroha.protocol.Peer.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.iroha.protocol.Peer.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

proto.iroha.protocol.Peer.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getAddress();

  if (f.length > 0) {
    writer.writeString(1, f);
  }

  f = message.getPeerKey();

  if (f.length > 0) {
    writer.writeString(2, f);
  }

  f = jspb.Message.getField(message, 3);

  if (f != null) {
    writer.writeString(3, f);
  }
};

proto.iroha.protocol.Peer.prototype.getAddress = function () {
  return jspb.Message.getFieldWithDefault(this, 1, "");
};

proto.iroha.protocol.Peer.prototype.setAddress = function (value) {
  jspb.Message.setProto3StringField(this, 1, value);
};

proto.iroha.protocol.Peer.prototype.getPeerKey = function () {
  return jspb.Message.getFieldWithDefault(this, 2, "");
};

proto.iroha.protocol.Peer.prototype.setPeerKey = function (value) {
  jspb.Message.setProto3StringField(this, 2, value);
};

proto.iroha.protocol.Peer.prototype.getTlsCertificate = function () {
  return jspb.Message.getFieldWithDefault(this, 3, "");
};

proto.iroha.protocol.Peer.prototype.setTlsCertificate = function (value) {
  jspb.Message.setOneofField(this, 3, proto.iroha.protocol.Peer.oneofGroups_[0], value);
};

proto.iroha.protocol.Peer.prototype.clearTlsCertificate = function () {
  jspb.Message.setOneofField(this, 3, proto.iroha.protocol.Peer.oneofGroups_[0], undefined);
};

proto.iroha.protocol.Peer.prototype.hasTlsCertificate = function () {
  return jspb.Message.getField(this, 3) != null;
};

if (jspb.Message.GENERATE_TO_OBJECT) {
  proto.iroha.protocol.AccountDetailRecordId.prototype.toObject = function (opt_includeInstance) {
    return proto.iroha.protocol.AccountDetailRecordId.toObject(opt_includeInstance, this);
  };

  proto.iroha.protocol.AccountDetailRecordId.toObject = function (includeInstance, msg) {
    var f,
        obj = {
      writer: jspb.Message.getFieldWithDefault(msg, 1, ""),
      key: jspb.Message.getFieldWithDefault(msg, 2, "")
    };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }

    return obj;
  };
}

proto.iroha.protocol.AccountDetailRecordId.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.iroha.protocol.AccountDetailRecordId();
  return proto.iroha.protocol.AccountDetailRecordId.deserializeBinaryFromReader(msg, reader);
};

proto.iroha.protocol.AccountDetailRecordId.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }

    var field = reader.getFieldNumber();

    switch (field) {
      case 1:
        var value = reader.readString();
        msg.setWriter(value);
        break;

      case 2:
        var value = reader.readString();
        msg.setKey(value);
        break;

      default:
        reader.skipField();
        break;
    }
  }

  return msg;
};

proto.iroha.protocol.AccountDetailRecordId.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.iroha.protocol.AccountDetailRecordId.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

proto.iroha.protocol.AccountDetailRecordId.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getWriter();

  if (f.length > 0) {
    writer.writeString(1, f);
  }

  f = message.getKey();

  if (f.length > 0) {
    writer.writeString(2, f);
  }
};

proto.iroha.protocol.AccountDetailRecordId.prototype.getWriter = function () {
  return jspb.Message.getFieldWithDefault(this, 1, "");
};

proto.iroha.protocol.AccountDetailRecordId.prototype.setWriter = function (value) {
  jspb.Message.setProto3StringField(this, 1, value);
};

proto.iroha.protocol.AccountDetailRecordId.prototype.getKey = function () {
  return jspb.Message.getFieldWithDefault(this, 2, "");
};

proto.iroha.protocol.AccountDetailRecordId.prototype.setKey = function (value) {
  jspb.Message.setProto3StringField(this, 2, value);
};

if (jspb.Message.GENERATE_TO_OBJECT) {
  proto.iroha.protocol.EngineResponseRecord.prototype.toObject = function (opt_includeInstance) {
    return proto.iroha.protocol.EngineResponseRecord.toObject(opt_includeInstance, this);
  };

  proto.iroha.protocol.EngineResponseRecord.toObject = function (includeInstance, msg) {
    var f,
        obj = {
      commandIndex: jspb.Message.getFieldWithDefault(msg, 1, 0),
      response: jspb.Message.getFieldWithDefault(msg, 2, "")
    };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }

    return obj;
  };
}

proto.iroha.protocol.EngineResponseRecord.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.iroha.protocol.EngineResponseRecord();
  return proto.iroha.protocol.EngineResponseRecord.deserializeBinaryFromReader(msg, reader);
};

proto.iroha.protocol.EngineResponseRecord.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }

    var field = reader.getFieldNumber();

    switch (field) {
      case 1:
        var value = reader.readUint64();
        msg.setCommandIndex(value);
        break;

      case 2:
        var value = reader.readString();
        msg.setResponse(value);
        break;

      default:
        reader.skipField();
        break;
    }
  }

  return msg;
};

proto.iroha.protocol.EngineResponseRecord.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.iroha.protocol.EngineResponseRecord.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

proto.iroha.protocol.EngineResponseRecord.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getCommandIndex();

  if (f !== 0) {
    writer.writeUint64(1, f);
  }

  f = message.getResponse();

  if (f.length > 0) {
    writer.writeString(2, f);
  }
};

proto.iroha.protocol.EngineResponseRecord.prototype.getCommandIndex = function () {
  return jspb.Message.getFieldWithDefault(this, 1, 0);
};

proto.iroha.protocol.EngineResponseRecord.prototype.setCommandIndex = function (value) {
  jspb.Message.setProto3IntField(this, 1, value);
};

proto.iroha.protocol.EngineResponseRecord.prototype.getResponse = function () {
  return jspb.Message.getFieldWithDefault(this, 2, "");
};

proto.iroha.protocol.EngineResponseRecord.prototype.setResponse = function (value) {
  jspb.Message.setProto3StringField(this, 2, value);
};

proto.iroha.protocol.RolePermission = {
  CAN_APPEND_ROLE: 0,
  CAN_CREATE_ROLE: 1,
  CAN_DETACH_ROLE: 2,
  CAN_ADD_ASSET_QTY: 3,
  CAN_SUBTRACT_ASSET_QTY: 4,
  CAN_ADD_PEER: 5,
  CAN_REMOVE_PEER: 46,
  CAN_ADD_SIGNATORY: 6,
  CAN_REMOVE_SIGNATORY: 7,
  CAN_SET_QUORUM: 8,
  CAN_CREATE_ACCOUNT: 9,
  CAN_SET_DETAIL: 10,
  CAN_CREATE_ASSET: 11,
  CAN_TRANSFER: 12,
  CAN_RECEIVE: 13,
  CAN_CREATE_DOMAIN: 14,
  CAN_ADD_DOMAIN_ASSET_QTY: 43,
  CAN_SUBTRACT_DOMAIN_ASSET_QTY: 44,
  CAN_READ_ASSETS: 15,
  CAN_GET_ROLES: 16,
  CAN_GET_MY_ACCOUNT: 17,
  CAN_GET_ALL_ACCOUNTS: 18,
  CAN_GET_DOMAIN_ACCOUNTS: 19,
  CAN_GET_MY_SIGNATORIES: 20,
  CAN_GET_ALL_SIGNATORIES: 21,
  CAN_GET_DOMAIN_SIGNATORIES: 22,
  CAN_GET_MY_ACC_AST: 23,
  CAN_GET_ALL_ACC_AST: 24,
  CAN_GET_DOMAIN_ACC_AST: 25,
  CAN_GET_MY_ACC_DETAIL: 26,
  CAN_GET_ALL_ACC_DETAIL: 27,
  CAN_GET_DOMAIN_ACC_DETAIL: 28,
  CAN_GET_MY_ACC_TXS: 29,
  CAN_GET_ALL_ACC_TXS: 30,
  CAN_GET_DOMAIN_ACC_TXS: 31,
  CAN_GET_MY_ACC_AST_TXS: 32,
  CAN_GET_ALL_ACC_AST_TXS: 33,
  CAN_GET_DOMAIN_ACC_AST_TXS: 34,
  CAN_GET_MY_TXS: 35,
  CAN_GET_ALL_TXS: 36,
  CAN_GET_BLOCKS: 42,
  CAN_GET_PEERS: 45,
  CAN_GRANT_CAN_SET_MY_QUORUM: 37,
  CAN_GRANT_CAN_ADD_MY_SIGNATORY: 38,
  CAN_GRANT_CAN_REMOVE_MY_SIGNATORY: 39,
  CAN_GRANT_CAN_TRANSFER_MY_ASSETS: 40,
  CAN_GRANT_CAN_SET_MY_ACCOUNT_DETAIL: 41,
  ROOT: 47
};
proto.iroha.protocol.GrantablePermission = {
  CAN_ADD_MY_SIGNATORY: 0,
  CAN_REMOVE_MY_SIGNATORY: 1,
  CAN_SET_MY_QUORUM: 2,
  CAN_SET_MY_ACCOUNT_DETAIL: 3,
  CAN_TRANSFER_MY_ASSETS: 4
};
goog.object.extend(exports, proto.iroha.protocol);