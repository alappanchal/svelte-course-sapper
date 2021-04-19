<script>
    import { createEventDispatcher }  from "svelte";
    const dispatch = createEventDispatcher();
    
    let selectedFilterBtn = 0;
    function filter_all(){
        selectedFilterBtn = 0;
        dispatch('filterby',selectedFilterBtn);
    }

    function filter_favorites(){
        selectedFilterBtn = 1;
        dispatch('filterby',selectedFilterBtn);
    }
</script>

<style>
    div {
    font-size: 0px;
    }

    button {
    background: #aaaaaa;
    font: inherit;
    font-size: 1rem;
    cursor: pointer;
    border: 1px solid #aaaaaa;
    padding: 0.5rem 1rem;
    }

    button:focus {
    outline: none;
    }

    button:first-of-type {
    border-radius: 5px 0 0 5px;
    }

    button:last-of-type {
    border-radius: 0 5px 5px 0;
    }

    button:hover,
    button:active,
    .active {
    background: #cf0056;
    border-color: #cf0056;
    color: white;
    }

</style>
<div>
    <button type="button" on:click="{filter_all}" class:active="{ selectedFilterBtn == 0}">All</button>
    <button type="button" on:click="{filter_favorites}" class:active="{ selectedFilterBtn == 1}">Favorites</button>
</div>