<template>
  <div class="hello">
    <h1>aasw</h1>
  </div>
</template>

<script>
export default {
    name: 'CheckMobile',
    data() {
    	return {
    		isMobile: false,
    	}
    },
    methods: {
        isMobile() {
      		if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
      			this.isMobile = true;
			} else {
				this.isMobile = false;
			}
    	},
   	},
    created() {
        this.isMobile();
    }
}
</script>