<script>
  import Router from "svelte-spa-router";
  import Home from "./pages/Home.svelte";
  import Dashboard from "./pages/Dashboard.svelte";
  import Signup from "./pages/Signup.svelte";

  const routes = {
    "/": Home,
    "/dashboard": Dashboard,
    "/signup": Signup,
  };
</script>

<Router {routes} />
