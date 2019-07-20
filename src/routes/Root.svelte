<script>
  import { setContext } from "svelte";
  import Main from "./Main.svelte";
  import Layout from "./Layout.svelte";
  export let lang;
  export let locale;

  console.log(locale);
  // Check if it works with variable lang and/or locale
  setContext("i18n", {
    lang,
    locale
  });
</script>

<Layout>
  <Main />
</Layout>
