import axios from 'axios'
import Cookies from 'js-cookie';
import { toast } from 'react-toastify';

export  const sitedetails = {
    title: "X-Bucket",
    email: "support@xbucket.com"
}

export const saveCookies = (name: string, value: string, days: number) => {
    return Cookies.set(name, value, { expires: days })
}

export const getCookies = (name: string) => {
    return Cookies.get(name)
}

export const deleteCookies = (name: string) => {
    return Cookies.remove(name)
}

export const loggedInUser = () => {
    const loggedInUser = getCookies('loggedInUser')
    return loggedInUser? JSON.parse(loggedInUser) : ''
}

export const loginStuffs = (data: string) => {
    deleteCookies('loggedInUser')
    deleteCookies('isLoggedIn')
    saveCookies('loggedInUser', data, 5)
    saveCookies('isLoggedIn', 'yes', 5)
}

export const getUserIp = async () => {
    const res = await axios.get("https://api.ipify.org/?format=json");
    return res.data.ip;
}

export const copyAnswer = (answer: string): boolean => {
    if (answer != "") return false
    navigator.clipboard.writeText(answer);
    toast.success('copied!!')
    return true
};