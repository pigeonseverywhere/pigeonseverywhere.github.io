<script>
  import { fade, blur, fly, slide, scale } from "svelte/transition";
  import { quintOut } from "svelte/easing";
  import { onMount } from 'svelte';

  let ready = false;

  onMount(() => {
    ready = true;
    // const reveals = document.querySelectorAll(".reveal");
    // for (var i = 0; i < reveals.length; i++) {
    //   reveals[i].classList.add("active");
    //   // setTimeout(() => reveals[i].classList.add("active"), 200)
    // }
  });
</script>





<div class="flex flex-col items-center w-full md:mx-5" >
  <div class="flex-col place-content-center">
    {#if ready}
    <h1 class="text-text text-xl brightness-75 reveal active">Hey there, I'm</h1>
    <h1 class="font-bold text-text text-4xl mb-2 reveal active">Yunshu Dai</h1>
    <h1 class="font-bold text-text text-xl brightness-75 reveal active">Software Engineer <a class="text-text font-bold transition-colors hover:text-accent hover:brightness-125" href="https://www.sunswift.com">@Sunswift Racing UNSW</a></h1>
    <h1 class="font-bold text-text text-xl brightness-75 reveal active">Part time freelance illustrator</h1>
    <h1 class="font-bold text-text text-xl brightness-75 reveal active">UNSW Computer Science/Media Arts</h1>
    <div class="justify-content-left text-text place-content-center max-w-4xl my-5 brightness-75 reveal active">
      Hey there! I'm a aspiring software engineer with a passion for <strong class="brightness-200">fullstack web development</strong> and <strong class="brightness-200">design</strong>. I love solving problems with software and crafting solutions that that are fun and functional. 
    </div>
    {/if}
  </div>
</div>

