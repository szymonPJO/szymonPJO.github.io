<!-- INFO: !!! TEST ALIGNMENT ELEMENT, TO REMOVE IN FUTURE -->

<template>
  <div id="element">
    <img src="..\..\..\src\blog\images\testImage.jpg" x="0" y="0" width="100" />
    <h1 id="text">text 1</h1>
  </div>
</template>

<style>
#element {
  position: relative;
  display: block;
  text-align: center;
  outline: 2px dashed red;
}

#text {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  outline: 2px solid greenyellow;
}
</style>
