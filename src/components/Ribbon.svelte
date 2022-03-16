<script>
    export let url = ""


    $: secure = url.indexOf("https:\/\/") > -1
    $: secure_title = secure ? "Secure" : "Not Secure"
    $: secure_icon = secure ? "lock" : "unlock"

</script>


<style>
    .ribbon {
        position: fixed;
        margin-left: 222px;
        width: calc(100vw - 223px);
    }
</style>
<div class="ribbon pt-1">
    <div class="input">
        <input type="text" bind:value={url}>
        <div class="button-group">
            <button class="button input-clear-button" tabindex="-1" type="button">
                <span class="default-icon-cross"></span>
            </button>
            <button class="button input-search-button" tabindex="-1" type="submit">
                <span class="mif-refresh mif-2x"></span>
            </button>
        </div>
        <div class="prepend">
            <i class="mif-{secure_icon}" title={secure_title}></i>
        </div>
    </div>
</div>