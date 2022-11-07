"use strict";
var common_vendor = require("../../common/vendor.js");
const IndexSwiper = () => "../../components/index/IndexSwiper.js";
const Recommend = () => "../../components/index/Recommend.js";
const _sfc_main = {
  data() {
    return {};
  },
  onLoad() {
  },
  methods: {},
  components: {
    IndexSwiper,
    Recommend
  }
};
if (!Array) {
  const _component_IndexSwiper = common_vendor.resolveComponent("IndexSwiper");
  const _component_Recommend = common_vendor.resolveComponent("Recommend");
  (_component_IndexSwiper + _component_Recommend)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {};
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/\u524D\u7AEF\u9879\u76EE/uni-app/app/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
