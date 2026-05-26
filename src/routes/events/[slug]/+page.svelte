<script>
  export let data;
</script>

<svelte:head>
  <title>{data.metadata.title} – AAPAE</title>
</svelte:head>

<section>
  <div class="wrapper">
    <div class="post">
      <header class="post-header">
        <h1 class="post-title">{data.metadata.title}</h1>
        <p class="post-meta">
          {#if data.metadata['conference-dates']}{data.metadata['conference-dates']}{/if}
          {#if data.metadata.meta} &bull; {data.metadata.meta}{/if}
        </p>
      </header>
      <article class="post-content">
        {@html data.html}
      </article>
    </div>
  </div>
</section>
