<style>
    * {
        font-family: Inter;
        line-height: unset;
    }
    :where(h1) {
        margin: 0;
    }
    .noselect {
    -webkit-touch-callout: none; /* iOS Safari */
        -webkit-user-select: none; /* Safari */
        -khtml-user-select: none; /* Konqueror HTML */
        -moz-user-select: none; /* Old versions of Firefox */
            -ms-user-select: none; /* Internet Explorer/Edge */
                user-select: none; /* Non-prefixed version, currently
                                    supported by Chrome, Edge, Opera and Firefox */
    }
    .fullScreen {
        width: 100vw;
        height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .center {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .commitInfoContainer {
        align-items: center;
        display: flex;
        width: 100vw;
        height: 100%;
        position: absolute;
        top:0px;
        left: 0px;
        flex-direction: column-reverse;
        z-index: -1;
    }
    .commitInfoContainer :global(.commitInfo) {
        margin: 24px;
        color: rgba(255, 255, 255, 0.25);
    }

    .container {
        color: white;
        height: 304px;
        width: 100%;
        background-color: black;
        box-sizing: border-box;
        -webkit-box-shadow:inset 0px 0px 0px 4px #e5d, 0px 2px 6px rgba(0, 0, 0, 0.25);
        -moz-box-shadow:inset 0px 0px 0px 4px #e5d, 0px 2px 6px rgba(0, 0, 0, 0.25);
        box-shadow:inset 0px 0px 0px 4px #e5d, 0px 2px 6px rgba(0, 0, 0, 0.25);
        border-radius: 16px;
        padding: 32px;
    }
    .wrapper {
        display: flex;
        flex-direction: column;
        width: 640px;
        gap: 8px;
    }
</style>

<script>
    import "inter-ui/inter.css";
    import GitInfo from "../components/GitInfo.svelte";
    import "gardevoir";
    import Logo from "../components/Logo.svelte";
    import Subtext from "../components/Subtext.svelte";
</script>

<div class="fullScreen">
    <div class="center">
        <div class="wrapper">
            <Logo/>
            <div class="container">
                <div class="DescriptionContainer">
                    <slot/>
                </div>
            </div>
            <Subtext/>
        </div>
    </div>
</div>
<div class="commitInfoContainer noselect ">
    <GitInfo class="commitInfo"/>
</div>