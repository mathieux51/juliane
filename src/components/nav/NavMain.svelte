<script>
  import initI18n from "../../lib/initI18n";
  import { stores } from "@sapper/app";
  const { page } = stores();
  $: lang = $page.params.lang;
  $: i18n = initI18n(lang);
  $: path = $page.path;
  $: pathWithoutLang = $page.path
    .split("/")
    .slice(2)
    .join("/");
</script>

<style>
  ul {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
  }
  li {
    flex: 1;
    text-align: center;
  }
</style>

<nav>
  <ul>
    <li>

      <a class={path === `/${lang}` ? 'selected' : ''} href={lang}>
        {i18n.t('nav:home')}
      </a>
    </li>

    <li>
      <a
        class={path === `/${lang}/about` ? 'selected' : ''}
        href="{lang}/about">
        {i18n.t('nav:about')}
      </a>
    </li>

    <li>
      <a
        class={path === `/${lang}/contact` ? 'selected' : ''}
        href="{lang}/contact">
        {i18n.t('nav:contact')}
      </a>
    </li>
    <li>
      <a href="/">English</a>
      <a href="/fr">French</a>
      <a href="/de">German</a>
    </li>
  </ul>
</nav>
