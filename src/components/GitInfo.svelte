<script>
    import {onInterval} from "../utils"
    import dayjs from "dayjs";
    import relativeTime from "dayjs/plugin/relativeTime"
    dayjs.extend(relativeTime)
    
    let time = dayjs.unix(__GIT_TIMESTAMP__).fromNow() 
    onInterval(()=>
        time = dayjs.unix(__GIT_TIMESTAMP__).fromNow()
    , 5000)
</script>

<div class={`${$$props.class}`}>
    Commit
    <span id="commithash">{__GIT_COMMIT_HASH__} </span>
    <span id="date">{time}</span>
    ( <span id="commithash">{__GIT_BRANCH__}</span>) 
</div>