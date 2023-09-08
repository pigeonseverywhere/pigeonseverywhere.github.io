<script>
  import ProjectCard from './components/ProjectCard.svelte';
  import ProjectData from './stores/ProjectData.js';
  import Nav from './components/Nav.svelte';
  import Hero from './components/Hero.svelte';
  import Tester from './components/tester.svelte';
  import Links from './components/Links.svelte';
  import ToggleTheme from './components/ToggleTheme.svelte';
  import Icon from '@iconify/svelte';
  import Project from './routes/Project.svelte';
  import CTAButton from './components/CTAButton.svelte';

  import { fade, blur, fly, slide, scale } from "svelte/transition";
  import { quintOut } from "svelte/easing";
  import {flip} from "svelte/animate";
  import { onMount } from 'svelte';
  import Footer from './components/Footer.svelte';
  import About from './components/About.svelte';

  let backToTopButton = null;
  let scrolled = false;
  let projects = []

  // onMount(() => {
  //   const load = document.querySelectorAll(".load");
  //    console.log('loading')
  //   for (var i = 0; i < load.length; i++) {
  //     load[i].classList.add("active");
  // }
  // });

  ProjectData.subscribe(data => {
    projects  = data
  })
  
  $: {
		if(backToTopButton) {
			if(scrolled) backToTopButton.classList.remove('hidden')
			else backToTopButton.classList.add('hidden')
		}
	}
  const reveal = () => {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 100;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

const handleTop = () => {
  if (!backToTopButton) return;
    scrolled = (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100)
}

  const handleScroll = () => {
    handleTop();
    reveal();
  }

  const scrollToTop = () => {
    window.scrollTo({top: 0, behavior: 'smooth'})
  }

</script>

<svelte:window on:scroll={handleScroll}/> 

<main>
  <Nav/>
  <section class="flex items-start justify-between">
    <!-- <Hero/> -->
    <About/>
    <!-- <ToggleTheme/> -->
  </section>
  <!-- <CTAButton message="CTA test hello" href="/"/> -->
 

    <div class="flex flex-col [&>*:nth-child(even)]:flex-row-reverse md:[&>*:nth-child(even)]:flex-col space-y-4 text-text">
      {#each projects as project (project.name)}
      <div class="flex md:flex-col reveal">
        <div class="max-w-fit flex">
          <ProjectCard project={project}/>
        </div>
        <div class="mx-4 mb-4 pt-2 flex items-center justify-center">
          <p>
            Project descriptions
          </p> 
        </div>
      </div>
      
      {/each}
    </div>

  <!-- <div class="flex justify-center space-y-4">
    <div class="grid grid-cols-3 xl:grid-cols-2 md:grid-cols-1 gap-4" >
      {#each projects as project (project.name)}
      <div class="reveal">
        <ProjectCard project={project}/>
      </div>
      {/each}
    </div>
  </div> -->

  <button bind:this={backToTopButton} on:click={scrollToTop} class="hidden sticky bottom-10 left-10 bg-transparent transition-transform ease-in hover:scale-110 float-right text-text focus:outline-none  font-medium rounded-lg text-sm p-1 text-center items-center -mr-10 xl:-mr-5">
    <Icon icon="mingcute:up-fill" width="1.5rem"/>
  </button>
  <Footer/>

</main>



