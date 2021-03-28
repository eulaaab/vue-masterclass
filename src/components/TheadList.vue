<template>
  <div class="col-full">
    <div class="thread-list">
      <h2 class="list-title">Threads</h2>
      <div v-for="thread in threads" :key="thread.id" class="thread">
        <p>
          <router-link
            :to="{ name: 'ThreadShow', params: { id: thread.id } }"
            >{{ thread.title }}</router-link
          >
        </p>
        <p class="text-faded text-xsmall">
          By <a href="#">{{ userById(thread.userId).name }}</a
          >, {{ thread.publishedAt }}
        </p>
        <div class="activity">
          <p class="replies-count">
            {{ thread.posts.length }}
          </p>

          <img
            class="avatar-medium"
            :src="userById(thread.userId).avatar"
            alt=""
          />

          <div>
            <p class="text-small">
              <a href="#">{{ userById(thread.userId).name }}</a>
            </p>
            <p class="text-small text-faded">{{ thread.publishedAt }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import sourceData from "/data.json";
export default {
  props: {
    id: {
      required: true,
      type: String,
    },
  },
  data() {
    return {
      threads: sourceData.threads,
      posts: sourceData.posts,
      users: sourceData.users,
    };
  },
  methods: {
    postById(postId) {
      return this.posts.find((p) => p.id === postId);
    },
    userById(userId) {
      return this.users.find((u) => u.id === userId);
    },
  },
};
</script>

<style>
</style>