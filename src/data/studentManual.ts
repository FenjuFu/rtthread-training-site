export type StudentSection = {
  id: string;
  title: string;
  category: 'basic' | 'specialized';
  target: string[];
  steps: string[];
  expectedResult?: string[];
  requirements?: string[];
  commonIssues?: string[];
};

export const studentManual: StudentSection[] = [
  {
    id: 'student-env',
    title: '实验一：开发环境搭建',
    category: 'basic',
    target: [
      '成功打开工程',
      '成功编译',
      '成功下载',
      '成功看到串口启动信息',
    ],
    steps: [
      '连接开发板到电脑',
      '打开开发工具（RT-Thread Studio 或 Env）',
      '导入提供的 BSP 工程',
      '检查芯片与开发板配置',
      '点击编译',
      '编译成功后下载程序',
      '打开串口工具，设置正确串口号和波特率',
      '复位开发板，观察启动日志',
    ],
    expectedResult: [
      'RT-Thread Operating System',
      'msh >',
    ],
    commonIssues: [
      '编译失败：检查工具链和工程配置',
      '下载失败：检查驱动和调试口连接',
      '串口无输出：检查波特率、串口号、复位方式',
    ],
    requirements: [
      '能看到启动日志',
      '能进入 msh 命令行',
    ],
  },
  {
    id: 'student-basic',
    title: '实验二：RT-Thread 基础应用开发',
    category: 'basic',
    target: [
      '创建线程',
      '实现 LED 闪烁',
      '实现串口周期打印',
    ],
    steps: [
      '打开 applications 中的应用文件',
      '新建线程入口函数',
      '在线程中加入计数打印',
      '在线程中加入延时',
      '增加 LED 控制逻辑',
      '创建并启动线程',
      '编译、下载、运行',
      '打开串口观察输出',
    ],
    expectedResult: [
      'thread1 count: 1',
      'thread2 alive',
      'thread1 count: 2',
      'thread2 alive',
      '（板载 LED 周期闪烁）',
    ],
    requirements: [
      '串口能看到双线程交替输出',
      'LED 按设定周期闪烁',
    ],
  },
  {
    id: 'student-kernel',
    title: '实验三：内核机制体验',
    category: 'basic',
    target: [
      '理解线程调度',
      '理解同步通信',
      '完成一个线程间数据传递示例',
    ],
    steps: [
      '创建采集线程',
      '创建显示线程',
      '新建消息队列',
      '采集线程向消息队列发送数据',
      '显示线程阻塞等待消息',
      '接收到数据后打印',
      '编译、下载并运行',
    ],
    expectedResult: [
      'sensor thread: data ready',
      'display thread: receive data = 123',
    ],
    requirements: [
      '消息队列成功传递数据',
      '显示线程能阻塞等待并正确接收',
    ],
  },
  {
    id: 'student-foc',
    title: '专题实践 A：FOC 电机控制',
    category: 'specialized',
    target: [
      '控制电机启停',
      '设置目标转速',
      '查看反馈转速',
    ],
    steps: [
      '连接电机与驱动板',
      '打开工程并检查参数',
      '下载程序',
      '通过串口或按键发送启动命令',
      '设置目标转速',
      '观察电机运行情况',
      '查看反馈日志',
    ],
    expectedResult: [
      'speed_ref=800 rpm',
      'speed_fb=792 rpm',
      'motor status=running',
    ],
    requirements: [
      '演示电机启动与停止',
      '演示调速响应',
      '简述 RT-Thread 在控制中的作用',
    ],
  },
  {
    id: 'student-openmv',
    title: '专题实践 B：OpenMV 机器视觉与 Python 实战',
    category: 'specialized',
    target: [
      '识别目标颜色或形状',
      '将识别结果传给 RT-Thread',
      'RT-Thread 执行动作反馈',
    ],
    steps: [
      '打开 OpenMV IDE',
      '导入示例脚本',
      '测试颜色识别',
      '配置 UART 通信',
      '将结果发送给 RT-Thread 主控',
      '主控解析数据并执行控制',
      '串口观察结果',
    ],
    expectedResult: [
      'vision target: red',
      'x=126 y=88',
      'action: turn left',
    ],
    requirements: [
      '演示摄像头识别',
      '演示主控联动响应',
      '简述"视觉识别 + 主控执行"流程',
    ],
  },
  {
    id: 'student-digit',
    title: '专题实践 C：手写数字识别',
    category: 'specialized',
    target: [
      '完成图片输入与模型推理',
      '输出识别数字和置信度',
    ],
    steps: [
      '准备手写数字样例',
      '导入推理工程',
      '配置输入与模型参数',
      '下载程序',
      '执行推理',
      '查看终端或屏幕输出',
    ],
    expectedResult: [
      'predict result: 8',
      'confidence: 97.3%',
    ],
    requirements: [
      '演示至少 3 个数字识别结果',
      '对比识别效果',
      '简述端侧 AI 的基本流程',
    ],
  },
  {
    id: 'student-lvgl',
    title: '专题实践 D：LVGL 图形界面与 Wi-Fi 连接实战',
    category: 'specialized',
    target: [
      '显示图形页面',
      '实现热点连接',
      '在界面中显示联网状态',
    ],
    steps: [
      '打开 LVGL + Wi-Fi 示例工程',
      '配置热点名称和密码',
      '下载程序',
      '启动界面',
      '点击连接按钮',
      '观察联网过程',
      '查看 IP 与状态显示',
    ],
    expectedResult: [
      'Wi-Fi: Training_AP',
      'Status: Connected',
      'IP: 192.168.1.105',
    ],
    requirements: [
      '演示界面操作',
      '演示联网成功状态',
      '简述事件驱动 GUI 的思路',
    ],
  },
  {
    id: 'student-ai',
    title: '专题实践 E：智慧视觉与端侧 AI 部署',
    category: 'specialized',
    target: [
      '完成一个简单目标识别',
      '输出类别、得分和推理耗时',
    ],
    steps: [
      '打开 AI 示例工程',
      '检查模型与输入配置',
      '下载程序',
      '接入摄像头或输入图片',
      '启动推理',
      '输出结果到串口或屏幕',
    ],
    expectedResult: [
      'AI result: person',
      'score: 0.91',
      'latency: 86 ms',
    ],
    requirements: [
      '演示推理过程',
      '展示识别结果',
      '简述端侧部署的价值',
    ],
  },
  {
    id: 'student-dualcore',
    title: '专题实践 F：双核通信',
    category: 'specialized',
    target: [
      '完成双核之间的消息发送与回复',
      '理解主从核协作思路',
    ],
    steps: [
      '打开双核通信示例工程',
      '分别编译主核与从核程序',
      '下载到对应核',
      '启动系统',
      '主核发送测试消息',
      '从核接收并回复',
      '查看通信日志',
    ],
    expectedResult: [
      'CPU0 send: hello cpu1',
      'CPU1 recv: hello cpu1',
      'CPU1 reply: ok',
      'CPU0 recv reply: ok',
    ],
    requirements: [
      '演示双向通信',
      '简述双核分工方案',
      '说明双核系统的实际价值',
    ],
  },
];
