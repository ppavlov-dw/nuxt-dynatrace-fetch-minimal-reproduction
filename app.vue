<template>
  <div>
    Number: {{ num }}<br />
    Doubled: {{ data }}<br />
    <button @click="inc">Increment</button>
  </div>
</template>

<script lang="ts" setup>
useHead({
  script: [
    {
      src: 'https://js-cdn.dynatrace.com/jstag/16362cc0dec/bf60466jbw/a0fb7df2758fbf50_complete.js',
      crossorigin: 'anonymous',
      type: 'text/javascript',
    },
    {
      src: 'ruxitagentjs_A27NVfhqrux_10269230615181503.js',
      type: 'text/javascript',
      defer: true
    },
  ],
});
const num = ref(1);
const query = computed(() => ({
  num: num.value,
}));

const { data } = useFetch('/api/double', {
  query,
  server: false,
  headers: {
    'x-test': 'test'
  }
});

const inc = () => (num.value = num.value + 1);
</script>
