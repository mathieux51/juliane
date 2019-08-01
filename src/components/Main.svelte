<script>
  import { getContext } from "svelte";
  const { locale } = getContext("i18n");
</script>

<style>
  .container {
    width: calc(100% - 2rem);
    height: calc(100vh - 2rem);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border-radius: 8px;
    box-shadow: 0 6px 15px 0 rgba(0, 0, 0, 0.2);
    margin: 1rem;
    padding: 2rem;
  }
  h1,
  h2 {
    text-transform: capitalize;
  }
</style>

<div class="container">
  <h1>
    <a id={locale.home} href={`#${locale.home}`}>{locale.home}</a>
  </h1>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
    non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  </p>
</div>
<div class="container">

  <h2>
    <a id={locale.nav.about} href={`#${locale.nav.about}`}>
      {locale.nav.about}
    </a>
  </h2>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
    non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  </p>
</div>
<div class="container">

  <h2>
    <a id={locale.nav.contact} href={`#${locale.nav.contact}`}>
      {locale.nav.contact}
    </a>
  </h2>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
    non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  </p>
</div>
