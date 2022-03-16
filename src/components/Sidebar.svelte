<script>
    import {tabs} from "../store";

    let tablists = []

    tabs.subscribe((tab) => {
        tablists = tab
    })


    function newTab() {
        let tab = {
            url : "https://google.com",
            title : "New Created Tab "+ new Date().getTime(),
            icon : "",
            active : true
        }

        tablists.map((tab) => tab.active = false)

        tabs.set([...tablists, tab])
    }

    function deleteTab(index) {
        tablists.splice(index, 1)
        tablists = tablists
        tabs.set(tablists)
    }


    function setActiveTab(index) {
        tablists.map((tab) => tab.active = false)
        tablists[index].active = true
        tabs.set(tablists)
    }

</script>
<style>
    .side {
        position: fixed;
        height: 100vh;
        margin-bottom: 100px;
    }

    .title {
        text-transform: none !important;
    }
</style>
<div class="side">
    <div class="p-1 fixed-layout" style="width:220px">
        <input type="text" data-role="input" data-search-button="true" placeholder="Search Tab : ">
    </div>
    <ul class="sidenav-simple sidenav-simple-expand-sm pb-20">
        {#each tablists as tab,i}
            <li class="border-1 border {tab.active ? 'active':''}" title={tab.title || tab.url}>
                <a href="#" on:dblclick={() => deleteTab(i)} on:click={() => setActiveTab(i)}>
                    {#if tab.icon}
                    <span class="icon">
                        <img src={tab.icon} />
                    </span>
                    {/if}
                    <span class="title">{tab.title}</span>
                </a>
            </li>
        {/each}
        <li class="border-1 border">
            <a href="#" on:click={newTab}>
                <span class="mif-add icon"></span>
                <span class="title">New Tab</span>
            </a>
        </li>
    </ul>
</div>