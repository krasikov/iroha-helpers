/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var primitive_pb = require('./primitive_pb.js');
goog.object.extend(proto, primitive_pb);
var transaction_pb = require('./transaction_pb.js');
goog.object.extend(proto, transaction_pb);
goog.exportSymbol('proto.iroha.protocol.Block', null, global);
goog.exportSymbol('proto.iroha.protocol.Block_v1', null, global);
goog.exportSymbol('proto.iroha.protocol.Block_v1.Payload', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.iroha.protocol.Block_v1 = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.iroha.protocol.Block_v1.repeatedFields_, null);
};
goog.inherits(proto.iroha.protocol.Block_v1, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.iroha.protocol.Block_v1.displayName = 'proto.iroha.protocol.Block_v1';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.iroha.protocol.Block_v1.Payload = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.iroha.protocol.Block_v1.Payload.repeatedFields_, null);
};
goog.inherits(proto.iroha.protocol.Block_v1.Payload, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.iroha.protocol.Block_v1.Payload.displayName = 'proto.iroha.protocol.Block_v1.Payload';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.iroha.protocol.Block = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.iroha.protocol.Block.oneofGroups_);
};
goog.inherits(proto.iroha.protocol.Block, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.iroha.protocol.Block.displayName = 'proto.iroha.protocol.Block';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.iroha.protocol.Block_v1.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.iroha.protocol.Block_v1.prototype.toObject = function(opt_includeInstance) {
  return proto.iroha.protocol.Block_v1.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.iroha.protocol.Block_v1} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.iroha.protocol.Block_v1.toObject = function(includeInstance, msg) {
  var f, obj = {
    payload: (f = msg.getPayload()) && proto.iroha.protocol.Block_v1.Payload.toObject(includeInstance, f),
    signaturesList: jspb.Message.toObjectList(msg.getSignaturesList(),
    primitive_pb.Signature.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.iroha.protocol.Block_v1}
 */
proto.iroha.protocol.Block_v1.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.iroha.protocol.Block_v1;
  return proto.iroha.protocol.Block_v1.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.iroha.protocol.Block_v1} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.iroha.protocol.Block_v1}
 */
proto.iroha.protocol.Block_v1.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.iroha.protocol.Block_v1.Payload;
      reader.readMessage(value,proto.iroha.protocol.Block_v1.Payload.deserializeBinaryFromReader);
      msg.setPayload(value);
      break;
    case 2:
      var value = new primitive_pb.Signature;
      reader.readMessage(value,primitive_pb.Signature.deserializeBinaryFromReader);
      msg.addSignatures(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.iroha.protocol.Block_v1.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.iroha.protocol.Block_v1.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.iroha.protocol.Block_v1} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.iroha.protocol.Block_v1.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPayload();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.iroha.protocol.Block_v1.Payload.serializeBinaryToWriter
    );
  }
  f = message.getSignaturesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      primitive_pb.Signature.serializeBinaryToWriter
    );
  }
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.iroha.protocol.Block_v1.Payload.repeatedFields_ = [1,6];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.iroha.protocol.Block_v1.Payload.prototype.toObject = function(opt_includeInstance) {
  return proto.iroha.protocol.Block_v1.Payload.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.iroha.protocol.Block_v1.Payload} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.iroha.protocol.Block_v1.Payload.toObject = function(includeInstance, msg) {
  var f, obj = {
    transactionsList: jspb.Message.toObjectList(msg.getTransactionsList(),
    transaction_pb.Transaction.toObject, includeInstance),
    txNumber: jspb.Message.getFieldWithDefault(msg, 2, 0),
    height: jspb.Message.getFieldWithDefault(msg, 3, 0),
    prevBlockHash: jspb.Message.getFieldWithDefault(msg, 4, ""),
    createdTime: jspb.Message.getFieldWithDefault(msg, 5, 0),
    rejectedTransactionsHashesList: (f = jspb.Message.getRepeatedField(msg, 6)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.iroha.protocol.Block_v1.Payload}
 */
proto.iroha.protocol.Block_v1.Payload.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.iroha.protocol.Block_v1.Payload;
  return proto.iroha.protocol.Block_v1.Payload.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.iroha.protocol.Block_v1.Payload} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.iroha.protocol.Block_v1.Payload}
 */
