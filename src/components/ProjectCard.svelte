<script>
    export let project;
</script>


<div class="max-w-sm max-h-sm bg-background brightness-110 rounded-lg shadow md:w-10/12 dark:bg-gray-800 min-w-100 text-text -translate-y-3 transition-transform hover:translate-y-0 hover:shadow-none">
    <a href={project.link}>
        <img class="rounded-t-lg w-50" src={project.img} alt="project icon" />
    </a>
    <div class="p-5">
        <a href="/">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-text">{project.name}</h5>
        </a>
        {#each project.skills as skill}
            <span class="inline-block bg-secondary text-accent rounded-full px-3 py-1 text-sm font-semibold  mr-2 mb-2">#{skill}</span>
        {/each}
       
    </div>
</div>

