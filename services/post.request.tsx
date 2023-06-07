import { IEnquiry, IJoke, ILogin, INewsletter, IRecipe, IRegister, IStory, ISubscribe } from "@/types/bucketTypes"
import axiosInstance from "./axiosConfig"


export const register = async (data: IRegister) => {
    return await axiosInstance.post('/create-xtifier', data, )
}

export const login = async (data: ILogin) => {
    return await axiosInstance.post('/login-xtifier', data, )
}

export const storyTelling = async (data: IStory) => {
    return await axiosInstance.post('/store-stories', data, )
}

export const jokeTelling = async (data: IJoke) => {
    return await axiosInstance.post('/store-jokes', data, )
}

export const foodRecipe = async (data: IRecipe) => {
    return await axiosInstance.post('/store-recipes', data, )
}

export const enquiry = async (data: IEnquiry) => {
    return await axiosInstance.post('/send-enquiry', data, )
}

export const newsletter = async (data: INewsletter) => {
    return await axiosInstance.post('/newsletter', data, )
}

export const subscribeUser = async (data: ISubscribe) => {
    return await axiosInstance.post('/subscribe-user', data, )
}