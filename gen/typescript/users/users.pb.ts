/* eslint-disable */
// @ts-nocheck
/*
* This file is a generated Typescript file for GRPC Gateway, DO NOT MODIFY
*/

import * as fm from "../fetch.pb"
export type SignInRequest = {
  username?: string
  password?: Uint8Array
}

export type SignInResponse = {
  jwtToken?: string
  refreshToken?: string
  code?: number
}

export type AuthRequest = {
  jwtToken?: string
}

export type AuthResponse = {
  userId?: string
  code?: number
}

export type RefreshRequest = {
  userId?: string
  refreshToken?: string
}

export type RefreshResponse = {
  refreshToken?: string
  jwtToken?: string
  code?: number
}

export type UpdateRequest = {
  user?: User
  jwtToken?: string
}

export type Filter = {
  query?: string
  userId?: string
  isAdmin?: boolean
  jwtToken?: string
}

export type RemoveRequest = {
  userId?: string
  jwtToken?: string
}

export type User = {
  username?: string
  passwordHash?: Uint8Array
  refreshToken?: string
  userId?: string
  isAdmin?: boolean
}

export type RefreshToken = {
  refreshId?: string
  refreshToken?: string
}

export type StatusResponse = {
  code?: number
}

export class Users {
  static SignIn(req: SignInRequest, initReq?: fm.InitReq): Promise<SignInResponse> {
    return fm.fetchReq<SignInRequest, SignInResponse>(`/users.Users/SignIn`, {...initReq, method: "POST", body: JSON.stringify(req, fm.replacer)})
  }
  static Authorize(req: AuthRequest, initReq?: fm.InitReq): Promise<AuthResponse> {
    return fm.fetchReq<AuthRequest, AuthResponse>(`/users.Users/Authorize`, {...initReq, method: "POST", body: JSON.stringify(req, fm.replacer)})
  }
  static RefreshTokens(req: RefreshRequest, initReq?: fm.InitReq): Promise<RefreshResponse> {
    return fm.fetchReq<RefreshRequest, RefreshResponse>(`/users.Users/RefreshTokens`, {...initReq, method: "POST", body: JSON.stringify(req, fm.replacer)})
  }
  static SignUp(req: User, initReq?: fm.InitReq): Promise<StatusResponse> {
    return fm.fetchReq<User, StatusResponse>(`/users.Users/SignUp`, {...initReq, method: "POST", body: JSON.stringify(req, fm.replacer)})
  }
  static GetFiltered(req: Filter, entityNotifier?: fm.NotifyStreamEntityArrival<User>, initReq?: fm.InitReq): Promise<void> {
    return fm.fetchStreamingRequest<Filter, User>(`/users.Users/GetFiltered`, entityNotifier, {...initReq, method: "POST", body: JSON.stringify(req, fm.replacer)})
  }
  static UpdateUser(req: UpdateRequest, initReq?: fm.InitReq): Promise<StatusResponse> {
    return fm.fetchReq<UpdateRequest, StatusResponse>(`/users.Users/UpdateUser`, {...initReq, method: "POST", body: JSON.stringify(req, fm.replacer)})
  }
  static RemoveUser(req: RemoveRequest, initReq?: fm.InitReq): Promise<StatusResponse> {
    return fm.fetchReq<RemoveRequest, StatusResponse>(`/users.Users/RemoveUser`, {...initReq, method: "POST", body: JSON.stringify(req, fm.replacer)})
  }
}