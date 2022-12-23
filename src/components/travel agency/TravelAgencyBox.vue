<template>
  <div class="card h-100 w-100">
    <div class="embed-responsive">
      <img
        class="card-img-top"
        src="https://i.onthe.io/smngoz18vj2k8f7se8.463490c3.jpg"
        alt="airline image"
      />
    </div>
    <div class="card-body">
      <h5 class="card-title">Name: {{ agency.name }}</h5>
      <p class="card-text">Address: {{ agency.address }}</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>
</template>
<script>
export default {
    props: ["agency"],
     methods: {},
}
</script>
<style>
.card-img-top{
  object-fit: cover;
}
</style>
