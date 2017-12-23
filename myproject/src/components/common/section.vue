<template>
    <section>
        <slider/>
        <navs/>
        <pic/>
        <eat :city="city"/>
    </section>
</template>
<script>
import slider from './section/slider'
import navs from './section/nav'
import pic from './section/pic'
import eat from './section/eat'
export default {
  name: 'Sections',
  props: ['city'],
  components: {
    slider,
    navs,
    pic,
    eat
  }
}
</script>
<style>
section{
    -webkit-flex: 1;
    overflow-y: scroll;
    background: #ffffff;
}
</style>