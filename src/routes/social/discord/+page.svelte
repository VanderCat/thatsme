<script>
    import axios from "axios";
    import { onMount } from "svelte";
    import Profile from "../../../components/Profile.svelte";
    let pfp = ""
    let name = ""
    onMount(()=>
        axios.get("/api/getDiscordInfo").then((response)=>{
            const data = response.data
            pfp = "https://cdn.discordapp.com/avatars/"+data.id+"/"+data.avatar+"?size=256"
            name = data.username+"#"+data.discriminator
        })
    )
</script>

<div>
    <Profile pfp={pfp==""?"empty":pfp}>
        <h2 slot="header">{name==""?"Loading name...":name}</h2>
This is where i post from (mostly)

there you can most probably speak with me but i still could not answer you so yeah
you can't make link a discord profile so you need to copy name above
    </Profile>
</div>