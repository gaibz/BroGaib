<script>
    import Sidebar from "./components/Sidebar.svelte"
    import Ribbon from "./components/Ribbon.svelte"
    import Webviewer from "./components/Webviewer.svelte";
</script>

<style>
    .main {
        top: 45px;
        margin-left: 214px;
        padding: 0 10px;
    }

</style>

<Sidebar />
<Ribbon />
<div class="main">
    <Webviewer />
</div>

