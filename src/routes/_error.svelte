<script>
  export let status;
  export let error;

  const dev = process.env.NODE_ENV === "development";
</script>

<style>
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 1rem;
  }
  nav {
    display: flex;
    flex-direction: column;
  }
  a {
    text-decoration: none;
    border: 1px solid;
    border-radius: 4px;
    padding: 1rem;
    margin: 2px;
  }
  pre {
    width: 100%;
    overflow-x: scroll;
  }
</style>

<div class="container">
  <h1>{error.message}: {status}</h1>
  <nav>
    <a href="/">Oups!!! Something went wrong.</a>
    <a href="/fr">Aïe aïe aïe. Un problème est survenu</a>
    <a href="/de">Ach!!!. Etwas ist schief gelaufen</a>
  </nav>

  {#if dev && error.stack}
    <pre>{error.stack}</pre>
  {/if}

</div>
