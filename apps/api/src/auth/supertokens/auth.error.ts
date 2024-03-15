export type AuthErrorCause =
  | "SUPERTOKENS_USER_ID_WITH_NO_CORRESPONDING_USER_IN_DB_ERROR"
  | "EMAIL_ALREADY_EXISTS_ERROR"
  | "UNKNOWN_ERROR"
  | "SUPERTOKENS_PASSWORD_POLICY_VIOLATED_ERROR"
  | "SUPERTOKENS_ID_WITH_NO_CORRESPONDING_SUPERTOKENS_USER"
  | "EMAIL_CHANGE_NOT_ALLOWED_ERROR"
  | "PHONE_NUMBER_ALREADY_EXISTS_ERROR"
  | "PHONE_NUMBER_CHANGE_NOT_ALLOWED_ERROR"
  | "SIGN_IN_UP_NOT_ALLOWED";

export class AuthError {
  cause: AuthErrorCause;

  constructor(cause: AuthErrorCause) {
    this.cause = cause;
  }
}