export interface User{
    role:['driver'|'passenger']
}

export interface IUserData {
    userId: string|null,
    name: string|null,
    email:string|null,
    phoneNumber: string|null,
    role: string|null,
}


export interface IAuthState {
    token: string |undefined;
    status: boolean|undefined;
    userData: IUserData|undefined;
}

export interface IAuthPayload{
    token:string|undefined,
    userData:IUserData|undefined
}

export interface IResponseUserData{
    success:boolean;
    token:string;
    message:string;
    userData:IUserData
  
  }