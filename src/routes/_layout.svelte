<script context="module">
  export async function preload(page) {
    const DEFAULT_LANGUAGE = "en";
    if (page.path === "/") {
      return this.redirect(302, `/${DEFAULT_LANGUAGE}`);
    }
    return {};
  }
</script>

<slot />
