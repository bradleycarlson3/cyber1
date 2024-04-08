<template>
  <div class="prices-page">
    <h1 class="title">Prices for Lash Services</h1>
    <div class="price-card">
      <div class="content">
        <div class="text">
          <h2>Classic Lashes</h2>
          <p class="price">$50</p>
          <p class="description">Enhance your natural lashes with our classic lash extensions.</p>
        </div>
        <img src="@/assets/images/classic_lashes.jpg" alt="Classic Lashes" class="lash-image">
      </div>
    </div>
    <div class="price-card">
      <div class="content">
        <div class="text">
          <h2>Volume Lashes</h2>
          <p class="price">$80</p>
          <p class="description">Achieve a fuller and more dramatic look with our volume lash extensions.</p>
        </div>
        <img src="@/assets/images/volume_lashes.jpg" alt="Volume Lashes" class="lash-image">
      </div>
    </div>
    <div class="price-card">
      <div class="content">
        <div class="text">
          <h2>Hybrid Lashes</h2>
          <p class="price">$65</p>
          <p class="description">Combine classic and volume techniques for a customized lash style.</p>
        </div>
        <img src="@/assets/images/hybrid_lashes.jpg" alt="Hybrid Lashes" class="lash-image">
      </div>
    </div>
    <div class="price-card">
      <div class="content">
        <div class="text">
          <h2>Refill Lashes</h2>
          <p class="price">$40</p>
          <p class="description">Refill your lash extensions to maintain their fullness and beauty.</p>
        </div>
        <img src="@/assets/images/refill_lashes.jpg" alt="Refill Lashes" class="lash-image">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PricesPage'
}
</script>

<style scoped>
.prices-page {
  width: 100%; /* Set the width to 100% */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;
  color: black;
  padding: 60px 20px 20px; /* Adjust top padding to create space between header and title */
  overflow-y: auto; /* Enable vertical overflow */
  margin-left: auto; /* Move the container to the right */
  margin-right: auto; /* Move the container to the right */
  max-width: 1200px; /* Limit the maximum width */
}

.title {
  color: black;
  margin-bottom: 20px;
  margin-top: 20px; /* Add margin to the top */
}

.price-card {
  width: 100%;
  max-width: 1000px;
  margin: 10px 0;
}

.price-card .content {
  display: flex;
  align-items: center;
}

.price-card .text {
  flex: 1;
  margin-right: 20px;
}

.price-card h2 {
  font-size: 24px;
  margin-bottom: 10px;
}

.price-card .price {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
}

.price-card .description {
  font-size: 16px;
}

.lash-image {
  width: 100px;
  height: auto;
  border-radius: 8px;
}
</style>
