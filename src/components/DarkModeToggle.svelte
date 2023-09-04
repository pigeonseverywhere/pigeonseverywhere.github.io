<script>
    import Icon from '@iconify/svelte';
</script>

<label class="relative inline-flex items-center cursor-pointer">
    <input type="checkbox" value="" class="sr-only peer">
    <div class="flex justify-between items-center p-1 w-14 h-7 bg-gray-200  rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all dark:border-gray-600 peer-checked:bg-accent">
        <div class="text-text">
            <Icon icon="tdesign:mode-dark" />    
        </div>
        <div class="text-text">
            <Icon icon="tdesign:mode-light"/>
        </div>
    </div>
    <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Toggle {localStorage.getItem("theme") === "dark" ? "Light" : "Dark"} Mode</span>
</label>