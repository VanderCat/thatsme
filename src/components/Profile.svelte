<script>
    export let pfp;
    let source = "there was supposed to be text but there isn't. blame the dev.";
    import SvelteMarkdown from 'svelte-markdown'
</script>

<style>
    .image {
        width: 192px;
        height: 192px;
        background-image: var(--use-image);
        flex-shrink: 0;
        background-size: contain;
    }
    .hide {
        display: none;
    }
    .wrapper {
        display: flex;
        gap: 32px;
    }
</style>

<div class="wrapper">
    <div class="image" style={`--use-image: url(${pfp});`}></div>
    <div class="text">
        <slot name="header"></slot>
        <SvelteMarkdown source={source.innerHTML}/>
    </div>
</div>
<span contenteditable="true" bind:this={source} class="hide"> 
    <slot/>
</span>    