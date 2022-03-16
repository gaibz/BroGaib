<script>
    import Sidebar from "./components/Sidebar.svelte"
    import Ribbon from "./components/Ribbon.svelte";
</script>
<style>
    .main {
        top: 45px;
        margin-left: 214px;
        padding: 0 10px;
    }

    .main .web-view {
        width: calc(100vw - 230px);
        height: calc(100vh - 46px);
    }
</style>
<Sidebar />
<Ribbon />
<div class="main">
    <webview class="web-view" src="https://rootindo.com/"></webview>
</div>

