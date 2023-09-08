<script>
  import { fade, blur, fly, slide, scale } from "svelte/transition";
  import { quintOut } from "svelte/easing";
  import { onMount } from 'svelte';

  let ready = false;

  onMount(() => {
    ready = true;
    const reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
      reveals[i].classList.add("active");
      // setTimeout(() => reveals[i].classList.add("active"), 200)
    }
  });
</script>





<div class="flex flex-col items-center text-left w-full my-5 md:mx-5" >
    {#if ready}
    <!-- <h1 class="text-text text-xl brightness-75 reveal">HI, I'M</h1> -->
    <h1 class="font-bold font-sourcesans tracking-wide text-text text-6xl mb-2 reveal">Hi, I'm Yunshu Dai</h1>
    <h1 class="font-bold text-text text-xl brightness-75 reveal ">Software Engineer <a class="text-text font-bold transition-colors hover:text-accent hover:brightness-125" href="https://www.sunswift.com">@Sunswift Racing UNSW,</a></h1>
    <h1 class="font-bold text-text text-xl brightness-75 reveal">Part time freelance illustrator,</h1>
    <h1 class="font-bold text-text text-xl brightness-75 reveal">UNSW Computer Science/Media Arts</h1>
    {/if}
</div>