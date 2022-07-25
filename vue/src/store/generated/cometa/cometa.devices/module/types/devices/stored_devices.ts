/* eslint-disable */
import * as Long from "long";
import { util, configure, Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "cometa.devices";

export interface StoredDevices {
  index: string;
  deviceAccount: string;
  deviceClass: string;
  ownerAddress: string;
  userAddress: string;
  escrowAddress: string;
  manufacturerAddress: string;
  pricePerUnit: number;
  commissionPerUnit: number;
  billingPeriod: number;
  totalBilledUnits: number;
  lastPayment: number;
  metadataUrl: string;
  metadataHash: string;
  imageUrl: string;
  imageHash: string;
  createdAt: number;
}

const baseStoredDevices: object = {
  index: "",
  deviceAccount: "",
  deviceClass: "",
  ownerAddress: "",
  userAddress: "",
  escrowAddress: "",
  manufacturerAddress: "",
  pricePerUnit: 0,
  commissionPerUnit: 0,
  billingPeriod: 0,
  totalBilledUnits: 0,
  lastPayment: 0,
  metadataUrl: "",
  metadataHash: "",
  imageUrl: "",
  imageHash: "",
  createdAt: 0,
};

export const StoredDevices = {
  encode(message: StoredDevices, writer: Writer = Writer.create()): Writer {
    if (message.index !== "") {
      writer.uint32(10).string(message.index);
    }
    if (message.deviceAccount !== "") {
      writer.uint32(18).string(message.deviceAccount);
    }
    if (message.deviceClass !== "") {
      writer.uint32(26).string(message.deviceClass);
    }
    if (message.ownerAddress !== "") {
      writer.uint32(34).string(message.ownerAddress);
    }
    if (message.userAddress !== "") {
      writer.uint32(42).string(message.userAddress);
    }
    if (message.escrowAddress !== "") {
      writer.uint32(50).string(message.escrowAddress);
    }
    if (message.manufacturerAddress !== "") {
      writer.uint32(58).string(message.manufacturerAddress);
    }
    if (message.pricePerUnit !== 0) {
      writer.uint32(64).uint64(message.pricePerUnit);
    }
    if (message.commissionPerUnit !== 0) {
      writer.uint32(72).uint64(message.commissionPerUnit);
    }
    if (message.billingPeriod !== 0) {
      writer.uint32(80).int32(message.billingPeriod);
    }
    if (message.totalBilledUnits !== 0) {
      writer.uint32(88).int32(message.totalBilledUnits);
    }
    if (message.lastPayment !== 0) {
      writer.uint32(96).int32(message.lastPayment);
    }
    if (message.metadataUrl !== "") {
      writer.uint32(106).string(message.metadataUrl);
    }
    if (message.metadataHash !== "") {
      writer.uint32(114).string(message.metadataHash);
    }
    if (message.imageUrl !== "") {
      writer.uint32(122).string(message.imageUrl);
    }
    if (message.imageHash !== "") {
      writer.uint32(130).string(message.imageHash);
    }
    if (message.createdAt !== 0) {
      writer.uint32(136).uint64(message.createdAt);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): StoredDevices {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseStoredDevices } as StoredDevices;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.index = reader.string();
          break;
        case 2:
          message.deviceAccount = reader.string();
          break;
        case 3:
          message.deviceClass = reader.string();
          break;
        case 4:
          message.ownerAddress = reader.string();
          break;
        case 5:
          message.userAddress = reader.string();
          break;
        case 6:
          message.escrowAddress = reader.string();
          break;
        case 7:
          message.manufacturerAddress = reader.string();
          break;
        case 8:
          message.pricePerUnit = longToNumber(reader.uint64() as Long);
          break;
        case 9:
          message.commissionPerUnit = longToNumber(reader.uint64() as Long);
          break;
        case 10:
          message.billingPeriod = reader.int32();
          break;
        case 11:
          message.totalBilledUnits = reader.int32();
          break;
        case 12:
          message.lastPayment = reader.int32();
          break;
        case 13:
          message.metadataUrl = reader.string();
          break;
        case 14:
          message.metadataHash = reader.string();
          break;
        case 15:
          message.imageUrl = reader.string();
          break;
        case 16:
          message.imageHash = reader.string();
          break;
        case 17:
          message.createdAt = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): StoredDevices {
    const message = { ...baseStoredDevices } as StoredDevices;
    if (object.index !== undefined && object.index !== null) {
      message.index = String(object.index);
    } else {
      message.index = "";
    }
    if (object.deviceAccount !== undefined && object.deviceAccount !== null) {
      message.deviceAccount = String(object.deviceAccount);
    } else {
      message.deviceAccount = "";
    }
    if (object.deviceClass !== undefined && object.deviceClass !== null) {
      message.deviceClass = String(object.deviceClass);
    } else {
      message.deviceClass = "";
    }
    if (object.ownerAddress !== undefined && object.ownerAddress !== null) {
      message.ownerAddress = String(object.ownerAddress);
    } else {
      message.ownerAddress = "";
    }
    if (object.userAddress !== undefined && object.userAddress !== null) {
      message.userAddress = String(object.userAddress);
    } else {
      message.userAddress = "";
    }
    if (object.escrowAddress !== undefined && object.escrowAddress !== null) {
      message.escrowAddress = String(object.escrowAddress);
    } else {
      message.escrowAddress = "";
    }
    if (
      object.manufacturerAddress !== undefined &&
      object.manufacturerAddress !== null
    ) {
      message.manufacturerAddress = String(object.manufacturerAddress);
    } else {
      message.manufacturerAddress = "";
    }
    if (object.pricePerUnit !== undefined && object.pricePerUnit !== null) {
      message.pricePerUnit = Number(object.pricePerUnit);
    } else {
      message.pricePerUnit = 0;
    }
    if (
      object.commissionPerUnit !== undefined &&
      object.commissionPerUnit !== null
    ) {
      message.commissionPerUnit = Number(object.commissionPerUnit);
    } else {
      message.commissionPerUnit = 0;
    }
    if (object.billingPeriod !== undefined && object.billingPeriod !== null) {
      message.billingPeriod = Number(object.billingPeriod);
    } else {
      message.billingPeriod = 0;
    }
    if (
      object.totalBilledUnits !== undefined &&
      object.totalBilledUnits !== null
    ) {
      message.totalBilledUnits = Number(object.totalBilledUnits);
    } else {
      message.totalBilledUnits = 0;
    }
    if (object.lastPayment !== undefined && object.lastPayment !== null) {
      message.lastPayment = Number(object.lastPayment);
    } else {
      message.lastPayment = 0;
    }
    if (object.metadataUrl !== undefined && object.metadataUrl !== null) {
      message.metadataUrl = String(object.metadataUrl);
    } else {
      message.metadataUrl = "";
    }
    if (object.metadataHash !== undefined && object.metadataHash !== null) {
      message.metadataHash = String(object.metadataHash);
    } else {
      message.metadataHash = "";
    }
    if (object.imageUrl !== undefined && object.imageUrl !== null) {
      message.imageUrl = String(object.imageUrl);
    } else {
      message.imageUrl = "";
    }
    if (object.imageHash !== undefined && object.imageHash !== null) {
      message.imageHash = String(object.imageHash);
    } else {
      message.imageHash = "";
    }
    if (object.createdAt !== undefined && object.createdAt !== null) {
      message.createdAt = Number(object.createdAt);
    } else {
      message.createdAt = 0;
    }
    return message;
  },

  toJSON(message: StoredDevices): unknown {
    const obj: any = {};
    message.index !== undefined && (obj.index = message.index);
    message.deviceAccount !== undefined &&
      (obj.deviceAccount = message.deviceAccount);
    message.deviceClass !== undefined &&
      (obj.deviceClass = message.deviceClass);
    message.ownerAddress !== undefined &&
      (obj.ownerAddress = message.ownerAddress);
    message.userAddress !== undefined &&
      (obj.userAddress = message.userAddress);
    message.escrowAddress !== undefined &&
      (obj.escrowAddress = message.escrowAddress);
    message.manufacturerAddress !== undefined &&
      (obj.manufacturerAddress = message.manufacturerAddress);
    message.pricePerUnit !== undefined &&
      (obj.pricePerUnit = message.pricePerUnit);
    message.commissionPerUnit !== undefined &&
      (obj.commissionPerUnit = message.commissionPerUnit);
    message.billingPeriod !== undefined &&
      (obj.billingPeriod = message.billingPeriod);
    message.totalBilledUnits !== undefined &&
      (obj.totalBilledUnits = message.totalBilledUnits);
    message.lastPayment !== undefined &&
      (obj.lastPayment = message.lastPayment);
    message.metadataUrl !== undefined &&
      (obj.metadataUrl = message.metadataUrl);
    message.metadataHash !== undefined &&
      (obj.metadataHash = message.metadataHash);
    message.imageUrl !== undefined && (obj.imageUrl = message.imageUrl);
    message.imageHash !== undefined && (obj.imageHash = message.imageHash);
    message.createdAt !== undefined && (obj.createdAt = message.createdAt);
    return obj;
  },

  fromPartial(object: DeepPartial<StoredDevices>): StoredDevices {
    const message = { ...baseStoredDevices } as StoredDevices;
    if (object.index !== undefined && object.index !== null) {
      message.index = object.index;
    } else {
      message.index = "";
    }
    if (object.deviceAccount !== undefined && object.deviceAccount !== null) {
      message.deviceAccount = object.deviceAccount;
    } else {
      message.deviceAccount = "";
    }
    if (object.deviceClass !== undefined && object.deviceClass !== null) {
      message.deviceClass = object.deviceClass;
    } else {
      message.deviceClass = "";
    }
    if (object.ownerAddress !== undefined && object.ownerAddress !== null) {
      message.ownerAddress = object.ownerAddress;
    } else {
      message.ownerAddress = "";
    }
    if (object.userAddress !== undefined && object.userAddress !== null) {
      message.userAddress = object.userAddress;
    } else {
      message.userAddress = "";
    }
    if (object.escrowAddress !== undefined && object.escrowAddress !== null) {
      message.escrowAddress = object.escrowAddress;
    } else {
      message.escrowAddress = "";
    }
    if (
      object.manufacturerAddress !== undefined &&
      object.manufacturerAddress !== null
    ) {
      message.manufacturerAddress = object.manufacturerAddress;
    } else {
      message.manufacturerAddress = "";
    }
    if (object.pricePerUnit !== undefined && object.pricePerUnit !== null) {
      message.pricePerUnit = object.pricePerUnit;
    } else {
      message.pricePerUnit = 0;
    }
    if (
      object.commissionPerUnit !== undefined &&
      object.commissionPerUnit !== null
    ) {
      message.commissionPerUnit = object.commissionPerUnit;
    } else {
      message.commissionPerUnit = 0;
    }
    if (object.billingPeriod !== undefined && object.billingPeriod !== null) {
      message.billingPeriod = object.billingPeriod;
    } else {
      message.billingPeriod = 0;
    }
    if (
      object.totalBilledUnits !== undefined &&
      object.totalBilledUnits !== null
    ) {
      message.totalBilledUnits = object.totalBilledUnits;
    } else {
      message.totalBilledUnits = 0;
    }
    if (object.lastPayment !== undefined && object.lastPayment !== null) {
      message.lastPayment = object.lastPayment;
    } else {
      message.lastPayment = 0;
    }
    if (object.metadataUrl !== undefined && object.metadataUrl !== null) {
      message.metadataUrl = object.metadataUrl;
    } else {
      message.metadataUrl = "";
    }
    if (object.metadataHash !== undefined && object.metadataHash !== null) {
      message.metadataHash = object.metadataHash;
    } else {
      message.metadataHash = "";
    }
    if (object.imageUrl !== undefined && object.imageUrl !== null) {
      message.imageUrl = object.imageUrl;
    } else {
      message.imageUrl = "";
    }
    if (object.imageHash !== undefined && object.imageHash !== null) {
      message.imageHash = object.imageHash;
    } else {
      message.imageHash = "";
    }
    if (object.createdAt !== undefined && object.createdAt !== null) {
      message.createdAt = object.createdAt;
    } else {
      message.createdAt = 0;
    }
    return message;
  },
};

declare var self: any | undefined;
declare var window: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") return globalThis;
  if (typeof self !== "undefined") return self;
  if (typeof window !== "undefined") return window;
  if (typeof global !== "undefined") return global;
  throw "Unable to locate global object";
})();

type Builtin = Date | Function | Uint8Array | string | number | undefined;
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (util.Long !== Long) {
  util.Long = Long as any;
  configure();
}
