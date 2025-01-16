import { instance } from "../api/axios.api";
import { IResponseUserData, IUser, IUserData } from "../types/types";

export const AuthService = {
    async registration(
        userData: IUserData
    ): Promise<IResponseUserData | undefined> {
        const {data} = await instance.post<IResponseUserData>('user', userData)
        return data
    },


    async login(userData: IUserData): Promise<any | undefined> {
        const {data} = await instance.post<IUserData>('auth/login', userData)
        return data
    },
    async getProfile(): Promise<IUser | undefined> {
        const {data} = await instance.get<IUser>('auth/profile')
        if(data) return data
    },

}