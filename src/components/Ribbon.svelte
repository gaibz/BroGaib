<script>

    import {tabs} from "../store";

    let url = ""

    let tablists = []

    let active_tab_index = 0

    tabs.subscribe((tab) => {
        tablists = tab
        let active_tab = {}
        tablists.forEach((tabx, i) => {
            if(tabx.active) {
                active_tab_index = i
                active_tab = tabx
            }
        })

        if(active_tab.url) {
            url = active_tab.url
        }
    })


    $: secure = url.indexOf("https:\/\/") > -1
    $: secure_title = secure ? "Secure" : "Not Secure"
    $: secure_icon = secure ? "lock" : "unlock"

    function load() {
        tablists[active_tab_index].url = url
        tabs.set(tablists)
    }

    function detectInput(e) {
        if(e.key === 'Enter') load()
    }

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
        <input type="text" bind:value={url} on:keyup={detectInput}>
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