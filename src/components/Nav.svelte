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

  let dropdownOpen = false;

  let isLight;
  theme.subscribe((data)=> {
    data === 'light' ? isLight = true : isLight = false;
  })

  const handleScroll = () => {
    scrolled = (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100)
    navInView = (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300)
}
function scrollIntoView({ target }) {
		const el = document.querySelector(target.getAttribute('href'));
    if (target.getAttribute('id') === "contact-link"){
      window.location.href = "mailto:yunshudai2010@gmail.com";
    } else if (!el) {
      return;
    } else {
      el.scrollIntoView({
      behavior: 'smooth'
    });
    }
  }

const toggleDropDown = () => {
  dropdownOpen = !dropdownOpen
}
</script>

<svelte:window on:scroll={handleScroll}/> 


<nav class="sticky flex text-text top-0 z-50 backdrop-blur-sm bg-opacity-50 transition-all duration-500 ease-out px-5 pt-5 md:pt-2 md:pb-2" class:align={!scrolled}>
  <a href="/" use:link replace class="flex items-center">
        <img src={isLight ? lightLogo : darkLogo} class="h-8 pr-3" alt="Logo" width="50"/>
  </a>
    
  <div class="flex flex-wrap justify-end items-center w-full pl-4">
    <div>
      <button on:click={toggleDropDown} data-collapse-toggle="dropdown" type="button"  class="hidden sm:block sm:items-center sm:p-2 sm:w-10 sm:h-10 sm:justify-center sm:text-sm  sm:rounded-lg  sm:focus:outline-none sm:focus:ring-2" aria-controls="navbar-default" aria-expanded="false">
        <span class="sr-only">Open navigation menu</span>
        <Icon icon="iconamoon:menu-burger-horizontal-bold" width="20"/>
      </button>
      <div id="dropdown" class:hidden={!dropdownOpen} class="absolute divide-y w-auto backdrop-blur-sm bg-background bg-opacity-50 p-2 rounded-sm">
        <ul class="font-medium flex flex-col rounded-lg border-0 space-y-2 ">
          <li class="hover:brightness-150">
            <a href="#about" on:click|preventDefault={scrollIntoView} class="block text-text brightness-75 py-2 rounded  hover:bg-transparent border-0 md:p-0 dark:hover:bg-transparent">About</a>
          </li>
          <li class="hover:brightness-150">
            <a href="#projects" on:click|preventDefault={scrollIntoView} class="block text-text brightness-75 py-2 rounded  hover:bg-transparent border-0  md:p-0 dark:hover:bg-transparent">Projects</a>
          </li>
          <li class="hover:brightness-150">
            <a id="contact-link" href="mailto:yunshudai2010@gmail.com" class="block text-text  brightness-75 py-2 rounded  hover:bg-transparent border-0  md:p-0 dark:hover:bg-transparent">Contact</a>
          </li>
        </ul>
      </div>
      
    </div>
   
    {#if navInView}
      <Links/>
    {/if}
    <ToggleTheme/>
  </div>
</nav>



<style>
  .align { 
    margin: 0 24%;
  }
  @media screen and (max-width: 1200px) {
    .align {
    margin: 0 15%;
    }
  }
  @media screen and (max-width: 700px) {
    .align {
    margin: 0
    }
  }
  .hidden {
    display: hidden;
  }
  @media screen and (min-width: 700px) {
    .hidden {
      display: hidden;
    }
  }


</style>
