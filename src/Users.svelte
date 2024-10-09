<script>
    import { onDestroy } from 'svelte';
    import counter from './stores/count.store';
    import timer from './stores/readable.store';

    const counterUnsub = counter.subscribe( count =>{
        console.log(count)
    })

    onDestroy(()=>{
        counterUnsub();
    })
</script>

<h3>The counter is: {$counter}</h3>
<button on:click={()=>counter.setNew(200)}>Set new value</button>
<button on:click={counter.addOne}>update value</button>
<button on:click={counter.minusOne}>Minus one</button>
<h4>Timer:{$timer}</h4>