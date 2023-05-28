import axios from "axios";
import { onMount } from "svelte";

import { DISCORD_BOTTOKEN, DISCORD_USERID } from '$env/static/private';
const disocrdApi = axios.create({
    baseURL: 'https://discord.com/api'
})
disocrdApi.defaults.headers.common['Authorization'] = "Bot "+DISCORD_BOTTOKEN;

/** @type {import('./$types').RequestHandler} */
export async function GET({ url }) {
    const result = await disocrdApi.get("/users/"+DISCORD_USERID)


    return new Response(JSON.stringify(result.data));
}
