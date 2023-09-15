<script>

  import { Router, Link, Route } from "svelte-routing";
  import Landing from "./routes/Landing.svelte";
  import { fade, blur, fly, slide, scale } from "svelte/transition";
  
  

  
  import Sunswift from './routes/Sunswift.svelte';
  import Nav from "./components/Nav.svelte";

  export let url = ""
</script>

<Router {url}>
  <Nav/>
  <Route path="/sunswift" component={Sunswift} />
  <Route path="/"><Landing/></Route>

  </Router>