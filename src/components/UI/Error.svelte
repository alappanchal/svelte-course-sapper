<script>
    import Modal from "./Modal.svelte";

    export let errorMessage;
</script>

<Modal title="An error occured" on:cancelModal>
    <p>{errorMessage}</p>
</Modal>

