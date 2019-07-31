<script>
  import { setContext } from "svelte";
  import Main from "./Main";
  import Layout from "./Layout";
  export let lang;
  export let locale;

  // Check if it works with variable lang and/or locale
  setContext("i18n", {
    lang,
    locale
  });
</script>

<Layout>
  <Main />
</Layout>
