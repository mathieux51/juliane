<script>
  import initI18n from "../../lib/initI18n";
  import { stores } from "@sapper/app";
  import Layout from "../../components/Layout";
  import Main from "../../components/Main";
  const { page } = stores();
  $: i18n = initI18n($page.params.lang);
</script>

<Layout>
  <Main {i18n} />
</Layout>
