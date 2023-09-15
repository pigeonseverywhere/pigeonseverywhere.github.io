<script>
  import Nav from './components/Nav.svelte';
  import Icon from '@iconify/svelte';

  import { fade, blur, fly, slide, scale } from "svelte/transition";

  import Footer from './components/Footer.svelte';
  import About from './components/About.svelte';
  import Projects from './components/Projects.svelte';

  let backToTopButton = null;
  let scrolled = false;

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

<main class="snap-mandatory snap-y">
  <Nav/>
  <section id="about" class="flex flex-col items-start justify-items-center w-full snap-start snap-always">
    <About/>
  </section>
 
  <section id="projects" class="snap-start snap-always">
    <h1 class="font-bold font-sourcesans tracking-wide text-text text-6xl mb-2 px-5 pb-10">Projects</h1>
    <Projects/>
  </section>


  <button bind:this={backToTopButton} on:click={scrollToTop} class="hidden sticky bottom-10 float-right mr-20 md:mr-5 bg-transparent transition-transform ease-in hover:scale-110 text-text focus:outline-none  font-medium rounded-lg text-sm p-1 text-center items-center">
    <Icon icon="mingcute:up-fill" width="1.5rem"/>
  </button>
  <Footer/>

</main>



<style>
  section {
    padding: 0 20%;
  }
  @media screen and (max-width: 500px) {
    section {
    margin: 0;
    padding: 0 2rem;
    }
  }
  @media screen and (max-height: 920px) {
    section {
      margin-top: 5rem;
    }
  }
</style>