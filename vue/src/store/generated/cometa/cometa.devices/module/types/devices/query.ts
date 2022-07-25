/* eslint-disable */
import { Reader, Writer } from "protobufjs/minimal";
import { Params } from "../devices/params";
import { StoredDevices } from "../devices/stored_devices";
import {
  PageRequest,
  PageResponse,
} from "../cosmos/base/query/v1beta1/pagination";
import { NextDevice } from "../devices/next_device";

export const protobufPackage = "cometa.devices";

/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}

/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params: Params | undefined;
}

export interface QueryGetStoredDevicesRequest {
  index: string;
}

export interface QueryGetStoredDevicesResponse {
  storedDevices: StoredDevices | undefined;
}

export interface QueryAllStoredDevicesRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllStoredDevicesResponse {
  storedDevices: StoredDevices[];
  pagination: PageResponse | undefined;
}

export interface QueryGetNextDeviceRequest {}

export interface QueryGetNextDeviceResponse {
  NextDevice: NextDevice | undefined;
}

const baseQueryParamsRequest: object = {};

export const QueryParamsRequest = {
  encode(_: QueryParamsRequest, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): QueryParamsRequest {
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
    return message;
  },

  toJSON(_: QueryParamsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<QueryParamsRequest>): QueryParamsRequest {
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
    return message;
  },
};

const baseQueryParamsResponse: object = {};

export const QueryParamsResponse = {
  encode(
    message: QueryParamsResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryParamsResponse {
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromJSON(object.params);
    } else {
      message.params = undefined;
    }
    return message;
  },

  toJSON(message: QueryParamsResponse): unknown {
    const obj: any = {};
    message.params !== undefined &&
      (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryParamsResponse>): QueryParamsResponse {
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    } else {
      message.params = undefined;
    }
    return message;
  },
};

const baseQueryGetStoredDevicesRequest: object = { index: "" };

export const QueryGetStoredDevicesRequest = {
  encode(
    message: QueryGetStoredDevicesRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.index !== "") {
      writer.uint32(10).string(message.index);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetStoredDevicesRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetStoredDevicesRequest,
    } as QueryGetStoredDevicesRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.index = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetStoredDevicesRequest {
    const message = {
      ...baseQueryGetStoredDevicesRequest,
    } as QueryGetStoredDevicesRequest;
    if (object.index !== undefined && object.index !== null) {
      message.index = String(object.index);
    } else {
      message.index = "";
    }
    return message;
  },

  toJSON(message: QueryGetStoredDevicesRequest): unknown {
    const obj: any = {};
    message.index !== undefined && (obj.index = message.index);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetStoredDevicesRequest>
  ): QueryGetStoredDevicesRequest {
    const message = {
      ...baseQueryGetStoredDevicesRequest,
    } as QueryGetStoredDevicesRequest;
    if (object.index !== undefined && object.index !== null) {
      message.index = object.index;
    } else {
      message.index = "";
    }
    return message;
  },
};

const baseQueryGetStoredDevicesResponse: object = {};

