<template>
  <div class="about">
    <h1>timeliner</h1>
    <div class="timeline-box">
      <div class="timeline-detail">
        <div class="timeline-line">
          <h5>萌萌的8月timeline</h5>
        </div>
        <div class="timeline-item-box">
          <div class="timeline-item">
            <h6>小班5.0</h6>
            <div class="timeline-item-content">
              <div class="timeline-item-content-text">
                小班5.0项目需求制作
              </div>
              <div class="timeline-item-content-date">
                8.20-8.23
              </div>
            </div>
          </div>
          <div class="timeline-item"
              v-for="(task, index) in taskList"
              :key="index"
              >
              <h6>{{task.title}}</h6>
            <div class="timeline-item-content">
              <div class="timeline-item-content-text">
                {{task.content}}
              </div>
              <div class="timeline-item-content-date">
                {{task.startTimestamp}}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less">
.bgcolor1 {
  background-color: #007bff;
}
.bgcolor2 {
  background-color: #17a2b8;
}
.bgcolor3 {
  background-color: #ffc107;
}
.bgcolor4 {
  background-color: #dc3545;
}
.timeline-line {
  background-color: #28a745;
  background-image: linear-gradient(
      45deg,
      rgba(255,255,255,.15) 25%,
      transparent 25%,transparent 50%,
      rgba(255,255,255,.15) 50%,
      rgba(255,255,255,.15) 75%,
      transparent 75%,
      transparent
    );
  background-size: 20px 20px;
  border-radius: 3px;
  width: 100%;
  height: 50px;
  line-height: 50px;
  color: #fff;
  font-size: 24px;
  margin-bottom: 15px;
  box-shadow: 0 0 10px #999;
}
.timeline-item {
  margin-top: 5px;
  width: 200px;
  border-radius: 3px;
  overflow: hidden;
  border: 1px solid #ccc;
  box-shadow: 0 0 10px #ccc;
  h6 {
    margin: 0;
    height: 28px;
    line-height: 28px;
    font-size: 16px;
    border-bottom: 1px solid #ccc;
    background-color: #f3f4f6;
  }
  .timeline-item-content {
    border-radius: 3px;
    border-top: 0px;
    padding: 5px;
    font-size: 14px;
    .timeline-item-content-text {
      padding: 5px;
      color: #333;
      text-align: left;
    }
    .timeline-item-content-date {
      text-align: right;
      padding: 0 5px;
      color: #000;
    }
  }
}
</style>

<script>
import { mapState } from 'vuex';

export default {
  name: 'About',
  computed: {
    ...mapState({
      taskList: (state) => state.task.list,
    }),
  },
  mounted() {
  },
};
</script>
