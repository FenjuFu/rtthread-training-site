import { Cpu, Eye, Hand, Monitor, BrainCircuit, GitMerge, Rocket, ExternalLink, ShoppingCart } from 'lucide-react';
import { hardwareData } from '@/data/hardware';
import { cn } from '@/lib/utils';

const iconMap: Record<string, typeof Cpu> = {
  Cpu,
  Eye,
  Hand,
  Monitor,
  BrainCircuit,
  GitMerge,
  Rocket,
};

const priorityStyles: Record<string, string> = {
  '首选推荐': 'border-cyan-400/40 bg-cyan-400/10 text-cyan-300',
  '进阶推荐': 'border-blue-400/40 bg-blue-400/10 text-blue-300',
  '备选': 'border-slate-500/30 bg-slate-500/10 text-slate-300',
  '低预算': 'border-green-400/30 bg-green-400/10 text-green-300',
  '低成本': 'border-green-400/30 bg-green-400/10 text-green-300',
  '高算力': 'border-purple-400/30 bg-purple-400/10 text-purple-300',
  '入门首选': 'border-cyan-400/40 bg-cyan-400/10 text-cyan-300',
};

function HardwareCard({ group }: { group: typeof hardwareData[0] }) {
  const Icon = iconMap[group.icon] || Cpu;
  return (
    <div className="glass rounded-xl p-6">
      <div className="mb-5 flex items-center gap-3">
        <div className="inline-flex rounded-lg bg-gradient-to-br from-cyan-400/20 to-blue-600/20 p-2.5">
          <Icon size={20} className="text-cyan-300" />
        </div>
        <h3 className="text-lg font-bold text-white">{group.topic}</h3>
      </div>

      <div className="space-y-4">
        {group.items.map((item) => (
          <div
            key={item.id}
            className="rounded-lg border border-white/5 bg-white/[0.02] p-4 transition-colors hover:border-cyan-400/20"
          >
            <div className="mb-2 flex items-start justify-between gap-2">
              <h4 className="text-sm font-semibold text-white">{item.name}</h4>
              <span
                className={cn(
                  'shrink-0 rounded-md border px-2 py-0.5 text-xs font-medium',
                  priorityStyles[item.priority] || 'border-slate-500/30 bg-slate-500/10 text-slate-300'
                )}
              >
                {item.priority}
              </span>
            </div>

            <div className="mb-2 flex flex-wrap items-center gap-3 text-xs text-slate-400">
              <span className="rounded bg-white/5 px-2 py-0.5 font-mono">{item.chip}</span>
              <span className="font-semibold text-amber-300">{item.price}</span>
            </div>

            <p className="mb-3 text-xs leading-relaxed text-slate-400">{item.note}</p>

            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-md border border-cyan-400/30 bg-cyan-400/5 px-3 py-1.5 text-xs font-medium text-cyan-300 transition-all hover:border-cyan-400/60 hover:bg-cyan-400/10"
            >
              <ShoppingCart size={13} />
              前往购买
              <ExternalLink size={11} className="opacity-60" />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Hardware() {
  return (
    <section id="hardware" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-cyan-400">
            HARDWARE KIT
          </p>
          <h2 className="text-3xl font-bold text-white sm:text-4xl">实操硬件采购指南</h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-slate-400">
            覆盖六大专题方向与 RT-Thread 官方入门板，含主控芯片、参考价格与购买链接，按专题选板即可开课。
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {hardwareData.map((group, i) => (
            <HardwareCard key={i} group={group} />
          ))}
        </div>

        <div className="mt-8 flex items-center justify-center">
          <a
            href="https://www.rt-thread.org/board.html"
            target="_blank"
            rel="noopener noreferrer"
            className="glass inline-flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm text-cyan-200 transition-colors hover:text-cyan-300"
          >
            查看 RT-Thread 官方开发板汇总
            <ExternalLink size={14} />
          </a>
        </div>
      </div>
    </section>
  );
}
