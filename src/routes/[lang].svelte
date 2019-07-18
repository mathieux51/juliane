<script context="module">
  import getLang from "../lib/getLang";

  export async function preload(page, session) {
    return getLang(page.params);
  }
</script>

<script>
  export let lang;
</script>

<h1>Slug {lang}</h1>
