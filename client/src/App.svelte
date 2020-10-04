<script>
  import Router from "svelte-spa-router";
  import Home from "./pages/Home.svelte";
  import Dashboard from "./pages/Dashboard.svelte";
  import Signup from "./pages/Signup.svelte";
  import Navbar from "./components/Navbar.svelte";
  import Login from "./pages/Login.svelte";
  const routes = {
    "/": Home,
    "/dashboard": Dashboard,
    "/signup": Signup,
    "/login": Login,
  };
</script>

<Navbar />
<Router {routes} />
