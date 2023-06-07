import axios from 'axios'

export  const sitedetails = {
    title: "X-Bucket",
    email: "support@xbucket.com"
}

export const countries = [
    {name: "Nigeria", value: "nigeria"},
    {name: "Ghana", value: "ghana"},
    {name: "South Africa", value: "South Africa"},
    {name: "United States", value: "United States"},
    {name: "United kingdom", value: "United Kingdom"},
    {name: "Others", value: "other countries"},
]

export const getUserIp = async () => {
    const res = await axios.get("https://api.ipify.org/?format=json");
    return res.data.ip;
}