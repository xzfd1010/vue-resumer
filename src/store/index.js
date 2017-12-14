import Vue from 'vue'
import Vuex from 'vuex'
import objectPath from 'object-path';

Vue.use(Vuex);
export default new Vuex.Store({
  state: {
    selected: 'profile',
    resume: {
      config: [
        {field: 'profile', icon: 'id'},
        {field: 'workHistory', icon: 'work'},
        {field: 'education', icon: 'book'},
        {field: 'projects', icon: 'heart'},
        {field: 'awards', icon: 'cup'},
        {field: 'contacts', icon: 'phone'},
      ],
      profile: {
        name: 'Nick',
        city: 'Beijing',
        title: 'Front-end Developer',
        birthday: '1992-05-08'
      },
      workHistory: [{
        company: '鸡飞狗跳公司',
        content: `公司总部设在XXXX区，先后在北京、上海成立分公司。专注于移动XXX领域，主打产品XXXXX，它将资讯、报纸、杂志、图片、微信等众多内容，按照用户意愿聚合到一起，实现深度个性化 定制。
 我的主要工作如下:
 1. 完成既定产品需求。
 2. 修复 bug。`
      },
        {
          company: '狗急跳墙责任有限公司', content: `公司总部设在XXXX区，先后在北京、上海成立分公司。专注于移动XXX领域，主打产品XXXXX，它将资讯、报纸、杂志、图片、微信等众多内容，按照用户意愿聚合到一起，实现深度个性化 定制。
 我的主要工作如下:
 1. 完成既定产品需求。
 2. 修复 bug`
        }],
      education: [
        {school: 'AL', content: '文字'},
        {school: 'TX', content: '文字'},
      ],
      projects: [
        {name: 'project A', content: '文字'},
        {name: 'project B', content: '文字'},
      ],
      awards: [
        {name: '再来十瓶', content: '连续十次获得「再来一瓶」奖励'},
        {name: '三好学生'},
      ],
      contacts: [
        {contact: 'phone', content: '13812345678'},
        {contact: 'qq', content: '12345678'},
      ],
    }
  },
  mutations: {
    initState(state,payload){
      Object.assign(state, payload);
    },
    switchTab(state, payload) {
      state.selected = payload;
      localStorage.setItem('state', JSON.stringify(state));
    },
    updateResume(state, {path,value}) {
      objectPath.set(state.resume, path, value);
      localStorage.setItem('state', JSON.stringify(state))
    }
  }
})
