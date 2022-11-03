/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wx8fd3a65c53c82cb7',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: 'caa6f2b30f0adce4aa7a88fe3b6d84de',

  PROVINCE: '广东',
  CITY: '惠州',

  USERS: [
    {
      // 想要发送的人的名字
      name: '小刘',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'onh1R5-YIFJL_ROxRgPsAS8ZNM6E',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'SFdl_wRbTP28VbsEUJOK8t2q0_ioqFMx9C3cA-xTyck',
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
        { keyword: '{marry_day', date: '2022-03-16' },
      ],
    },
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: 'xA7ISKOY4tKvawezefyud2Aly2Z5fDv54E5hV9tObdk',

  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'onh1R5-YIFJL_ROxRgPsAS8ZNM6E',
    }
  ],

}

module.exports = USER_CONFIG

