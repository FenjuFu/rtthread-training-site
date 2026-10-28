export type ShowcaseItem = {
  id: string;
  title: string;
  tags: string[];
  summary: string;
  terminalOutput: string;
  highlights: string[];
};

export const showcase: ShowcaseItem[] = [
  {
    id: 'showcase-foc',
    title: 'FOC 电机控制',
    tags: ['电机控制', '实时闭环', '工业'],
    summary: '电机平稳启动并调速，串口实时输出速度闭环反馈，展示 RT-Thread 周期任务调度在电机控制中的应用。',
    terminalOutput: `speed_ref=800 rpm
speed_fb=792 rpm
iq=0.45
motor status=running`,
    highlights: [
      '演示电机启停',
      '展示速度闭环效果',
      '调整目标转速后系统稳定响应',
    ],
  },
  {
    id: 'showcase-openmv',
    title: 'OpenMV 机器视觉',
    tags: ['机器视觉', 'Python', 'UART 联动'],
    summary: 'OpenMV 识别红色目标并输出坐标，RT-Thread 端接收结果并控制 LED / 舵机执行动作。',
    terminalOutput: `vision target: red
x=126 y=88
action: turn left`,
    highlights: [
      '摄像头实时识别彩色物块',
      '主控板根据识别结果作出反馈',
      '视觉模块 + 实时控制典型组合',
    ],
  },
  {
    id: 'showcase-digit',
    title: '手写数字识别',
    tags: ['端侧 AI', '图像推理', '边缘智能'],
    summary: '输入手写数字图片，终端输出识别结果与置信度，体验端侧 AI 最小闭环。',
    terminalOutput: `predict result: 8
confidence: 97.3%`,
    highlights: [
      '演示不同数字图片识别',
      '展示推理时间和识别准确率',
      '建立边缘智能应用认知',
    ],
  },
  {
    id: 'showcase-lvgl',
    title: 'LVGL 图形界面与 Wi-Fi',
    tags: ['GUI', 'Wi-Fi', '事件驱动'],
    summary: '屏幕显示图形化联网界面，点击按钮触发连接，联网成功后状态实时更新。',
    terminalOutput: `Wi-Fi: Training_AP
Status: Connected
IP: 192.168.1.105`,
    highlights: [
      '界面可操作',
      '点击按钮触发联网',
      '联网成功后状态实时更新',
    ],
  },
  {
    id: 'showcase-ai',
    title: '智慧视觉与端侧 AI',
    tags: ['端侧 AI', '目标识别', '低延迟'],
    summary: '识别特定目标类别（如人/物体/手势），输出类别、得分和推理耗时，展示端侧 AI 价值。',
    terminalOutput: `AI result: person
score: 0.91
latency: 86 ms`,
    highlights: [
      '实时摄像头输入',
      '板端推理输出结果',
      '展示延迟和准确度',
    ],
  },
  {
    id: 'showcase-dualcore',
    title: '双核通信',
    tags: ['双核', '消息通信', '异构协同'],
    summary: '主核发送数据，从核接收并处理，返回执行结果，展示双核间双向消息交互。',
    terminalOutput: `CPU0 send: hello cpu1
CPU1 recv: hello cpu1
CPU1 reply: ok
CPU0 recv reply: ok`,
    highlights: [
      '双核间双向消息交互',
      '一个核采集数据，另一个核处理或显示',
      '多核协同基本理解',
    ],
  },
];
