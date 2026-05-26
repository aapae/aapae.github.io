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
          {#if data.metadata.date}{new Date(data.metadata.date).toLocaleDateString('en-AU', { year: 'numeric', month: 'short', day: 'numeric' })}{/if}
          {#if data.metadata.author} &bull; {data.metadata.author}{/if}
          {#if data.metadata.reviewer} &bull; {data.metadata.reviewer}{/if}
          {#if data.metadata.meta} &bull; {data.metadata.meta}{/if}
        </p>
      </header>
      <article class="post-content">
        {@html data.html}
      </article>
    </div>
  </div>
</section>
