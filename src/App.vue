<template>
  <div id="app">
    <Header/>
    <div class="score-container fullscreen">
      <div class="arrow-left"></div>
      <div class="arrow-right"></div>
      <div class="main-content-bar max-height" data-max-height-selector="body">
        <div class="main-content-space fullheight clearfix">
          <div class="main-content-loading loading">
            <div class="mask"></div>
            <div class="sk-fading-circle">
              <div class="sk-circle1 sk-circle"></div>
              <div class="sk-circle2 sk-circle"></div>
              <div class="sk-circle3 sk-circle"></div>
              <div class="sk-circle4 sk-circle"></div>
              <div class="sk-circle5 sk-circle"></div>
              <div class="sk-circle6 sk-circle"></div>
              <div class="sk-circle7 sk-circle"></div>
              <div class="sk-circle8 sk-circle"></div>
              <div class="sk-circle9 sk-circle"></div>
              <div class="sk-circle10 sk-circle"></div>
              <div class="sk-circle11 sk-circle"></div>
              <div class="sk-circle12 sk-circle"></div>
            </div>
          </div>
          <div class="disclaimer-container"></div>
            <Prefeitos/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from './components/Header'
import Prefeitos from './components/Prefeitos'

export default {
  name: 'App',
  data () {
    return {
      apiPrefeitos: [],
      apiVereadores: []
    }
  },
  components: {
    Header,
    Prefeitos,
  }
}
</script>

