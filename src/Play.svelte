<script>
    import { brand } from './stores/play.store';
    import { get } from 'svelte/store';

    console.log(get(brand))
</script>

<h3>The model is {$brand.model}</h3>
<input type="text" bind:value={$brand.model}>