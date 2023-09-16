<script>
  function scrollIntoView({ target }) {
		const el = document.querySelector(target.getAttribute('href'));
    if (target.getAttribute('id') === "contact-link"){
      window.location.href = "mailto:yunshudai2010@gmail.com";
    } else if (!el) {
      return;
    } else {
      el.scrollIntoView({
      behavior: 'smooth'
    });
    }
  }

</script>

<div class="flex w-auto pr-4 md:hidden" id="nav-links">
  <ul class="font-medium flex rounded-lg space-x-4 border-0 ">
    <li>
      <a href="#about" on:click|preventDefault={scrollIntoView} class="block text-text brightness-75 py-2 rounded  hover:bg-transparent border-0 md:p-0 dark:hover:bg-transparent">About</a>
    </li>
    <li class="block py-2 text-text brightness-75 align-middle md:p-0">
        //
    </li>
    <li>
      <a href="#projects" on:click|preventDefault={scrollIntoView} class="block text-text brightness-75 py-2 rounded  hover:bg-transparent border-0  md:p-0 dark:hover:bg-transparent">Projects</a>
    </li>
    <li class="block py-2 text-text brightness-75 align-middle md:p-0">
      //
    </li>
    <li>
      <a id="contact-link" href="mailto:yunshudai2010@gmail.com" class="block text-text  brightness-75 py-2 rounded  hover:bg-transparent border-0  md:p-0 dark:hover:bg-transparent">Contact</a>
    </li>
  </ul>
</div>