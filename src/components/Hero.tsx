import { ChevronDown, Cpu, Wifi, Zap } from 'lucide-react';

const heroTags = [
  { icon: Cpu, label: '内核实战' },
  { icon: Zap, label: '六大专题' },
  { icon: Wifi, label: '生态共建' },
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden grid-bg"
    >
      {/* 辉光氛围 */}
      <div
        className="glow-blob pulse-glow"
        style={{ width: 500, height: 500, top: '10%', left: '5%', background: '#1a4dff' }}
      />
      <div
        className="glow-blob pulse-glow"
        style={{
          width: 420,
          height: 420,
          bottom: '5%',
          right: '8%',
          background: '#00d4ff',
          animationDelay: '2s',
        }}
      />

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <div className="fade-up mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/5 px-4 py-1.5 text-xs font-medium text-cyan-300">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-400" />
          </span>
          RT-Thread 2026 开源生态新程
        </div>

        <h1
          className="fade-up text-4xl font-black leading-tight tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
          style={{ animationDelay: '0.1s' }}
        >
          <span className="gradient-text">RT-Thread</span>
          <br />
          <span className="text-white">开发实训营</span>
        </h1>

        <p
          className="fade-up mx-auto mt-6 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg"
          style={{ animationDelay: '0.2s' }}
        >
          一天时间，完成从生态认知、环境搭建、基础编程、内核理解到专题项目实践的完整入门闭环。
          <br className="hidden sm:block" />
          每位学员都将带着可运行、可演示、可讲解的成果结营。
        </p>

        <div
          className="fade-up mt-8 flex flex-wrap items-center justify-center gap-3"
          style={{ animationDelay: '0.3s' }}
        >
          {heroTags.map((tag) => (
            <div
              key={tag.label}
              className="glass flex items-center gap-2 rounded-lg px-4 py-2 text-sm text-slate-200"
            >
              <tag.icon size={15} className="text-cyan-400" />
              {tag.label}
            </div>
          ))}
        </div>

        <div
          className="fade-up mt-10 flex flex-wrap items-center justify-center gap-4"
          style={{ animationDelay: '0.4s' }}
        >
          <button
            onClick={() => document.getElementById('teacher')?.scrollIntoView({ behavior: 'smooth' })}
            className="rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-cyan-500/25 transition-all hover:shadow-cyan-500/40 hover:brightness-110"
          >
            进入讲师授课版
          </button>
          <button
            onClick={() => document.getElementById('student')?.scrollIntoView({ behavior: 'smooth' })}
            className="glass rounded-lg border border-cyan-400/30 px-7 py-3 text-sm font-semibold text-cyan-200 transition-all hover:border-cyan-400/60 hover:bg-cyan-400/5"
          >
            查看学员手册
          </button>
        </div>
      </div>

      <button
        onClick={() => document.getElementById('highlights')?.scrollIntoView({ behavior: 'smooth' })}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-cyan-400/50 transition-colors hover:text-cyan-300"
        aria-label="向下滚动"
      >
        <ChevronDown size={28} className="animate-bounce" />
      </button>
    </section>
  );
}
