<script>
  export let data;
</script>

<svelte:head>
  <title>Blog – AAPAE</title>
</svelte:head>

<section>
  <div class="wrapper">
    <div class="post">
      <header class="post-header">
        <h1 class="post-title">AAPAE Blog</h1>
      </header>
      <ul class="post-list">
        {#each data.posts as post}
          <li class="post">
            <h2>
              <a class="post-link" href="/{post.categories}/{post.slug}">{post.title}</a>
            </h2>
            {#if post.date}
              <span class="post-meta">
                {new Date(post.date).toLocaleDateString('en-AU', { year: 'numeric', month: 'short', day: 'numeric' })}
              </span>
            {/if}
          </li>
        {/each}
      </ul>
    </div>
  </div>
</section>
