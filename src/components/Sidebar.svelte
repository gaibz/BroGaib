<style>
    .side {
        position: fixed;
        height: 100vh;
        margin-bottom: 100px;
    }
</style>
<div class="side">
    <div class="p-1 fixed-layout" style="width:220px">
        <input type="text" data-role="input" data-search-button="true" placeholder="Search Tab : ">
    </div>
    <ul class="sidenav-simple sidenav-simple-expand-sm pb-20">
        {#each Array(3) as _, i}
            <li class="border-1 border">
                <a href="#">
                    <span class="icon"><img src="https://metroui.org.ua/favicon.ico" /></span>
                    <span class="title">all items {i}</span>
                </a>
            </li>
        {/each}
    </ul>
</div>