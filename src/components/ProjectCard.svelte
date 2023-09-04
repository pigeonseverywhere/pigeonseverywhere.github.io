<script>
    import placeholder from "../assets/project_placeholder.png"

    export let project;
</script>


<div class="max-w-sm bg-background brightness-110 rounded-lg shadow dark:bg-gray-800 min-w-100 h-500 text-text">
    <a href="#">
        <img class="rounded-t-lg" src={placeholder} alt="" />
    </a>
    <div class="p-5">
        <a href="/Project">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-text">{project.name}</h5>
        </a>
        <p class="mb-3 font-normal ">{project.description}</p>
        {#each project.skills as skill}
            <span class="inline-block bg-secondary text-accent rounded-full px-3 py-1 text-sm font-semibold  mr-2 mb-2">#{skill}</span>
        {/each}
       
    </div>
</div>

