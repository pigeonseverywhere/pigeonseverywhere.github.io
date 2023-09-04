<script>
  let count = 0
  const increment = () => {
    count += 1
  }
  import svelteLogo from './assets/svelte.svg'
</script>

<button on:click={increment}>
  count is {count}
</button>

<a href="https://svelte.dev" target="_blank" rel="noreferrer">
    <img src={svelteLogo} class="bg-sky-500 hover:bg-sky-700 rounded-full p-5 flex-1" alt="Svelte Logo" />
  </a>