proto.iroha.protocol.Block_v1.Payload.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new transaction_pb.Transaction;
      reader.readMessage(value,transaction_pb.Transaction.deserializeBinaryFromReader);
      msg.addTransactions(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setTxNumber(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setHeight(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setPrevBlockHash(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setCreatedTime(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.addRejectedTransactionsHashes(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.iroha.protocol.Block_v1.Payload.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.iroha.protocol.Block_v1.Payload.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.iroha.protocol.Block_v1.Payload} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.iroha.protocol.Block_v1.Payload.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTransactionsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      transaction_pb.Transaction.serializeBinaryToWriter
    );
  }
  f = message.getTxNumber();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
  f = message.getHeight();
  if (f !== 0) {
    writer.writeUint64(
      3,
      f
    );
  }
  f = message.getPrevBlockHash();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getCreatedTime();
  if (f !== 0) {
    writer.writeUint64(
      5,
      f
    );
  }
  f = message.getRejectedTransactionsHashesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      6,
      f
    );
  }
};


/**
 * repeated Transaction transactions = 1;
 * @return {!Array<!proto.iroha.protocol.Transaction>}
 */
proto.iroha.protocol.Block_v1.Payload.prototype.getTransactionsList = function() {
  return /** @type{!Array<!proto.iroha.protocol.Transaction>} */ (
    jspb.Message.getRepeatedWrapperField(this, transaction_pb.Transaction, 1));
};


/** @param {!Array<!proto.iroha.protocol.Transaction>} value */
proto.iroha.protocol.Block_v1.Payload.prototype.setTransactionsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.iroha.protocol.Transaction=} opt_value
 * @param {number=} opt_index
 * @return {!proto.iroha.protocol.Transaction}
 */
proto.iroha.protocol.Block_v1.Payload.prototype.addTransactions = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.iroha.protocol.Transaction, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.iroha.protocol.Block_v1.Payload.prototype.clearTransactionsList = function() {
  this.setTransactionsList([]);
};


/**
 * optional uint32 tx_number = 2;
 * @return {number}
 */
