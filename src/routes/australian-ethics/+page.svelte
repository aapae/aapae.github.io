<script>
  import PostList from '$lib/components/PostList.svelte';
  export let data;
</script>

<svelte:head>
  <title>Australian Ethics – AAPAE</title>
</svelte:head>

<section>
  <div class="wrapper">
    <div class="post">
      <header class="post-header">
        <h1 class="post-title">Australian Ethics</h1>
      </header>
      <PostList posts={data.posts} basePath="/australian-ethics" />
    </div>
  </div>
</section>
