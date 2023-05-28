<script>
    import { page } from '$app/stores';
    import Fa from 'svelte-fa/src/fa.svelte'
    import { 
        faVk,
        faDiscord,
        faTelegram,
        faGithub,
        faSoundcloud,
        faSteam,
        faSpotify,
        faYoutube,
        faKeybase
    } from '@fortawesome/free-brands-svg-icons'
    let socials = [
        {name:"vk",icon:faVk},
        {name:"discord",icon:faDiscord},
        //{name:"telegram",icon:faTelegram},
        //{name:"github",icon:faGithub},
        //{name:"soundcloud",icon:faSoundcloud},
        //{name:"steam",icon:faSteam},
        //{name:"spotify",icon:faSpotify},
        //{name:"youtube",icon:faYoutube},
        //{name:"keybase",icon:faKeybase},
    ]
</script>

<style>
    a {
        font-size: 32px;
        color: white;
    }
    div {
        display: flex;
        gap: 16px;
    }
</style>

<div>
    {#each socials as social}
        <a href={'/social/'+social.name==$page.path?"/":'/social/'+social.name}><Fa icon={social.icon}/></a>
    {/each}
</div>