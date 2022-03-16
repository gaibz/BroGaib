<script>
    import {tabs} from "../store"
    import {onMount} from "svelte"

    let tablists = []

    tabs.subscribe((tab) => {
        tablists = tab
        listView()
    })


    function listView() {
        // TODO : Fix webview on dynamic electron creation to get title, url, and icon of site

        // document.querySelectorAll('.web-view').forEach((wv) => {
        //     wv.addEventListener('dom-ready', () => {
        //         let index = wv.id.split("-")[1]
        //         tablists[index].title = wv.getTitle()
        //         tabs.set(tablists)
        //     })
        // })
    }

    onMount(() => {
        document.getElementById('node-webview').addEventListener("DOMNodeInserted", listView)
        document.getElementById('node-webview').addEventListener("DOMNodeRemoved", listView)
    })


</script>
<style>
    .web-view {
        width: calc(100vw - 230px);
        height: calc(100vh - 46px);
    }

    .hidden {
        display: none;
    }
</style>

<div id="node-webview">
    {#each tablists as tab,i}
        <webview class="web-view {tab.active ? '' : 'hidden'}" src="{tab.url}" id="webview-{i}"></webview>
    {/each}
</div>