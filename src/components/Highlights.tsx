import { BookOpen, Users, Target, Trophy } from 'lucide-react';

const highlights = [
  {
    icon: Target,
    title: '培训目标',
    desc: '完成从生态认知、环境搭建、基础编程、内核理解到专题实践的全链路入门闭环。',
  },
  {
    icon: Users,
    title: '适合人群',
    desc: '嵌入式开发者、高校学生、RT-Thread 初学者及生态合作伙伴。',
  },
  {
    icon: BookOpen,
    title: '课程收益',
    desc: '掌握线程调度、同步通信、内核机制，理解设备驱动框架与组件生态。',
  },
  {
    icon: Trophy,
    title: '输出成果',
    desc: '每组产出可运行、可演示、可讲解的专题项目，并形成结营成果总结。',
  },
];

export default function Highlights() {
  return (
    <section id="highlights" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-cyan-400">
            TRAINING HIGHLIGHTS
          </p>
          <h2 className="text-3xl font-bold text-white sm:text-4xl">培训亮点</h2>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((item, i) => (
            <div
              key={item.title}
              className="glass group rounded-xl p-6 transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="mb-4 inline-flex rounded-lg bg-cyan-400/10 p-3">
                <item.icon size={24} className="text-cyan-400" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-white">{item.title}</h3>
              <p className="text-sm leading-relaxed text-slate-400">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
