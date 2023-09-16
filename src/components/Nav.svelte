<script>
  import Icon from '@iconify/svelte';
  import ToggleTheme from './ToggleTheme.svelte';
  import darkLogo from '.././assets/YD_white.svg'
  import lightLogo from '.././assets/YD.svg'
  import { theme } from '../stores/Config';
  import Links from './Links.svelte';
  import { link } from 'svelte-routing';

  let scrolled = (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100)
  let navInView = (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300)

  // <div class="flex flex-wrap items-center w-full mx-auto px-4" class:justify={!scrolled}>
    let isLight;
  theme.subscribe((data)=> {
    data === 'light' ? isLight = true : isLight = false;
  })

  const handleScroll = () => {
    scrolled = (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100)
    navInView = (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300)

}
</script>

<svelte:window on:scroll={handleScroll}/> 


<nav class="sticky flex text-text top-0 z-50 backdrop-blur-sm bg-opacity-50 transition-all duration-500 ease-out px-5 pt-5 md:pt-2 md:pb-2" class:align={!scrolled}>
  <a href="/" use:link replace class="flex items-center">
        <img src={isLight ? lightLogo : darkLogo} class="h-8 pr-3" alt="Logo" width="50"/>
  </a>
    
  <div class="flex flex-wrap justify-end items-center w-full pl-4">
    <button data-collapse-toggle="navbar-default" type="button" class="hidden sm:hidden sm:items-center sm:p-2 sm:w-10 sm:h-10 sm:justify-center sm:text-sm  sm:rounded-lg  sm:focus:outline-none sm:focus:ring-2" aria-controls="navbar-default" aria-expanded="false">
      <span class="sr-only">Open navigation menu</span>
      <Icon icon="iconamoon:menu-burger-horizontal-bold" width="2rem"/>
    </button>
    {#if navInView}
      <Links/>
    {/if}
    <ToggleTheme/>
  </div>
</nav>


<style>
  .align { 
    margin: 0 18%;
  }
  @media screen and (max-width: 1100px) {
    .align {
    margin: 0 10%;
    }
  }
  @media screen and (max-width: 700px) {
    .align {
    margin: 0
    }
  }

</style>
