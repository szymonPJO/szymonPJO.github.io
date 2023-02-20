<!-- INFO: !!! TEST FIT IMAGE OR SVG, TO REMOVE IN FUTURE -->

<template>
  <div id="div-img-fit-test">
    <img
      id="img-img-fit-test"
      src="https://images.unsplash.com/photo-1575936123452-b67c3203c357"
    />
    <!-- <svg id="svg-img-fit-test">
      <image
        id="img-img-fit-test"
        preserveAspectRatio="xMidYMid slice"
        xlink:href="https://i.imgur.com/ADkTD.jpg"
      />
    </svg> -->
  </div>
</template>

<style>
#div-img-fit-test {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 120px;
  height: 120px;
  outline: 3px dashed rgb(63, 157, 235);
}
#svg-img-fit-test {
  display: block;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  width: 120px;
  height: 120px;
}
#img-img-fit-test {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
