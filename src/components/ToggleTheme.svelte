<script>
    import Icon from '@iconify/svelte';
  
    let darkMode = localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
    $: icon = darkMode ? "iconamoon:mode-light-fill" : "iconamoon:mode-dark-fill" 

    let animate=false;

    function handleToggle(event) {
        darkMode = !darkMode;

        localStorage.setItem('theme', darkMode ? 'dark' : 'light');

        darkMode
            ? document.documentElement.classList.add('dark')
            : document.documentElement.classList.remove('dark');

        animate = true;
        setTimeout(() => {
            animate=false;
        }, 300);
    }

    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark')
      } else {
      document.documentElement.classList.remove('dark')
      }
</script>

<!-- <button type="button" on:click={handleToggle} class="text-text focus:outline-none active:outline-none font-medium rounded-lg text-sm p-1 text-center inline-flex items-center mr-2 transition ease-in duration-600 active:-translate-y-2 active:opacity-0 opacity-100">
    <div class="text-text outline-none">
        <Icon icon={icon} width="1.5rem"/>   
    </div>
    <span class="sr-only">Toggle dark/light mode</span>
  </button> -->
  {#if animate}
  <button type="button" on:click={handleToggle} class="animate-fade toggleThemeButton">
    <div class="text-text outline-none">
        <Icon icon={icon} width="1.5rem"/>   
    </div>
    <span class="sr-only">Toggle dark/light mode</span>
  </button>
  {:else} 
  <button type="button" on:click={handleToggle} class="toggleThemeButton">
    <div class="text-text outline-none">
        <Icon icon={icon} width="1.5rem"/>   
    </div>
    <span class="sr-only">Toggle dark/light mode</span>
  </button>

  {/if}