proto.iroha.protocol.Block_v1.Payload.prototype.getTxNumber = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.iroha.protocol.Block_v1.Payload.prototype.setTxNumber = function(value) {
  jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional uint64 height = 3;
 * @return {number}
 */
proto.iroha.protocol.Block_v1.Payload.prototype.getHeight = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.iroha.protocol.Block_v1.Payload.prototype.setHeight = function(value) {
  jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string prev_block_hash = 4;
 * @return {string}
 */
proto.iroha.protocol.Block_v1.Payload.prototype.getPrevBlockHash = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/** @param {string} value */
proto.iroha.protocol.Block_v1.Payload.prototype.setPrevBlockHash = function(value) {
  jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional uint64 created_time = 5;
 * @return {number}
 */
proto.iroha.protocol.Block_v1.Payload.prototype.getCreatedTime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/** @param {number} value */
proto.iroha.protocol.Block_v1.Payload.prototype.setCreatedTime = function(value) {
  jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * repeated string rejected_transactions_hashes = 6;
 * @return {!Array<string>}
 */
proto.iroha.protocol.Block_v1.Payload.prototype.getRejectedTransactionsHashesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 6));
};


/** @param {!Array<string>} value */
proto.iroha.protocol.Block_v1.Payload.prototype.setRejectedTransactionsHashesList = function(value) {
  jspb.Message.setField(this, 6, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 */
proto.iroha.protocol.Block_v1.Payload.prototype.addRejectedTransactionsHashes = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 6, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.iroha.protocol.Block_v1.Payload.prototype.clearRejectedTransactionsHashesList = function() {
  this.setRejectedTransactionsHashesList([]);
};


/**
 * optional Payload payload = 1;
 * @return {?proto.iroha.protocol.Block_v1.Payload}
 */
proto.iroha.protocol.Block_v1.prototype.getPayload = function() {
  return /** @type{?proto.iroha.protocol.Block_v1.Payload} */ (
    jspb.Message.getWrapperField(this, proto.iroha.protocol.Block_v1.Payload, 1));
};


/** @param {?proto.iroha.protocol.Block_v1.Payload|undefined} value */
proto.iroha.protocol.Block_v1.prototype.setPayload = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.iroha.protocol.Block_v1.prototype.clearPayload = function() {
  this.setPayload(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.iroha.protocol.Block_v1.prototype.hasPayload = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated Signature signatures = 2;
 * @return {!Array<!proto.iroha.protocol.Signature>}
 */
proto.iroha.protocol.Block_v1.prototype.getSignaturesList = function() {
  return /** @type{!Array<!proto.iroha.protocol.Signature>} */ (
    jspb.Message.getRepeatedWrapperField(this, primitive_pb.Signature, 2));
};


/** @param {!Array<!proto.iroha.protocol.Signature>} value */
proto.iroha.protocol.Block_v1.prototype.setSignaturesList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.iroha.protocol.Signature=} opt_value
 * @param {number=} opt_index
 * @return {!proto.iroha.protocol.Signature}
 */
proto.iroha.protocol.Block_v1.prototype.addSignatures = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.iroha.protocol.Signature, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.iroha.protocol.Block_v1.prototype.clearSignaturesList = function() {
  this.setSignaturesList([]);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.iroha.protocol.Block.oneofGroups_ = [[1]];

/**
 * @enum {number}
 */
proto.iroha.protocol.Block.BlockVersionCase = {
  BLOCK_VERSION_NOT_SET: 0,
  BLOCK_V1: 1
};

/**
 * @return {proto.iroha.protocol.Block.BlockVersionCase}
 */
proto.iroha.protocol.Block.prototype.getBlockVersionCase = function() {
  return /** @type {proto.iroha.protocol.Block.BlockVersionCase} */(jspb.Message.computeOneofCase(this, proto.iroha.protocol.Block.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.iroha.protocol.Block.prototype.toObject = function(opt_includeInstance) {
  return proto.iroha.protocol.Block.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.iroha.protocol.Block} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.iroha.protocol.Block.toObject = function(includeInstance, msg) {
  var f, obj = {
    blockV1: (f = msg.getBlockV1()) && proto.iroha.protocol.Block_v1.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.iroha.protocol.Block}
 */
proto.iroha.protocol.Block.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.iroha.protocol.Block;
  return proto.iroha.protocol.Block.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.iroha.protocol.Block} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.iroha.protocol.Block}
 */
proto.iroha.protocol.Block.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.iroha.protocol.Block_v1;
      reader.readMessage(value,proto.iroha.protocol.Block_v1.deserializeBinaryFromReader);
      msg.setBlockV1(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.iroha.protocol.Block.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.iroha.protocol.Block.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.iroha.protocol.Block} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.iroha.protocol.Block.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBlockV1();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.iroha.protocol.Block_v1.serializeBinaryToWriter
    );
  }
};


/**
 * optional Block_v1 block_v1 = 1;
 * @return {?proto.iroha.protocol.Block_v1}
 */
proto.iroha.protocol.Block.prototype.getBlockV1 = function() {
  return /** @type{?proto.iroha.protocol.Block_v1} */ (
    jspb.Message.getWrapperField(this, proto.iroha.protocol.Block_v1, 1));
};


/** @param {?proto.iroha.protocol.Block_v1|undefined} value */
proto.iroha.protocol.Block.prototype.setBlockV1 = function(value) {
  jspb.Message.setOneofWrapperField(this, 1, proto.iroha.protocol.Block.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 */
proto.iroha.protocol.Block.prototype.clearBlockV1 = function() {
  this.setBlockV1(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.iroha.protocol.Block.prototype.hasBlockV1 = function() {
  return jspb.Message.getField(this, 1) != null;
};


goog.object.extend(exports, proto.iroha.protocol);
