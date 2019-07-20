<script>
  import { getContext } from "svelte";
  const { locale, lang } = getContext("i18n");
  export let segment;
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
  .selected {
    background: papayawhip;
  }
</style>

<nav>
  <ul>
    <li>

      <a class={segment === undefined ? 'selected' : ''} href={lang}>
        {locale.nav.home}
      </a>
    </li>

    <li>

      <a
        class={segment === 'about' ? 'selected' : ''}
        href={`${lang}/${locale.nav.about}`}>
        {locale.nav.about}
      </a>
    </li>

    <li>
      <a
        class={segment === 'contact' ? 'selected' : ''}
        href={`${lang}/${locale.nav.contact}`}>
        {locale.nav.contact}
      </a>
    </li>
    <!-- for the blog link, we're using rel=prefetch so that Sapper prefetches
		     the blog data when we hover over the link or tap it on a touchscreen -->
    <!-- <li>
      <a
        rel="prefetch"
        class={segment === 'blog' ? 'selected' : ''}
        href="{}/blog">
        blog
      </a>
    </li> -->
    <li>
      <a href="/">English</a>
      <a href="/fr">French</a>
      <a href="/de">German</a>
    </li>
  </ul>
</nav>
