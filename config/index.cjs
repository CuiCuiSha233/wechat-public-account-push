/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: '',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: '',
  
    SWITCH: {
    /** 每日天气 */
    // 填 false 则不使用，按需关闭不使用的功能可以提高运行速度
    weather: true,

    /** 节假日 */
    // 下一休息日综合提醒, 填 false 则不使用，按需关闭不使用的功能可以提高运行速度
    holidaytts: true,

    /** 每日N句 */
    // 金山每日一句, 填 false 则不使用，按需关闭不使用的功能可以提高运行速度
    CIBA: true,
    
    // 每日一言, 填 false 则不使用，按需关闭不使用的功能可以提高运行速度
    oneTalk: false,
    
    // 土味情话(彩虹屁), 填 false 则不使用，按需关闭不使用的功能可以提高运行速度
    earthyLoveWords: true,
    
    // 朋友圈文案, 填 false 则不使用，按需关闭不使用的功能可以提高运行速度
    momentCopyrighting: false,
    
    // 毒鸡汤, 填 false 则不使用，按需关闭不使用的功能可以提高运行速度
    poisonChickenSoup: true,
    
    // 古诗古文, 填 false 则不使用，按需关闭不使用的功能可以提高运行速度
    poetry: false,

    /** 星座运势 */
    // 填 false 则不使用，按需关闭不使用的功能可以提高运行速度
    horoscope: true,
  
    /** 生日消息和节日消息 */
    // 填 false 则不使用，按需关闭不使用的功能可以提高运行速度
    birthdayMessage: true,
  
    /** 学生课表 */
    // 填 false 则不使用，按需关闭不使用的功能可以提高运行速度
    courseSchedule: false,
  },
  
  

  USERS: [
    {
      // 想要发送的人的名字
      name: '查理',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'onh1R5-YIFJL_ROxRgPsAS8ZNM6E',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'SFdl_wRbTP28VbsEUJOK8t2q0_ioqFMx9C3cA-xTyck',
      province: '辽宁',
      // 所在城市或县区
      city: '沈阳',
      // 新历生日, 仅用作获取星座运势, 格式必须
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '7-24',
      festivals: [
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: '小刘同学家的小李', year: '2003', date: '06-18',
        },
         {
          type: '生日', name: '小李同学家的小刘', year: '2003', date: '07-24',
        },
        {
          type: '节日', name: '牵手纪念日', year: '2022', date: '08-24',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2022-03-16' },
        // 结婚纪念日
        { keyword: 'marry_day', date: '2022-08-24' },
      ],
    },
    
      {
      // 想要发送的人的名字
      name: '小李',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'onh1R5_GD9EFQwwzvQ3fzoJQ7k50',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'SFdl_wRbTP28VbsEUJOK8t2q0_ioqFMx9C3cA-xTyck',
      province: '辽宁',
      // 所在城市或县区
      city: '沈阳',
      // 新历生日, 仅用作获取星座运势, 格式必须
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '7-24',
      festivals: [
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: '小刘同学家的小李', year: '2003', date: '06-18',
        },
         {
          type: '生日', name: '小李同学家的小刘', year: '2003', date: '07-24',
        },
        {
          type: '节日', name: '牵手纪念日', year: '2022', date: '08-24',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2022-03-16' },
        // 结婚纪念日
        { keyword: 'marry_day', date: '2022-08-24' },
      ],
    },
    
     {
      // 想要发送的人的名字
      name: '二爷',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'onh1R52iE3i2cKbzfqa5LEWFzMA4',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'DsZ-bAVHoYd9uLqhiGrsIR14CHoR4c3E8sgBIUA4m1U',
      province: '黑龙江',
      // 所在城市或县区
      city: '哈尔滨',
      // 新历生日, 仅用作获取星座运势, 格式必须
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '10-02',
      festivals: [
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: '圈子', year: '2002', date: '03-16',
        },
         {
          type: '生日', name: '二爷', year: '2003', date: '07-24',
        },
        {
          type: '生日', name: '小何', year: '2002', date: '10-13',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        { keyword: 'marry_day', date: '2012-02-29' },
      ],
    },
    
    
     {
      // 想要发送的人的名字
      name: '小何',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'onh1R54_5ECqtv3at-OgrF_9uyuk',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'DsZ-bAVHoYd9uLqhiGrsIR14CHoR4c3E8sgBIUA4m1U',
      province: '山东',
      // 所在城市或县区
      city: '青岛',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '10-02',
      festivals: [
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: '圈子', year: '2002', date: '03-16',
        },
         {
          type: '生日', name: '二爷', year: '2003', date: '07-24',
        },
        {
          type: '生日', name: '小何', year: '2002', date: '10-13',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        { keyword: 'marry_day', date: '2012-02-29' },
      ],
    },
    
     {
      // 想要发送的人的名字
      name: '圈子',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'onh1R5-YIFJL_ROxRgPsAS8ZNM6E',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'DsZ-bAVHoYd9uLqhiGrsIR14CHoR4c3E8sgBIUA4m1U',
      province: '黑龙江',
      // 所在城市或县区
      city: '大庆',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '03-16',
      festivals: [
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: '圈子', year: '2002', date: '03-16',
        },
         {
          type: '生日', name: '二爷', year: '2003', date: '07-24',
        },
        {
          type: '生日', name: '小何', year: '2002', date: '10-13',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        { keyword: 'marry_day', date: '2012-02-29' },
      ],
    },
    
    
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: 'xA7ISKOY4tKvawezefyud2Aly2Z5fDv54E5hV9tObdk',

  CALLBACK_USERS: [
    {
      name: '查理',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'onh1R5-YIFJL_ROxRgPsAS8ZNM6E',
    },
    {
      name: '小李',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'onh1R5_GD9EFQwwzvQ3fzoJQ7k50',
    },
  ],

}

module.exports = USER_CONFIG

