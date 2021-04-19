<!--
        <script context="module"> 
            The script runs first andn fetches the data first
            It holds of rendering the component until the promise returned by the fetch is resolved.
            Once the promise is resolve, it sends an object to the component as prop which can then be utilised in the component.
        </script>
-->
<script context="module">
    export function preload(page){
        //console.log (page);
        return this.fetch('https://svelte-course-20c5e-default-rtdb.firebaseio.com/meetups.json')
		.then(res => {		
			if (!res.ok){
				throw new Error("Fetch Meetup Data failed!");
			}
			// parse the json to javascript object and also returns the promise	to the next then clase
			return res.json();	
		}).then(data =>{			
			const fetchedMeetups = [];
			for (let key in data){								
                fetchedMeetups.push({ id: key,...data[key]});
			}         
            
            // Object will return to this components into fetchedMeetups variable using 'export let fetchedMeetups' - line 41       
            return { fetchedMeetups: fetchedMeetups.reverse() };
            
		}).catch(err => {
            httpError = err;
            isLoading = false;		
			console.log ( err );
            this.error(500, 'Custom Error Mesage - could not fetch meetups data'); // Error page (_error.svelte)
		});
    }   

</script>

<script>
    import EditMeetup from "../components/Meetups/EditMeetup.svelte";
    import MeetupItem from "../components/Meetups/MeetupItem.svelte";
    import FilteredMeetup from "../components/Meetups/FilteredMeetup.svelte";
    import Button from "../components/UI/Button.svelte";
    import LoadingSpinner from "../components/UI/LoadingSpinner.svelte";
    import meetups from "../../src/meetups-store.js";   // store
    import { onMount, onDestroy } from "svelte";
    import { scale } from "svelte/transition";
    import { flip } from "svelte/animate";
import Badge from "../components/UI/Badge.svelte";
    
    //receives data as page prop from <script context="module"> ... return { fetchedMeetups: fetchedMeetups.reverse() }   from line 1
    export let fetchedMeetups;
    
    let favOnly = false;    
    function filterMeetups(event){
        favOnly = event.detail === 1;
    }

    $: filteredMeetupsList = ( favOnly ) ?  fetchedMeetups.filter( item => item.isFavorite ) : fetchedMeetups;

    let editMode = null; 
    let editID = null;  
    let isLoading = false;    
    let unsubscribe;

    function savedMeetup(){         
        editMode = null;        
        editID = null;
    }    

    function cancelEdit(){
        editMode = null;
        editID = null;
    }

    function startAdd(){
        editMode = 'edit';
    }

    function editMeetup(event){
        editMode = "edit";
        editID = event.detail;
    }

    onMount( () => {
        meetups.setMeetups(fetchedMeetups);
        unsubscribe = meetups.subscribe( items => { fetchedMeetups = items });        
    });        

    onDestroy( () => {
        if (unsubscribe) unsubscribe();
    });
    
</script>

<style>
    #meetups {
        width: 100%;
        display: grid;
        grid-template-columns: 1fr;
        grid-gap: 1rem;
    }

    #meetup-controls{
        margin: 1rem;
        display: flex;
        justify-content: space-between;

    }

    @media (min-width: 768px) {
        #meetups {
            grid-template-columns: repeat(2, 1fr);
        }
    }

    .no-message{
        margin: 1rem;
    }

</style>

<svelte:head>
	<title>All Meetups - With 'Preload' fetching data</title>
</svelte:head>

{#if editMode === 'edit'}
    <EditMeetup id="{editID}" on:saveMeetup="{savedMeetup}" on:cancelModal="{cancelEdit}" />    
{/if}      

{#if isLoading}
    <LoadingSpinner message="Fetching Meetups Data"/>
{:else}
    <section id="meetup-controls">
        <FilteredMeetup on:filterby="{filterMeetups}"/>
        <Button on:click="{startAdd}" >New Meetup</Button>
    </section>
    <section id="meetups">  
        {#if filteredMeetupsList.length===0}
            <p class="no-message">The Server has no meetups. Please start by adding one.</p>
        {/if}
        <!-- 
            on:toggleFavorite below listend for custom event 'toggleFavorite'
        -->  
        {#each filteredMeetupsList as meetup (meetup.id) }        
            <div transition:scale="{{duration: 300}}" animate:flip>
                <MeetupItem 
                    id={meetup.id}
                    title={meetup.title}
                    subtitle={meetup.subtitle}
                    imgURL={meetup.imgURL}
                    description={meetup.description}
                    address={meetup.address}
                    email={meetup.contactEmail}
                    isFav={meetup.isFavorite}                    
                    on:edit={editMeetup}
                />
            </div>
        {/each}
    </section>    
{/if}



