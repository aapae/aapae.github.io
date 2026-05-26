<script>
  import PostList from '$lib/components/PostList.svelte';
  export let data;
</script>

<svelte:head>
  <title>Publications – AAPAE</title>
</svelte:head>

<section>
  <div class="wrapper">
    <div class="post">
      <header class="post-header">
        <h1 class="post-title">Publications</h1>
      </header>
      <h2>Articles</h2>
      <PostList posts={data.articles} basePath="/australian-ethics" />
      <h2>Reviews</h2>
      <PostList posts={data.reviews} basePath="/book-reviews" />
    </div>
  </div>
</section>
