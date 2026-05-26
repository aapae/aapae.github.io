<script>
  export let posts = [];
  export let basePath = '';
  export let showDate = true;
  export let showMeta = false;

  function formatDate(date) {
    if (!date) return '';
    return new Date(date).toLocaleDateString('en-AU', { year: 'numeric', month: 'short', day: 'numeric' });
  }
</script>

<ul class="post-list">
  {#each posts as post}
    <li class="post">
      <h2>
        <a class="post-link" href="{basePath}/{post.slug}">{post.title}</a>
      </h2>
      {#if post['conference-dates']}
        <span class="post-meta">{post['conference-dates']}</span>
      {:else if showDate && post.date}
        <span class="post-meta">
          {formatDate(post.date)}
          {#if post.author} &bull; {post.author}{/if}
          {#if post.reviewer} &bull; {post.reviewer}{/if}
          {#if post.meta} &bull; {post.meta}{/if}
        </span>
      {/if}
    </li>
  {/each}
</ul>
