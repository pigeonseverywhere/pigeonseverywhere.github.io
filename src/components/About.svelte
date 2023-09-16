<script>
  import lightLogo from "../assets/YD.svg"
  import darkLogo from "../assets/YD_white.svg"
  import { theme } from "../stores/Config";
  import Icon from '@iconify/svelte';

  let inView = false;
  let isLight;

  theme.subscribe((data)=> {
    data === 'light' ? isLight = true : isLight = false;
  })

  // const handleClick = (from) => {
  //   switch (from) {
  //     case 'projects': 
  //       window.location.href = "#projects";
  //       break;
  //     case 'contact':
  //       window.location.href = "mailto:yunshudai2010@gmail.com";
  //       break;
  //   }
  // }
  function handleClick(target) {
		const el = document.querySelector(target);
    if (target === "contact") {
      window.location.href = "mailto:yunshudai2010@gmail.com";
    } else if (!el) {
      return;
    } else {
      el.scrollIntoView({
      behavior: 'smooth'
    });
    }
  }

  
  function actionWhenInViewport(e) {
  const observer = new IntersectionObserver(entries => {
    if(entries[0].isIntersecting) {
      console.log("in view")
    }
  });
  observer.observe(e);
}
</script>



<div class="w-full flex flex-col justify-between pt-40 2xl:pt-40  sm:pt-40 align-center md:px-5 h-screen md:flex-col tall:pt-64 ">
  <div class="flex justify-center md:flex-col">
    <img src={isLight ? lightLogo : darkLogo} alt="logo" class="hidden md:block w-11/12 md:-mt-60">
    <div class="flex flex-col">
      <div use:actionWhenInViewport class:active={inView} class="reveal">
        <h1 class="font-bold font-sourcesans tracking-wide text-text text-6xl md:text-4xl mb-2">Hi, I'm Yunshu Dai</h1>
      </div>
      <div use:actionWhenInViewport class:active={inView} class="reveal">
        <h1 class="font-bold text-text text-xl brightness-75 ">Software Engineer <a class="text-text font-bold transition-colors hover:text-accent hover:brightness-125" href="https://www.sunswift.com">@Sunswift Racing UNSW</a></h1>
      </div>
      <div use:actionWhenInViewport class:active={inView} class="reveal">
        <h1 class:active={inView} class="font-bold text-text text-xl brightness-75 reveal">Part time freelance illustrator</h1>
      </div>
      <div use:actionWhenInViewport class:active={inView} class="reveal">
        <h1 class="font-bold text-text text-xl brightness-75 reveal">UNSW Computer Science/Media Arts</h1>
      </div>
      <!-- <Links/> -->
      <div class="flex space-x-3 py-5">
        <button id="#projects" on:click|preventDefault={()=>handleClick('#projects')} class="text-text rounded-md bg-background brightness-200 flex pointer-events-all">
          Projects
          <span>
            <Icon icon="ep:right"width="20" class="text-accent mt-0.5 ml-2 transition-transform ease-in-out"/>
          </span>
        </button>
        <button on:click={()=>handleClick('contact')} class="text-text rounded-md bg-background brightness-200 flex">
          Contact
          <span>
            <Icon icon="ep:right"width="20" class="text-accent mt-0.5 ml-2 transition-transform ease-in-out"/>
          </span>
        </button>
      </div>
      
    </div>
    <img src={isLight ? lightLogo : darkLogo} alt="logo" class="self-start pl-10 -mt-5 md:hidden" width="300">
  </div>
  <a href="#projects" class="hidden self-center text-text brightness-75 py-2 rounded  hover:bg-transparent tall:flex flex-col align-center items-center -translate-y-52 lg:-translate-y-40 lg:hover:-translate-y-36 hover:-translate-y-48 transition-transform ease-in-out duration-700">
    <Icon icon="mingcute:down-fill" width="20"/>
  </a>
 
</div>

<style>
  button:hover span{
    transform: translate(0.25rem);
    transition-timing-function: ease-in-out;
    transition-duration: 0.2s;
  }
</style>