import { Cpu, Eye, Hand, Monitor, BrainCircuit, GitMerge } from 'lucide-react';
import { showcase, type ShowcaseItem } from '@/data/showcase';
import TerminalBlock from './TerminalBlock';

const iconMap: Record<string, typeof Cpu> = {
  'showcase-foc': Cpu,
  'showcase-openmv': Eye,
  'showcase-digit': Hand,
  'showcase-lvgl': Monitor,
  'showcase-ai': BrainCircuit,
  'showcase-dualcore': GitMerge,
};

function ShowcaseCard({ item }: { item: ShowcaseItem }) {
  const Icon = iconMap[item.id] || Cpu;
  return (
    <div className="glass group rounded-xl p-6 transition-all duration-300 hover:-translate-y-1">
      <div className="mb-4 flex items-center gap-3">
        <div className="inline-flex rounded-lg bg-gradient-to-br from-cyan-400/20 to-blue-600/20 p-2.5">
          <Icon size={22} className="text-cyan-300" />
        </div>
        <h3 className="text-lg font-bold text-white">{item.title}</h3>
      </div>

      <p className="mb-3 text-sm leading-relaxed text-slate-400">{item.summary}</p>

      <div className="mb-3 flex flex-wrap gap-1.5">
        {item.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-md border border-cyan-400/20 bg-cyan-400/5 px-2.5 py-1 text-xs text-cyan-200/70"
          >
            {tag}
          </span>
        ))}
      </div>

      <TerminalBlock output={item.terminalOutput} title="运行结果" />

      <ul className="mt-3 space-y-1.5">
        {item.highlights.map((h, i) => (
          <li key={i} className="flex items-start gap-2 text-sm text-slate-300">
            <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-green-400" />
            {h}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Showcase() {
  return (
    <section id="showcase" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-cyan-400">
            PROJECT SHOWCASE
          </p>
          <h2 className="text-3xl font-bold text-white sm:text-4xl">示例成果展示</h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-slate-400">
            六大专题方向，每个成果可运行、可演示、可讲解。以下为预期运行结果与交付标准。
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {showcase.map((item) => (
            <ShowcaseCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
