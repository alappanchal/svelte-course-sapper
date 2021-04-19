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
        const meetupID = page.params.id;    //page URL params
        return this.fetch('https://svelte-course-20c5e-default-rtdb.firebaseio.com/meetups/' + meetupID +'.json')
            .then( res =>{
                if ( !res.ok ){
                    throw new Error("HTTP Update Favorite Meetup Error");
                }
                return res.json();                
            }).then( meetupData =>{
                // Object will return to this components into selectedMetup variable using 'export let selectedMeetup' - line 24
                return { selectedMeetup: {...meetupData, id: meetupID}} 
            }).catch( err =>{
                isFavoriteInProgress = false;
                console.log (err)
                this.error(400, 'Could not fetch the meetup with id' + meetupID);  // Error page (_error.svelte)
            });      
    }
</script>

<script>

    import Button from "../components/UI/Button.svelte";  
    
    //receives data as page prop from <script context="module"> ... return { selectedMeetup: {...meetupData, id: meetupID}} from line 1
    export let selectedMeetup; 
</script>

<style>
    section {
    margin-top: 4rem;
    }

    .image {
    width: 100%;
    height: 25rem;
    }

    img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    }

    .image {
    background: #e7e7e7;
    }

    .content {
    text-align: center;
    width: 80%;
    margin: auto;
    }

    h1 {
    font-size: 2rem;
    font-family: 'Roboto Slab', sans-serif;
    margin: 0.5rem 0;
    }

    h2 {
    font-size: 1.25rem;
    color: #6b6b6b;
    }

    p {
    font-size: 1.5rem;
    }
</style>

<section>
    <div class="image">
        <img src="{selectedMeetup.imgURL}" alt="" />
    </div>
    <div class="content">
        <h1>{selectedMeetup.title}</h1>
        <h2>{selectedMeetup.subtitle}</h2>
        <p>{selectedMeetup.description}</p>
        <Button href="mailto:{selectedMeetup.contactEmail}">Contact</Button>
        <Button type="button" mode="outline" href="/">Back</Button>
    </div>
</section>