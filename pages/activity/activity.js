//activity.js
var nowIndex = -1;

Page({
  data: {
    question: '',
    hint: '',
    showView: false
  },
  onLoad: function () {
    this.refreshData();
  },
  showHint: function(){
    this.setData({
      showView: true
    });
  },
  nextQuestion: function(){
    this.refreshData();
  },

  refreshData: function () {
    // 随机产生数组下标
    var index;
    do{
      index = Math.floor(Math.random() * (questions.length - 1));
    }while(index === nowIndex);
    nowIndex = index;

    console.log('index = ' + index + ',length = ' +questions.length);
    console.log(questions[index].title + "  " + questions[index].hint);

    this.setData({
      question : questions[index].title,
      hint: '提示：'+questions[index].hint,
      showView: false
    });
  }
})

var questions = [
  { title: '古筝', hint: '乐器' }, { title: '笙', hint: '乐器' },
  { title: '笛子', hint: '乐器' }, { title: '锣', hint: '乐器' },
  { title: '长号', hint: '乐器' }, { title: '口琴', hint: '乐器' },
  { title: '吉他', hint: '乐器' }, { title: '不倒翁', hint: '玩具' },
  { title: '风筝', hint: '玩具' }, { title: '魔方', hint: '玩具' },
  { title: '拼图', hint: '玩具' }, { title: '陀螺', hint: '玩具' },
  { title: '沙漏', hint: '生活用品' }, { title: '电灯', hint: '生活用品' },
  { title: '鱼钩', hint: '生活用品' }, { title: '扫把', hint: '生活用品' },
  { title: '杯子', hint: '生活用品' }, { title: '上吊', hint: '一种行为' },
  { title: '吐痰', hint: '一种行为' }, { title: '吵闹', hint: '一种行为' },
  { title: '吸烟', hint: '一种行为' }, { title: '睡觉', hint: '一种行为' },
  { title: '菊花', hint: '花草' }, { title: '梅花', hint: '花草' },
  { title: '厕所', hint: '场所' }, { title: '火车站', hint: '场所' },
  { title: '医院', hint: '场所' }, { title: '公安局', hint: '场所' },
  { title: '餐厅', hint: '场所' }, { title: '电脑', hint: '电器' },
  { title: '手机', hint: '电器' }, { title: '热水器', hint: '电器' },
  { title: '冰箱', hint: '电器' }, { title: '电子秤', hint: '电器' },
  { title: '青花瓷', hint: '歌曲' }, { title: '让我们荡起双桨', hint: '歌曲' },
  { title: '葫芦娃', hint: '歌曲' }, { title: '小苹果', hint: '歌曲' },
  { title: '我的滑板鞋', hint: '歌曲' }, { title: '葡萄', hint: '水果' },
  { title: '椰子', hint: '水果' }, { title: '火龙果', hint: '水果' },
  { title: '菠萝', hint: '水果' }, { title: '西瓜', hint: '水果' },
  { title: '眉笔', hint: '化妆品' }, { title: '面膜', hint: '化妆品' },
  { title: '口红', hint: '化妆品' }, { title: '睫毛膏', hint: '化妆品' },
  { title: '鸭舌帽', hint: '头饰' }, { title: '发卡', hint: '头饰' },
  { title: '发簪', hint: '头饰' }, { title: '皮筋', hint: '头饰' },
  { title: '面条', hint: '食物' }, { title: '大盘鸡', hint: '食物' },
  { title: '冰糖葫芦', hint: '食物' }, { title: '包子', hint: '食物' },
  { title: '茄子', hint: '蔬菜' }, { title: '红薯', hint: '蔬菜' },
  { title: '黄瓜', hint: '蔬菜' }, { title: '蘑菇', hint: '蔬菜' },
  { title: '木耳', hint: '蔬菜' }, { title: '辣椒', hint: '蔬菜' },
  { title: '大本钟', hint: '景点' }, { title: '长城', hint: '景点' },
  { title: '富士山', hint: '景点' }, { title: '东方明珠', hint: '景点' },
  { title: '少林寺', hint: '景点' }, { title: '流星', hint: '天文' },
  { title: '太阳系', hint: '天文' }, { title: '月球', hint: '天文' },
  { title: '望远镜', hint: '天文' }, { title: '黑洞', hint: '天文' },
  { title: '镰刀', hint: '工具' }, { title: '鸡毛掸子', hint: '工具' },
  { title: '水表', hint: '工具' }, { title: '扳手', hint: '工具' },
  { title: '螺丝刀', hint: '工具' }, { title: '指甲钳', hint: '工具' },
  { title: '梳子', hint: '工具' }, { title: '电钻', hint: '工具' },
  { title: '锤子', hint: '工具' }, { title: '公鸡', hint: '动物' },
  { title: '猪', hint: '动物' }, { title: '犀牛', hint: '动物' },
  { title: '兔子', hint: '动物' }, { title: '长颈鹿', hint: '动物' },
  { title: '眼镜蛇', hint: '动物' }, { title: '狮子', hint: '动物' },
  { title: '鳄鱼', hint: '动物' }, { title: '恐龙', hint: '动物' },
  { title: '书', hint: '文化' }, { title: '钢管舞', hint: '文化' },
  { title: '皮影', hint: '文化' }, { title: '诗', hint: '文化' },
  { title: '电影', hint: '文化' }, { title: '画', hint: '文化' },
  { title: '印刷', hint: '文化' }, { title: '金箍棒', hint: '武器' },
  { title: '双截棍', hint: '武器' }, { title: '匕首', hint: '武器' },
  { title: '青龙偃月刀', hint: '武器' }, { title: '坦克', hint: '武器' },
  { title: '航空母舰', hint: '武器' }, { title: '手枪', hint: '武器' },
  { title: '弓箭', hint: '武器' }, { title: '刀', hint: '武器' },
  { title: '金字塔', hint: '建筑' }, { title: '桥', hint: '建筑' },
  { title: '房子', hint: '建筑' }, { title: '雷峰塔', hint: '建筑' },
  { title: '亭', hint: '建筑' }, { title: '黑夜', hint: '自然' },
  { title: '乌云', hint: '自然' }, { title: '下雨', hint: '自然' },
  { title: '雷', hint: '自然' }, { title: '极昼', hint: '自然' },
  { title: '风', hint: '自然' }, { title: '蝉', hint: '昆虫' },
  { title: '蜻蜓', hint: '昆虫' }, { title: '毛毛虫', hint: '昆虫' },
  { title: '蚊子', hint: '昆虫' }, { title: '萤火虫', hint: '昆虫' },
  { title: '蚂蚱', hint: '昆虫' }, { title: '红绿灯', hint: '交通' },
  { title: '自行车', hint: '交通' }, { title: '轮船', hint: '交通' },
  { title: '路灯', hint: '交通' }, { title: '直升机', hint: '交通' },
  { title: '火车', hint: '交通' }, { title: '无名指', hint: '身体部位' },
  { title: '耳垂', hint: '身体部位' }, { title: '屁股', hint: '身体部位' },
  { title: '脚腕', hint: '身体部位' }, { title: '胃', hint: '身体部位' },
  { title: '掌上明珠', hint: '成语' }, { title: '穿针引线', hint: '成语' },
  { title: '一石二鸟', hint: '成语' }, { title: '花好月圆', hint: '成语' },
  { title: '百里挑一', hint: '成语' }, { title: '坐井观天', hint: '成语' },
  { title: '车门', hint: '配件' }, { title: '仪表盘', hint: '配件' },
  { title: '窗', hint: '配件' }, { title: '手机壳', hint: '配件' },
  { title: '扣子', hint: '配件' }, { title: '螺丝', hint: '配件' },
  { title: '程序员', hint: '职业' }, { title: '医生', hint: '职业' },
  { title: '飞行员', hint: '职业' }, { title: '歌手', hint: '职业' },
  { title: '老师', hint: '职业' }, { title: '水泥', hint: '建材' },
  { title: '空心砖', hint: '建材' }, { title: '瓦', hint: '建材' },
  { title: '玻璃', hint: '建材' }, { title: '石头', hint: '建材' },
  { title: '举重', hint: '体育运动' }, { title: '游泳', hint: '体育运动' },
  { title: '赛跑', hint: '体育运动' }, { title: '跳远', hint: '体育运动' },
  { title: '滑冰', hint: '体育运动' }, { title: '拳击', hint: '体育运动' }
];
