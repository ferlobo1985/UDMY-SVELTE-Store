<script>
    import { count, multiply} from './stores/derived.store'
</script>

<h2>Derived store</h2>
<p>Count:{$count}</p>
<p>Multiply:{$multiply}</p>

<button on:click={()=>count.update(prev=>prev+1)}>Add one</button>