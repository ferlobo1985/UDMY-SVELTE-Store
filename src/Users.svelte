<script>
    import { onDestroy } from 'svelte';
    import counter from './stores/count.store';

    const counterUnsub = counter.subscribe( count =>{
        console.log(count)
    })

    onDestroy(()=>{
        counterUnsub();
    })

    function setNewValue(){
        counter.set(200)
    }

    function updateValue(){
        counter.update(prev=>{
            return prev + 1
        })
    }
</script>

<h3>The counter is: {$counter}</h3>
<button on:click={setNewValue}>Set new value</button>
<button on:click={updateValue}>update value</button>