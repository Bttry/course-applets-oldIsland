import { Schema } from "mongoose";

const model = new Schema(
  {
    // 期刊内容
    content: { type: String, default: "" },
    // 点赞次数
    fav_nums: { type: Number, min: 0, default: 0 },
    // 图片
    image: { type: String, default: "" },
    // 期号
    index: { type: Number, default: 0 },
    // 是否点赞
    like_status: { type: Boolean, default: false },
    // 发布日期
    pubdate: { type: Date, default: Date.now },
    // 期刊题目
    title: { type: String, default: "" },
    // 期刊类型，这里的类型分为：100 电影 200 音乐 300 句子
    type: { type: Number }
  },
  {
    versionKey: false
  }
);
