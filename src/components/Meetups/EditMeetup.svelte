<script>
    import TextInput from "../UI/TextInput.svelte";
    import Button from "../UI/Button.svelte"; 
    import Modal from "../UI/Modal.svelte";
    import { isEmpty, validateEmailOrURL } from "../../helpers/validation.js";
    import { createEventDispatcher } from "svelte";
    import meetups from "../../../src/meetups-store";   // store

    export let id = null;
    
    let title="";
    let subtitle="";
    let description="";
    let imgURL="";
    let address="";
    let email="";
    let updateMeetup = {};    

    // component is subscribing to the store for any update only if it receives the 'id' parameter.
    // subscribe method return a function which is the unsubscribe itself and can be used by component to unsubscribe once its work is finish to avoid any memoery leak.    
    if (id){
        const unsubscribe = meetups.subscribe( items => {
            updateMeetup = items.find( item => item.id===id );
            title = updateMeetup.title;
            subtitle = updateMeetup.subtitle;
            description = updateMeetup.description;
            imgURL = updateMeetup.imgURL;
            address = updateMeetup.address;
            email = updateMeetup.contactEmail;
        });
        unsubscribe();  // unsubscribing the component as soons we updated the variable needed.
    }        

    const dispatch = createEventDispatcher();

    function saveForm(){
        let saveMeetupObj = {};
        saveMeetupObj.title = title;
        saveMeetupObj.subtitle = subtitle;
        saveMeetupObj.description = description;
        saveMeetupObj.imgURL = imgURL;
        saveMeetupObj.address = address;
        saveMeetupObj.contactEmail = email;              
        
        if ( id ){
            fetch('https://svelte-course-20c5e-default-rtdb.firebaseio.com/meetups/' + id +'.json', {
                method: 'PATCH',    // syntax for firebase to UPDATE existing record.
                body: JSON.stringify(saveMeetupObj),
                headers: { 'Content-Type':"application/json" }
            }).then( res =>{
                if ( !res.ok ){
                    throw new Error("HTTP Update Meetup Error");
                }
                meetups.updateMeetup(id, saveMeetupObj);    // Local store update
            }).catch( err =>{
                console.log (err)
            });            
        }else{   
            saveMeetupObj.isFavorite = false;         
            fetch('https://svelte-course-20c5e-default-rtdb.firebaseio.com/meetups.json', {
                method: 'POST',
                body: JSON.stringify(saveMeetupObj),
                headers: { 'Content-Type':"application/json" }
            }).then( res =>{
                if ( !res.ok ){
                    throw new Error("HTTP Add Meetup Error");
                }
                return res.json();
            }).then( data =>{
                console.log ("Add meetup data", data);                
                saveMeetupObj.id = data.name;       // id returned by the firebase
                meetups.addMeetup(saveMeetupObj);   // Local store add
            }).catch( err =>{
                console.log (err)
            });            
        }
        
        dispatch("saveMeetup");
    }

    function closeModal(){
        dispatch("cancelModal");
    }

    function deleteMeetup(){
        fetch('https://svelte-course-20c5e-default-rtdb.firebaseio.com/meetups/' + id +'.json', {
                method: 'DELETE'    // syntax for firebase to DELETE existing record.                
            }).then( res => {
                if ( !res.ok ){
                    throw new Error("HTTP delete Meetup Error");
                }
                meetups.deleteMeetup(id);    // Local store update
            }).catch( err => {
                console.log (err)
            });
        
        dispatch("saveMeetup");
    }

    let isFormValid = false;
    $: isTitleValid = !isEmpty(title);
    $: isSubtitleValid = !isEmpty(subtitle);
    $: isDescValid = !isEmpty(description);
    $: isIMGValid = validateEmailOrURL(imgURL,"url");;
    $: isAddressValid = !isEmpty(address);
    $: isEmailValid = validateEmailOrURL(email,"email");

    $:isFormValid =  isTitleValid && isSubtitleValid && isDescValid && isIMGValid && isAddressValid && isEmailValid;

</script>

<style>
    form{
        width: 100%;        
    }    
</style>

<Modal title="New Meetup" on:cancelModal>
    <form on:submit|preventDefault="{saveForm}">
        <!-- TextInput  is an individual component to add differet type of text/textarea -->
        <TextInput 
            id="title"
            label="Title"
            value="{title}" 
            type="text"
            valid="{isTitleValid}"           
            validatyMessage="{ "Please enter title" }"
            on:input={ event => (title = event.target.value) } />

        <TextInput 
            id="subtitle"
            label="Sub Title"
            value="{subtitle}"
            valid="{isSubtitleValid}"           
            validatyMessage="{ "Please enter subtitle" }"             
            on:input={ event => (subtitle = event.target.value) } />

        <TextInput 
            id="description"
            label="Description"
            value="{description}" 
            controlType="textarea"           
            rows="3"
            valid="{isDescValid}"           
            validatyMessage="{ "Please enter description" }"
            on:input={ event => (description = event.target.value) } />
        
        <TextInput 
            id="url"
            label="Image URL"
            value="{imgURL}" 
            valid="{isIMGValid}"           
            validatyMessage="{ "Please enter image url" }"                       
            on:input={ event => (imgURL = event.target.value) } />
        
        <TextInput 
            id="address"
            label="Address"
            value="{address}"   
            valid="{isAddressValid}"           
            validatyMessage="{ "Please enter address" }"
            on:input={ event => (address = event.target.value) } />

        <TextInput 
            id="emailID"
            label="E-mail"
            value="{email}" 
            type="email"
            valid="{isEmailValid}"           
            validatyMessage="{ "Please enter email" }"           
            on:input={ event => (email = event.target.value) } />                   
    </form>
    <div slot="footer">
        <!-- Button is an individual component to add differet button or hyperlink -->
        <Button type="button" on:click="{closeModal}" mode="outline">Cancel</Button>
        <Button type="button" on:click="{saveForm}" disabled="{!isFormValid}" >Save</Button>
        {#if id}
            <Button type="button" on:click="{deleteMeetup}">Delete</Button>
        {/if}     
    </div>
</Modal>