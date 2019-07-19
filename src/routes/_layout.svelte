<script context="module">
  import getLang from "../lib/getLang";

  export async function preload(page, session) {
    console.log(page);
    const lang = getLang(page.params);
    console.log(lang);
    return lang;
  }
</script>

<script>
  import { setContext } from "svelte";
  import Nav from "../components/Nav.svelte";

  export let lang;
  export let segment;

  setContext(lang, {
    getLang: () => lang
  });
</script>

<style>

</style>

<Nav {lang} {segment} />
