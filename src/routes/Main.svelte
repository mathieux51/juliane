<script>
  import { getContext } from "svelte";
  const { locale } = getContext("i18n");
</script>

<h1>{locale.home}</h1>
