/* eslint-disable */
import { Params } from "../devices/params";
import { StoredDevices } from "../devices/stored_devices";
import { NextDevice } from "../devices/next_device";
import { Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "cometa.devices";

/** GenesisState defines the devices module's genesis state. */
export interface GenesisState {
  params: Params | undefined;
  storedDevicesList: StoredDevices[];
  /** this line is used by starport scaffolding # genesis/proto/state */
  nextDevice: NextDevice | undefined;
}

const baseGenesisState: object = {};

export const GenesisState = {
  encode(message: GenesisState, writer: Writer = Writer.create()): Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.storedDevicesList) {
      StoredDevices.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.nextDevice !== undefined) {
      NextDevice.encode(message.nextDevice, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGenesisState } as GenesisState;
    message.storedDevicesList = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        case 2:
          message.storedDevicesList.push(
            StoredDevices.decode(reader, reader.uint32())
          );
          break;
        case 3:
          message.nextDevice = NextDevice.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GenesisState {
    const message = { ...baseGenesisState } as GenesisState;
    message.storedDevicesList = [];
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromJSON(object.params);
    } else {
      message.params = undefined;
    }
    if (
      object.storedDevicesList !== undefined &&
      object.storedDevicesList !== null
    ) {
      for (const e of object.storedDevicesList) {
        message.storedDevicesList.push(StoredDevices.fromJSON(e));
      }
    }
    if (object.nextDevice !== undefined && object.nextDevice !== null) {
      message.nextDevice = NextDevice.fromJSON(object.nextDevice);
    } else {
      message.nextDevice = undefined;
    }
    return message;
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.params !== undefined &&
      (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    if (message.storedDevicesList) {
      obj.storedDevicesList = message.storedDevicesList.map((e) =>
        e ? StoredDevices.toJSON(e) : undefined
      );
    } else {
      obj.storedDevicesList = [];
    }
    message.nextDevice !== undefined &&
      (obj.nextDevice = message.nextDevice
        ? NextDevice.toJSON(message.nextDevice)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = { ...baseGenesisState } as GenesisState;
    message.storedDevicesList = [];
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    } else {
      message.params = undefined;
    }
    if (
      object.storedDevicesList !== undefined &&
      object.storedDevicesList !== null
    ) {
      for (const e of object.storedDevicesList) {
        message.storedDevicesList.push(StoredDevices.fromPartial(e));
      }
    }
    if (object.nextDevice !== undefined && object.nextDevice !== null) {
      message.nextDevice = NextDevice.fromPartial(object.nextDevice);
    } else {
      message.nextDevice = undefined;
    }
    return message;
  },
};

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
