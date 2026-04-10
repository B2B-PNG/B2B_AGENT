export interface ILogin {
  email: string,
  password: string,
  appId: string,
  challengeCode: string,
  state: string
}
export interface ToastData {
  message: string;
  type: "success" | "error" | "info";
}

export interface IUser {
  userGUID: string,
  email: string,
  fullName: string,
  phone: string
  avatar: string
}