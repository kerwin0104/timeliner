const state = {
  list: [],
};

state.list.push({
  title: '测试标题',
  content: '测试内容',
  startTimestamp: +new Date(),
  endTimestamp: +new Date(),
});

export default state;
