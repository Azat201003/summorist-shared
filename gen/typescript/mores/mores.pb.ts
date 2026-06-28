/* eslint-disable */
// @ts-nocheck
/*
* This file is a generated Typescript file for GRPC Gateway, DO NOT MODIFY
*/

import * as fm from "../fetch.pb"

type Absent<T, K extends keyof T> = { [k in Exclude<keyof T, K>]?: undefined };
type OneOf<T> =
  | { [k in keyof T]?: undefined }
  | (
    keyof T extends infer K ?
      (K extends string & keyof T ? { [k in K]: T[K] } & Absent<T, K>
        : never)
    : never);
export type CreateRequest = {
  title?: string
  jwtToken?: string
}

export type Meta = {
  title?: string
  creatorId?: string
  moreId?: string
}

export type ExchangeData = {
  moreId?: string
  blockSize?: number
  jwtToken?: string
}

export type DownloadRequest = {
  data?: ExchangeData
  converted?: boolean
}


type BaseUploadRequest = {
}

export type UploadRequest = BaseUploadRequest
  & OneOf<{ data: ExchangeData; part: Part }>

export type RemoveRequest = {
  moreId?: string
  jwtToken?: string
}

export type Part = {
  number?: number
  size?: number
  data?: Uint8Array
}

export class Mores {
  static GetFiltered(req: Meta, entityNotifier?: fm.NotifyStreamEntityArrival<Meta>, initReq?: fm.InitReq): Promise<void> {
    return fm.fetchStreamingRequest<Meta, Meta>(`/mores?${fm.renderURLSearchParams(req, [])}`, entityNotifier, {...initReq, method: "GET"})
  }
  static DownloadMore(req: DownloadRequest, entityNotifier?: fm.NotifyStreamEntityArrival<Part>, initReq?: fm.InitReq): Promise<void> {
    return fm.fetchStreamingRequest<DownloadRequest, Part>(`/mores/download/${req["dataMoreId"]}`, entityNotifier, {...initReq, method: "POST", body: JSON.stringify(req, fm.replacer)})
  }
  static RemoveMore(req: RemoveRequest, initReq?: fm.InitReq): Promise<Meta> {
    return fm.fetchReq<RemoveRequest, Meta>(`/mores`, {...initReq, method: "DELETE"})
  }
  static CreateMore(req: CreateRequest, initReq?: fm.InitReq): Promise<Meta> {
    return fm.fetchReq<CreateRequest, Meta>(`/mores`, {...initReq, method: "POST", body: JSON.stringify(req, fm.replacer)})
  }
}