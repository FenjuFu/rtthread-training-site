export type ScheduleItem = {
  time: string;
  title: string;
  description: string;
  type: 'lecture' | 'practice' | 'break' | 'lunch' | 'showcase';
};

export const schedule: ScheduleItem[] = [
  {
    time: '10:00 - 10:20',
    title: '共建共享共赢：RT-Thread 2026 开源生态新程',
    description: '与每一位开发者共创嵌入式未来。介绍 RT-Thread 生态定位、技术体系与社区协作方式。',
    type: 'lecture',
  },
  {
    time: '10:20 - 10:40',
    title: '开发环境准备',
    description: '完成工具安装、开发板连接、工程导入与首次编译下载，打通从代码到运行的完整链路。',
    type: 'practice',
  },
  {
    time: '10:40 - 11:10',
    title: 'RT-Thread 上手实践',
    description: '理解工程结构，创建第一个线程，实现 LED 闪烁与串口打印，体验多任务并发开发。',
    type: 'practice',
  },
  {
    time: '11:10 - 11:20',
    title: '休息',
    description: '讲师集中答疑，协助学员排查环境问题。',
    type: 'break',
  },
  {
    time: '11:20 - 12:00',
    title: 'RT-Thread 内核培训',
    description: '讲解线程调度、时钟节拍、同步通信、内存管理与设备驱动框架，建立 RTOS 内核认知。',
    type: 'lecture',
  },
  {
    time: '12:00 - 13:30',
    title: '午餐（自行解决）',
    description: '设备不断电，讲师准备下午专题工程包。',
    type: 'lunch',
  },
  {
    time: '13:30 - 17:00',
    title: '主题动手实践',
    description: '每场一个主题：FOC 电机控制、OpenMV 机器视觉、手写数字识别、LVGL 图形界面与 Wi-Fi、智慧视觉与端侧 AI、双核通信。',
    type: 'practice',
  },
  {
    time: '17:00 - 17:30',
    title: '交流环节',
    description: '各组成果展示、问题复盘、经验分享与后续学习路径推荐。',
    type: 'showcase',
  },
];
