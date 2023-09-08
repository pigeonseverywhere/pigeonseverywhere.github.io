<script>
  import Icon from '@iconify/svelte';
  import ToggleTheme from './ToggleTheme.svelte';
  import placeholderLogo from '.././assets/bird.png'
</script>



<nav class="sticky top-0 z-50 bg-background bg-opacity-50">
  <div class="flex flex-wrap items-center justify-between mx-auto px-4">
    <a href="#" class="flex items-center md:hidden">
        <img src={placeholderLogo} class="h-8 mr-3" alt="Logo" />
    </a>
    <button data-collapse-toggle="navbar-default" type="button" class="hidden sm:inline-flex sm:items-center sm:p-2 sm:w-10 sm:h-10 sm:justify-center sm:text-sm  sm:rounded-lg  sm:focus:outline-none sm:focus:ring-2" aria-controls="navbar-default" aria-expanded="false">
      <span class="sr-only">Open navigation menu</span>
      <Icon icon="iconamoon:menu-burger-horizontal-bold" width="2rem"/>
    </button>
    <div class="flex w-auto justify-self-end md:hidden" id="navbar">
      <ul class="font-medium flex p-4 mt-3 rounded-lg space-x-8 border-0 ">
        <li>
          <a href="#" class="block text-text font-light brightness-75 py-2 pl-3 pr-4 rounded  hover:bg-transparent border-0 md:p-0 dark:hover:bg-transparent">ABOUT</a>
        </li>
        <li class="block py-2 text-text font-light brightness-75 align-middle md:p-0">
            //
        </li>
        <li>
          <a href="#" class="block text-text font-light brightness-75 py-2 pl-3 pr-4 rounded  hover:bg-transparent border-0  md:p-0 dark:hover:bg-transparent">SKILLS</a>
        </li>
        <li class="block py-2 text-text font-light brightness-75 align-middle md:p-0">
          //
        </li>
        <li>
          <a href="#" class="block text-text font-light brightness-75 py-2 pl-3 pr-4 rounded  hover:bg-transparent border-0  md:p-0 dark:hover:bg-transparent">PROJECTS</a>
        </li>
        <li class="block py-2 text-text font-light brightness-75 align-middle md:p-0">
          //
        </li>
        <li>
          <a href="#" class="block text-text font-light brightness-75 py-2 pl-3 pr-4 rounded  hover:bg-transparent border-0  md:p-0 dark:hover:bg-transparent">CONTACT</a>
        </li>
      </ul>
    </div>
    <div class="flex justify-self-end text-text">
      <ToggleTheme/>
    </div>
  </div>
</nav>
