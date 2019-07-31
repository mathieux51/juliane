<script context="module">
  /*
  IF YOU EDIT THIS COMPONENT, DON'T FORGET TO EDIT:
    - index.svelte
    - en.svelte
    - de.svelte
    - fr.svelte
  */
  import getLang from "../lib/getLang";
  import locale from "../i18n/en.js";
  export async function preload(page, session) {
    return { ...getLang(page.params) };
  }
</script>

<script>
  import Root from "../components/Root";
</script>

<Root lang={'en'} {locale} />
