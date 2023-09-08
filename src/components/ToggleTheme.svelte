<script>
    import Icon from '@iconify/svelte';
  import { writable } from 'svelte/store';
  import { theme } from '../stores/Config';
  
    let darkMode = localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
    $: icon = darkMode ? "iconamoon:mode-light-fill" : "iconamoon:mode-dark-fill" 

    let animate=false;

    function handleToggle(event) {
        darkMode = !darkMode;

        localStorage.setItem('theme', darkMode ? 'dark' : 'light');

        if (darkMode) {
          document.documentElement.classList.add('dark');
          theme.set('dark')
        } else {
          document.documentElement.classList.remove('dark');
          theme.set('light')
        }

        animate = true;
        setTimeout(() => {
            animate=false;
        }, 300);
    }

    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
      } else {
      document.documentElement.classList.remove('dark');
      }
</script>
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