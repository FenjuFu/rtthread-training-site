export type HardwareItem = {
  id: string;
  name: string;
  chip: string;
  category: string;
  price: string;
  link: string;
  priority: string;
  note: string;
};

export type HardwareGroup = {
  topic: string;
  icon: string;
  items: HardwareItem[];
};

export const hardwareData: HardwareGroup[] = [
  {
    topic: 'FOC 电机控制',
    icon: 'Cpu',
    items: [
      {
        id: 'foc-1',
        name: '正点原子 STM32G474 电机开发板',
        chip: 'STM32G474',
        category: 'FOC 电机控制',
        price: '¥268',
        link: 'https://s.taobao.com/search?q=正点原子+STM32G474+电机开发板',
        priority: '首选推荐',
        note: 'STM32G4 系列专为电机控制设计，支持 HRTIM，RT-Thread 社区资料丰富。',
      },
      {
        id: 'foc-2',
        name: '野火 STM32F407 电机工控开发板（骄阳）',
        chip: 'STM32F407',
        category: 'FOC 电机控制',
        price: '¥325-378',
        link: 'https://s.taobao.com/search?q=野火+STM32F407+电机工控+FOC',
        priority: '备选',
        note: '支持 FOC 控制、PID 多闭环，社区教程较多。',
      },
    ],
  },
  {
    topic: 'OpenMV 机器视觉',
    icon: 'Eye',
    items: [
      {
        id: 'openmv-1',
        name: 'OpenMV4 H7 Plus 智能摄像头（官方版）',
        chip: 'STM32H743II',
        category: 'OpenMV 机器视觉',
        price: '¥599',
        link: 'https://singtown.com/product/50927/openmv4-h7-plus/',
        priority: '首选推荐',
        note: 'Cortex-M7 480MHz，500 万像素 OV5640，MicroPython 开发，SDK 完善。',
      },
      {
        id: 'openmv-2',
        name: 'OpenMV4 H7 Plus 兼容版',
        chip: 'STM32H743',
        category: 'OpenMV 机器视觉',
        price: '¥85-150',
        link: 'https://s.taobao.com/search?q=OpenMV4+H7+Plus+智能摄像头+兼容',
        priority: '低预算',
        note: '兼容版价格更低，适合预算有限的场景。',
      },
    ],
  },
  {
    topic: '手写数字识别',
    icon: 'Hand',
    items: [
      {
        id: 'digit-1',
        name: 'RT-Thread Vision Board 开发板（瑞萨 Cortex-M85）',
        chip: 'RA8D1',
        category: '手写数字识别',
        price: '¥229-309',
        link: 'https://item.taobao.com/item.htm?id=765743204571',
        priority: '首选推荐',
        note: 'RT-Thread 官方出品，兼容 OpenMV 生态，支持 TensorFlow Lite。',
      },
      {
        id: 'digit-2',
        name: 'Sipeed Maix Bit K210 AI 开发板',
        chip: 'K210',
        category: '手写数字识别',
        price: '¥148-182',
        link: 'https://s.taobao.com/search?q=MAIX+Bit+K210+开发板+Sipeed',
        priority: '备选',
        note: '双核 RISC-V，带 KPU 神经网络加速器，适合端侧 AI 入门。',
      },
    ],
  },
  {
    topic: 'LVGL 图形界面与 Wi-Fi',
    icon: 'Monitor',
    items: [
      {
        id: 'lvgl-1',
        name: 'RT-Thread HMI Board 开发板（瑞萨 RA6M3）',
        chip: 'RA6M3',
        category: 'LVGL + Wi-Fi',
        price: '¥150-200',
        link: 'https://item.taobao.com/item.htm?id=718982035562',
        priority: '首选推荐',
        note: 'RT-Thread 联合瑞萨推出，一套硬件实现 HMI + IoT + 控制，开箱即用。',
      },
      {
        id: 'lvgl-2',
        name: 'ESP32-S3 + 2.8寸 LCD 触摸屏开发板',
        chip: 'ESP32-S3',
        category: 'LVGL + Wi-Fi',
        price: '¥70-85',
        link: 'https://s.taobao.com/search?q=ESP32-S3+2.8寸+LCD+触摸屏+LVGL',
        priority: '低成本',
        note: '双核 Xtensa，WiFi+BLE，预装 LVGL，2.8 寸 240×320 TFT 触摸屏。',
      },
    ],
  },
  {
    topic: '智慧视觉与端侧 AI',
    icon: 'BrainCircuit',
    items: [
      {
        id: 'ai-1',
        name: 'Sipeed Maix Bit K210 AI 开发板',
        chip: 'K210',
        category: '端侧 AI',
        price: '¥148-182',
        link: 'https://s.taobao.com/search?q=MAIX+Bit+K210+AI+开发板',
        priority: '首选推荐',
        note: '带 KPU 神经网络加速器，约 0.25-1 TOPS，MaixPy 开发简单。',
      },
      {
        id: 'ai-2',
        name: 'Luckfox Pico Pro（瑞芯微 RV1106）',
        chip: 'RV1106',
        category: '端侧 AI',
        price: '¥75-100',
        link: 'https://s.taobao.com/search?q=Luckfox+Pico+Pro+RV1106',
        priority: '高算力',
        note: 'Cortex-A7 + 0.5 TOPS NPU + ISP，可跑 Linux + RKNN，支持 YOLO。',
      },
    ],
  },
  {
    topic: '双核通信',
    icon: 'GitMerge',
    items: [
      {
        id: 'dual-1',
        name: 'STM32H745ZI Nucleo-144 双核开发板',
        chip: 'STM32H745',
        category: '双核通信',
        price: '¥380-730',
        link: 'https://s.taobao.com/search?q=NUCLEO-H745ZI+双核+开发板',
        priority: '首选推荐',
        note: 'Cortex-M7 480MHz + Cortex-M4 240MHz，双核通信教学标准方案。',
      },
      {
        id: 'dual-2',
        name: 'ESP32 双核开发板',
        chip: 'ESP32',
        category: '双核通信',
        price: '¥7-30',
        link: 'https://s.taobao.com/search?q=ESP32+开发板+WiFi+蓝牙+模块',
        priority: '低成本',
        note: '双核 Xtensa LX6 240MHz，WiFi+BLE，性价比极高。',
      },
    ],
  },
  {
    topic: 'RT-Thread 官方入门开发板',
    icon: 'Rocket',
    items: [
      {
        id: 'entry-1',
        name: 'RT-Thread 星火一号（Spark-1）开发板',
        chip: 'STM32F407',
        category: '入门首选',
        price: '¥68-100',
        link: 'https://item.taobao.com/item.htm?id=726084912488',
        priority: '入门首选',
        note: 'RT-Thread 官方出品，板载 WiFi、LCD、SD 卡、传感器，配套教程丰富。',
      },
      {
        id: 'entry-2',
        name: 'ART-Pi 开发板（RT-Thread 官方高性能板）',
        chip: 'STM32H750',
        category: '进阶推荐',
        price: '¥168-449',
        link: 'https://item.taobao.com/item.htm?id=629477793246',
        priority: '进阶推荐',
        note: 'Cortex-M7 480MHz，1MB Flash + 128MB SDRAM，WiFi+蓝牙，RGB LCD 接口。',
      },
    ],
  },
];
