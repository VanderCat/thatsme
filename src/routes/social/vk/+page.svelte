<script>
    import axios from "axios";
    import { onMount } from "svelte";
    import Profile from "../../../components/Profile.svelte";
    let pfp = ""
    let name = ""
    onMount(()=>
        axios.get("/api/getVkInfo").then((response)=>{
            const data = response.data
            pfp = data.photo_200
            name = data.first_name+" "+data.last_name
        })
    )
</script>

<div>
    <Profile pfp={pfp==""?"empty":pfp}>
        <h2 slot="header">{name==""?"Loading name...":name}</h2>
That russian social media.

oh yeah you can link this one so [here ya go](http://vk.com/vander_cat)
    </Profile>
</div>