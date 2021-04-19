import { writable } from "svelte/store";

const meetups = writable([
    // {
    //     id: "m1",
    //     title: "Coding Bootcamp",
    //     subtitle: "Learn to code in 2 hours",
    //     description: "In this meetup, we will have some experts that teach you how to code!",
    //     imgURL: "https://media-exp1.licdn.com/dms/image/C4D03AQFfZOEXPOffZg/profile-displayphoto-shrink_200_200/0/1517231868765?e=1618444800&v=beta&t=b7tVtqB8u4g4BF9hQQpNI7Q8PvzTSfufa-l132JlObU",
    //     address: "XX Street Name, City, State PIN",
    //     contactEmail: "code@test.com",
    //     isFavorite: false
    // },
    // {
    //     id: "m2",
    //     title: "Swim Together",
    //     subtitle: "Let's go for some swimming",
    //     description: "We will simply swmming some rounds!",
    //     imgURL: "https://media-exp1.licdn.com/dms/image/C4D03AQFfZOEXPOffZg/profile-displayphoto-shrink_200_200/0/1517231868765?e=1618444800&v=beta&t=b7tVtqB8u4g4BF9hQQpNI7Q8PvzTSfufa-l132JlObU",
    //     address: "XX Street Name, City, State PIN",
    //     contactEmail: "swim@test.com",
    //     isFavorite: false
    // }
]);

function setMeetups(meetupsArr){
    meetups.set(meetupsArr);
}

function addMeetup(meetup){
    if (!meetup) return;

    const newMeetup = {
        ...meetup//,
        //id: Math.random().toString(),
        //isFavorite: false
    }

    meetups.update( items => {
        // DOESN'T WORK - AS ITS NOT TRIGGERD IN SVELTE TO INFORM TO RE-RENDER
        // ASSIGNMENT IS THE TRIGGERED IN SVELTE FOR RE-RENDERING.
        // meetups.push(meetup);  
        return [newMeetup, ...items];
    } );
}

function updateMeetup(currentID, currentMeetup){
    if ( !currentID || !currentMeetup ) return;    

    meetups.update( items => {
        let currentMeetupIdx = items.findIndex( item => item.id===currentID );
        let updatedMeetup = { ...items[currentMeetupIdx], ...currentMeetup };
        let updatedMeetups = [ ...items ];
        updatedMeetups[currentMeetupIdx] = updatedMeetup;
        return updatedMeetups;
    });
}

function deleteMeetup(meetupID){
    if ( !meetupID  ) return;    

    meetups.update( items => {      
        return items.filter( items => items.id!==meetupID );         
    });
}

function updateFavorite(meetupID){
    meetups.update( items =>{
        const updatedMeetups = [...items]; // copy of origianl 'meetups' array so no mutation.
        const updateMeetup = { ...items.find( m => m.id === meetupID ) } // find the meetup which matches the id.
        const meetupIndex = items.findIndex( m => m.id === meetupID); // find the index of meetup that needs to be change.
        updateMeetup.isFavorite = !updateMeetup.isFavorite; // updating isFavorite - true -> false, false -> true
        updatedMeetups[meetupIndex] = updateMeetup; // update the object        
        return updatedMeetups;
    })
}

const meeteupStore = {
    subscribe: meetups.subscribe,
    setMeetups: (meetupArr) => setMeetups(meetupArr),
    addMeetup: (newMeetup) => addMeetup(newMeetup),
    updateMeetup: (currentID,currentMeetup) => updateMeetup(currentID,currentMeetup),
    deleteMeetup: (currentID) => deleteMeetup(currentID),
    updateFavorite: (meetupID) => updateFavorite(meetupID)
}

export default meeteupStore;
    