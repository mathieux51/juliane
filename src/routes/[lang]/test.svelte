<script context="module">
  /*
  IF YOU EDIT THIS COMPONENT, DON'T FORGET TO EDIT:
    - index.svelte
    - en.svelte
    - de.svelte
    - fr.svelte
  */
  import getLang from "../../lib/getLang";
  import locale from "../../i18n/de.js";
  export async function preload(page, session) {
    return { ...getLang(page.params) };
  }
</script>

<script>
  import { setContext, onMount } from "svelte";
  import Layout from "../../components/Layout";

  export let lang;
  export let locale;
  onMount(async () => {
    const { default: l } = await import(`../../i18n/${lang}.js`);
    locale = l;
    setContext("i18n", {
      lang,
      locale
    });
  });

  // Check if it works with variable lang and/or locale
  import { getContext } from "svelte";
</script>

{#if typeof locale !== 'undefined'}
  <h1>test lang: {lang}</h1>
  <h2>locale</h2>
  <pre>{JSON.tringify(locale, null, 2)}</pre>
{:else}
  <p>Loading...</p>
{/if}
