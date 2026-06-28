/* eslint-disable */
// @ts-nocheck
/*
* This file is a generated Typescript file for GRPC Gateway, DO NOT MODIFY
*/

import * as fm from "../fetch.pb"
export type Comment = {
  commentId?: string
  creatorId?: string
  content?: string
  breadth?: number
  depth?: number
  parentId?: string
  moreId?: string
  createdAt?: string
}

export type GetRequest = {
  depth?: number
  breadth?: number
  parentId?: string
  moreId?: string
}

export type CreateRequest = {
  creatorId?: string
  content?: string
  parentId?: string
  moreId?: string
  jwt?: string
}

export class Comments {
  static GetComments(req: GetRequest, entityNotifier?: fm.NotifyStreamEntityArrival<Comment>, initReq?: fm.InitReq): Promise<void> {
    return fm.fetchStreamingRequest<GetRequest, Comment>(`/comments.Comments/GetComments`, entityNotifier, {...initReq, method: "POST", body: JSON.stringify(req, fm.replacer)})
  }
  static AddComment(req: CreateRequest, initReq?: fm.InitReq): Promise<Comment> {
    return fm.fetchReq<CreateRequest, Comment>(`/comments.Comments/AddComment`, {...initReq, method: "POST", body: JSON.stringify(req, fm.replacer)})
  }
}