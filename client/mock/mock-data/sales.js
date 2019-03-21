const Mock = require('mockjs');
const Faker = require('Faker');

module.exports = Mock.mock({
    // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
    'list|10-30': [{
        // 属性 id 是一个自增数，起始值为 1，每次增 1
        'id|+1': 1,
        price: 3888,
        'mark-tag': '一日游',
        startDate: '04.05',
        endDate: '04.07',
        departureTime: '04.04晚20:00',
        image: `https://p2-q.mafengwo.net/s11/M00/EC/B2/wKgBEFqOWt6AfTRmAAVsNPdTVAo576.gif`,
        title: `下单立减800元·北京直飞东京+大阪+京都/箱根9天8晚往返自由行（天数可调整+下单赠送路书+加299可代办签证+加79元可换购一日游+可订家庭房+航班酒店都可升级）`
    }]
});
