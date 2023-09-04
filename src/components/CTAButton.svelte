<script>
  import Icon from '@iconify/svelte';

  export let message;
  export let href;
</script>


<a href={href}>
  <button type="button" class="rounded-md font-md bg-accent text-text">
    {message}
  
  </button>
</a>
