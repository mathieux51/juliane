<script context="module">
  import getLang from "../lib/getLang";

  export async function preload(page, session) {
    return getLang(page.params);
  }
</script>

<script>
  export let lang;
  export let segment;
</script>

<style>
  ul {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 50vw;
  }
  li {
    flex: 1;
  }
  .selected {
    background: papayawhip;
  }
</style>

<nav>
  <ul>
    <li>
      <a class={segment === undefined ? 'selected' : ''} href="{lang}/.">
        home
      </a>
    </li>

    <li>
      <a class={segment === 'about' ? 'selected' : ''} href="{lang}/about">
        about
      </a>
    </li>

    <li>
      <a class={segment === 'contact' ? 'selected' : ''} href="{lang}/contact">
        contact
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
      <select>
        <option value="en">English</option>
        <option value="de">German</option>
      </select>
    </li>
  </ul>
</nav>
