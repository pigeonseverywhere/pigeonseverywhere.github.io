<script>
  import Icon from '@iconify/svelte';
  import { theme } from '../stores/Config';
  
  let isLight;
  theme.subscribe((data)=> {
    data === 'light' ? isLight = true : isLight = false;
  })
</script>


<!-- Foooter -->
<section class="bg-background brightness-110 w-screen absolute flex content-center left-0 mt-20 py-20 text-text">
  <div class="px-4 py-12 mx-auto overflow-hidden">
      <div class="flex justify-center space-x-4 dim">
          <a href="#" class:lightenText={isLight} class="text-text hover:scale-110 transition-all">
              <span class="sr-only">GitHub</span>
              <Icon icon="mdi:github" width="1.5rem"/>
          </a>
          <a href="#" class:lightenText={isLight} class="text-text hover:scale-110 transition-all">
              <span class="sr-only">Linkedin</span>
              <Icon icon="mdi:linkedin" width="1.5rem"/>
          </a>
          <a href="#" class:lightenText={isLight} class="text-text hover:scale-110 transition-all">
            <span class="sr-only">GitHub</span>
            <Icon icon="mdi:email-send-outline" width="1.5rem" />
        </a>
      </div>
      <p class:lightenText={isLight} class="mt-6 leading-6 text-xl font-bold dim text-text">
        Designed and built by Yunshu Dai
      </p>
      <p class:lightenText={isLight} class="leading-6 text-sm text-center dim text-text">
          Made with Svelte and TailwindCSS
      </p>
  </div>
</section>


<style>
  .lightenText { 
  color: #5c5c59;
  }
</style>