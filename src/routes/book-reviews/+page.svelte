<script>
  import PostList from '$lib/components/PostList.svelte';
  export let data;
</script>

<svelte:head>
  <title>Book Reviews – AAPAE</title>
</svelte:head>

<section>
  <div class="wrapper">
    <div class="post">
      <header class="post-header">
        <h1 class="post-title">Book Reviews</h1>
      </header>
      <PostList posts={data.posts} basePath="/book-reviews" />
    </div>
  </div>
</section>
