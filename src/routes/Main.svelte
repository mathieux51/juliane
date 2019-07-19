<script>
  import { getContext } from "svelte";
  const { getLang } = getContext(lang);
  export let lang = getLang();
</script>

<h1>{lang}</h1>