export const QueryGetStoredDevicesResponse = {
  encode(
    message: QueryGetStoredDevicesResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.storedDevices !== undefined) {
      StoredDevices.encode(
        message.storedDevices,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetStoredDevicesResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetStoredDevicesResponse,
    } as QueryGetStoredDevicesResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.storedDevices = StoredDevices.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetStoredDevicesResponse {
    const message = {
      ...baseQueryGetStoredDevicesResponse,
    } as QueryGetStoredDevicesResponse;
    if (object.storedDevices !== undefined && object.storedDevices !== null) {
      message.storedDevices = StoredDevices.fromJSON(object.storedDevices);
    } else {
      message.storedDevices = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetStoredDevicesResponse): unknown {
    const obj: any = {};
    message.storedDevices !== undefined &&
      (obj.storedDevices = message.storedDevices
        ? StoredDevices.toJSON(message.storedDevices)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetStoredDevicesResponse>
  ): QueryGetStoredDevicesResponse {
    const message = {
      ...baseQueryGetStoredDevicesResponse,
    } as QueryGetStoredDevicesResponse;
    if (object.storedDevices !== undefined && object.storedDevices !== null) {
      message.storedDevices = StoredDevices.fromPartial(object.storedDevices);
    } else {
      message.storedDevices = undefined;
    }
    return message;
  },
};

const baseQueryAllStoredDevicesRequest: object = {};

export const QueryAllStoredDevicesRequest = {
  encode(
    message: QueryAllStoredDevicesRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAllStoredDevicesRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllStoredDevicesRequest,
    } as QueryAllStoredDevicesRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllStoredDevicesRequest {
    const message = {
      ...baseQueryAllStoredDevicesRequest,
    } as QueryAllStoredDevicesRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllStoredDevicesRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllStoredDevicesRequest>
  ): QueryAllStoredDevicesRequest {
    const message = {
      ...baseQueryAllStoredDevicesRequest,
    } as QueryAllStoredDevicesRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllStoredDevicesResponse: object = {};

export const QueryAllStoredDevicesResponse = {
  encode(
    message: QueryAllStoredDevicesResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.storedDevices) {
      StoredDevices.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAllStoredDevicesResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllStoredDevicesResponse,
    } as QueryAllStoredDevicesResponse;
    message.storedDevices = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.storedDevices.push(
            StoredDevices.decode(reader, reader.uint32())
          );
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllStoredDevicesResponse {
    const message = {
      ...baseQueryAllStoredDevicesResponse,
    } as QueryAllStoredDevicesResponse;
    message.storedDevices = [];
    if (object.storedDevices !== undefined && object.storedDevices !== null) {
      for (const e of object.storedDevices) {
        message.storedDevices.push(StoredDevices.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllStoredDevicesResponse): unknown {
    const obj: any = {};
    if (message.storedDevices) {
      obj.storedDevices = message.storedDevices.map((e) =>
        e ? StoredDevices.toJSON(e) : undefined
      );
    } else {
      obj.storedDevices = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllStoredDevicesResponse>
  ): QueryAllStoredDevicesResponse {
    const message = {
      ...baseQueryAllStoredDevicesResponse,
    } as QueryAllStoredDevicesResponse;
    message.storedDevices = [];
    if (object.storedDevices !== undefined && object.storedDevices !== null) {
      for (const e of object.storedDevices) {
        message.storedDevices.push(StoredDevices.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryGetNextDeviceRequest: object = {};

export const QueryGetNextDeviceRequest = {
  encode(
    _: QueryGetNextDeviceRequest,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetNextDeviceRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetNextDeviceRequest,
    } as QueryGetNextDeviceRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): QueryGetNextDeviceRequest {
    const message = {
      ...baseQueryGetNextDeviceRequest,
    } as QueryGetNextDeviceRequest;
    return message;
  },

  toJSON(_: QueryGetNextDeviceRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<QueryGetNextDeviceRequest>
  ): QueryGetNextDeviceRequest {
    const message = {
      ...baseQueryGetNextDeviceRequest,
    } as QueryGetNextDeviceRequest;
    return message;
  },
};

const baseQueryGetNextDeviceResponse: object = {};

export const QueryGetNextDeviceResponse = {
  encode(
    message: QueryGetNextDeviceResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.NextDevice !== undefined) {
      NextDevice.encode(message.NextDevice, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetNextDeviceResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetNextDeviceResponse,
    } as QueryGetNextDeviceResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.NextDevice = NextDevice.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetNextDeviceResponse {
    const message = {
      ...baseQueryGetNextDeviceResponse,
    } as QueryGetNextDeviceResponse;
    if (object.NextDevice !== undefined && object.NextDevice !== null) {
      message.NextDevice = NextDevice.fromJSON(object.NextDevice);
    } else {
      message.NextDevice = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetNextDeviceResponse): unknown {
    const obj: any = {};
    message.NextDevice !== undefined &&
      (obj.NextDevice = message.NextDevice
        ? NextDevice.toJSON(message.NextDevice)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetNextDeviceResponse>
  ): QueryGetNextDeviceResponse {
    const message = {
      ...baseQueryGetNextDeviceResponse,
    } as QueryGetNextDeviceResponse;
    if (object.NextDevice !== undefined && object.NextDevice !== null) {
      message.NextDevice = NextDevice.fromPartial(object.NextDevice);
    } else {
      message.NextDevice = undefined;
    }
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  /** Parameters queries the parameters of the module. */
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Queries a StoredDevices by index. */
  StoredDevices(
    request: QueryGetStoredDevicesRequest
  ): Promise<QueryGetStoredDevicesResponse>;
  /** Queries a list of StoredDevices items. */
  StoredDevicesAll(
    request: QueryAllStoredDevicesRequest
  ): Promise<QueryAllStoredDevicesResponse>;
  /** Queries a NextDevice by index. */
  NextDevice(
    request: QueryGetNextDeviceRequest
  ): Promise<QueryGetNextDeviceResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("cometa.devices.Query", "Params", data);
    return promise.then((data) => QueryParamsResponse.decode(new Reader(data)));
  }

  StoredDevices(
    request: QueryGetStoredDevicesRequest
  ): Promise<QueryGetStoredDevicesResponse> {
    const data = QueryGetStoredDevicesRequest.encode(request).finish();
    const promise = this.rpc.request(
      "cometa.devices.Query",
      "StoredDevices",
      data
    );
    return promise.then((data) =>
      QueryGetStoredDevicesResponse.decode(new Reader(data))
    );
  }

  StoredDevicesAll(
    request: QueryAllStoredDevicesRequest
  ): Promise<QueryAllStoredDevicesResponse> {
    const data = QueryAllStoredDevicesRequest.encode(request).finish();
    const promise = this.rpc.request(
      "cometa.devices.Query",
      "StoredDevicesAll",
      data
    );
    return promise.then((data) =>
      QueryAllStoredDevicesResponse.decode(new Reader(data))
    );
  }

  NextDevice(
    request: QueryGetNextDeviceRequest
  ): Promise<QueryGetNextDeviceResponse> {
    const data = QueryGetNextDeviceRequest.encode(request).finish();
    const promise = this.rpc.request(
      "cometa.devices.Query",
      "NextDevice",
      data
    );
    return promise.then((data) =>
      QueryGetNextDeviceResponse.decode(new Reader(data))
    );
  }
}

interface Rpc {
  request(
    service: string,
    method: string,
    data: Uint8Array
  ): Promise<Uint8Array>;
}

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
