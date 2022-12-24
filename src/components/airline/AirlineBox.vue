<template>
  <div class="card w-100 h-100">
    <div class="embed-responsive">
      <img
        class="card-img-top"
        src="https://images.squarespace-cdn.com/content/v1/5b989c06e2ccd197e85cc797/1574639810264-E3IBGH4B9SDTC9K9VC7L/airline-digital-transformat.jpg"
        alt="airline image"
      />
    </div>
    <div class="card-body">
      <h5 class="card-title">Name: {{ airline.name }}</h5>
      <p class="card-text">Location: {{ airline.address }}</p>
      <router-link :to="{name: 'EditAirline', params: {id: airline.id}}">
      <a href="#" class="btn btn-primary">Edit</a>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  props: ["airline"],
  methods: {},
};
</script>
<style>
.card-img-top{
  object-fit: cover;
}
</style>
