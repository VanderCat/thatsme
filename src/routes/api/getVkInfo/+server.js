import axios from "axios";

import { VK_SERVICEKEY, VK_ID } from '$env/static/private';
const vkApi = axios.create({
    baseURL: 'https://api.vk.com/method/'
})
vkApi.defaults.headers.common['Authorization'] = "Bearer "+VK_SERVICEKEY;

/** @type {import('./$types').RequestHandler} */
export async function GET({ url }) {
    const result = await vkApi.get("users.get", {
        params: {
            user_ids:VK_ID,
            fields: "photo_200",
            lang: "en",
            v: "5.131"
        }
    })


    return new Response(JSON.stringify(result.data.response[0]));
}
