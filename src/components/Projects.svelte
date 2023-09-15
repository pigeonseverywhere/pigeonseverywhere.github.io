<script>
  import ProjectData from '../stores/ProjectData.js';
  import Icon from '@iconify/svelte';
  import { Route, link } from "svelte-routing";
  import Sunswift from "../routes/Sunswift.svelte";

  let projects = []

  ProjectData.subscribe(data => {
    projects  = data
  })
</script>

<div class="flex flex-col [&>*:nth-child(even)]:flex-row-reverse md:[&>*:nth-child(even)]:flex-col space-y-20 text-text md:justify-center md:content-center">
 
  {#each projects as project (project.name)}
  <div class="flex md:flex-col md:w-11/12 space-y-2 md:self-center">
    <div class="w-full flex">
      <!-- <ProjectCard project={project}/> -->
    {#if !project.external} 
      <img class="rounded-sm" src={project.img} alt="project icon"/>
    {:else}
    <a href={project.link}>
      <img class="rounded-sm" src={project.img} alt="project icon"/>
    </a>
    {/if}
    </div>
    <div class="px-4 mb-4 pt-2 flex flex-col items-left justify-center brightness-100 w-10/12">
      <a href={project.link}  class="flex">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-text">{project.name}</h5>
        {#if project.external} 
        <span class="text-accent">
          <Icon icon="ep:right"width="25" class="mt-1 ml-2 transition-transform ease-in-out"/>
        </span>
        {/if}
      </a>
      <p class="mb-4">
        {project.description}
      </p> 
      <div>
        {#each project.skills as skill}
        <span class="inline-block text-accent rounded-full px-4 py-1 text-sm font-semibold  mr-2 mb-2">#{skill}</span>
        {/each}
      </div>
    </div>
  </div>
  {/each}
  <a href="https://www.flaticon.com/free-icons/green-tea" title="green tea icons" class="text-text brightness-50 text-sm self-center">Cuppa and Shelves icons used from Freepik - Flaticon</a>
</div>


<style>
  a:hover span{
    transform: translate(0.25rem);
    transition-timing-function: ease-in-out;
    transition-duration: 0.2s;
  }
</style>