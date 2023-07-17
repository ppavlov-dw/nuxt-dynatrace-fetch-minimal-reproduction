export default defineEventHandler((e) => {
  const { num } = getQuery<{ num: number }>(e);

  return num * 2;
});
