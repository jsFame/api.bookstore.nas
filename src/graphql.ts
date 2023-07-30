/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export class AuthInput {
  email: string
  password: string
}

export class AuthPayload {
  access_token: string
}

export class SignUpPayload {
  id: number
  email: string
  createdAt: DateTime
  updatedAt: DateTime
}

export abstract class IMutation {
  abstract signUp(data: AuthInput): SignUpPayload | Promise<SignUpPayload>

  abstract signIn(data: AuthInput): AuthPayload | Promise<AuthPayload>
}

export type DateTime = any
type Nullable<T> = T | null
