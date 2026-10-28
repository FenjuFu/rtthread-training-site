import { Coffee, Utensils, Presentation, Code2, BookText } from 'lucide-react';
import { schedule, type ScheduleItem } from '@/data/schedule';
import { cn } from '@/lib/utils';

const typeConfig: Record<
  ScheduleItem['type'],
  { icon: typeof Code2; color: string; dot: string }
> = {
  lecture: { icon: BookText, color: 'text-cyan-300', dot: 'bg-cyan-400' },
  practice: { icon: Code2, color: 'text-blue-300', dot: 'bg-blue-400' },
  break: { icon: Coffee, color: 'text-amber-300', dot: 'bg-amber-400' },
  lunch: { icon: Utensils, color: 'text-orange-300', dot: 'bg-orange-400' },
  showcase: { icon: Presentation, color: 'text-green-300', dot: 'bg-green-400' },
};

export default function Schedule() {
  return (
    <section id="schedule" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-cyan-400">
            FULL DAY AGENDA
          </p>
          <h2 className="text-3xl font-bold text-white sm:text-4xl">培训日程</h2>
          <p className="mt-3 text-sm text-slate-400">
            上午统一授课 · 下午分组专题实训 · 结营成果展示
          </p>
        </div>

        <div className="timeline-line relative pl-10">
          {schedule.map((item, i) => {
            const cfg = typeConfig[item.type];
            return (
              <div key={i} className="relative mb-8 last:mb-0">
                {/* 时间点圆点 */}
                <div
                  className={cn(
                    'absolute -left-[26px] top-1.5 h-3 w-3 rounded-full ring-4 ring-[#050b18]',
                    cfg.dot
                  )}
                />
                <div className="glass rounded-xl p-5 transition-all duration-300 hover:border-cyan-400/30">
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex-1">
                      <div className="mb-1 flex items-center gap-2">
                        <cfg.icon size={14} className={cfg.color} />
                        <span className="font-mono text-xs text-slate-500">{item.time}</span>
                      </div>
                      <h3 className="text-base font-semibold text-white">{item.title}</h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-slate-400">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
