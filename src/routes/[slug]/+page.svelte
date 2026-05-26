<script>
  export let data;
</script>

<svelte:head>
  <title>{data.metadata.title} – AAPAE</title>
</svelte:head>

<section class="{data.metadata.title?.toLowerCase().replace(/\s+/g, '-')}">
  <div class="wrapper">
    <div class="post">
      <header class="post-header">
        <h1 class="post-title">{data.metadata.title}</h1>
      </header>
      <article class="post-content">
        {@html data.html}
      </article>
    </div>
  </div>
</section>
