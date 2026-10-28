import { ListChecks, CheckCircle2, AlertTriangle, ClipboardList, Target } from 'lucide-react';
import { studentManual, type StudentSection } from '@/data/studentManual';
import TerminalBlock from './TerminalBlock';
import { cn } from '@/lib/utils';

function ManualCard({ section }: { section: StudentSection }) {
  const isSpecialized = section.category === 'specialized';
  return (
    <div id={section.id} className="glass mb-6 scroll-mt-20 rounded-xl p-6 sm:p-8">
      {/* 标题 */}
      <div className="mb-5 flex items-center gap-3">
        <span
          className={cn(
            'rounded-md px-2.5 py-1 text-xs font-semibold',
            isSpecialized
              ? 'bg-purple-400/10 text-purple-300'
              : 'bg-cyan-400/10 text-cyan-300'
          )}
        >
          {isSpecialized ? '专题实践' : '基础实验'}
        </span>
        <h3 className="text-lg font-bold text-white">{section.title}</h3>
      </div>

      {/* 实验目标 */}
      <div className="mb-5">
        <div className="mb-2.5 flex items-center gap-2">
          <Target size={15} className="text-cyan-400" />
          <h4 className="text-sm font-semibold text-cyan-300">实验目标</h4>
        </div>
        <ul className="space-y-1.5">
          {section.target.map((t, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-slate-300">
              <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-cyan-400" />
              {t}
            </li>
          ))}
        </ul>
      </div>

      {/* 操作步骤 */}
      <div className="mb-5">
        <div className="mb-2.5 flex items-center gap-2">
          <ListChecks size={15} className="text-blue-400" />
          <h4 className="text-sm font-semibold text-blue-300">操作步骤</h4>
        </div>
        <ol className="space-y-2">
          {section.steps.map((step, i) => (
            <li key={i} className="flex items-start gap-3 text-sm text-slate-300">
              <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-400/10 text-xs font-mono text-blue-300">
                {i + 1}
              </span>
              {step}
            </li>
          ))}
        </ol>
      </div>

      {/* 预期结果 */}
      {section.expectedResult && (
        <div className="mb-5">
          <h4 className="mb-2.5 flex items-center gap-2 text-sm font-semibold text-green-300">
            <CheckCircle2 size={15} />
            预期结果
          </h4>
          <TerminalBlock output={section.expectedResult.join('\n')} title="预期输出" />
        </div>
      )}

      {/* 常见问题 */}
      {section.commonIssues && (
        <div className="mb-5">
          <div className="mb-2.5 flex items-center gap-2">
            <AlertTriangle size={15} className="text-amber-400" />
            <h4 className="text-sm font-semibold text-amber-300">常见问题</h4>
          </div>
          <ul className="space-y-1.5">
            {section.commonIssues.map((issue, i) => (
              <li key={i} className="rounded-md bg-amber-400/5 px-3 py-1.5 text-sm text-amber-200/80">
                {issue}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* 成果要求 */}
      {section.requirements && (
        <div className="mt-5 border-t border-white/5 pt-4">
          <div className="mb-2.5 flex items-center gap-2">
            <ClipboardList size={15} className="text-green-400" />
            <h4 className="text-sm font-semibold text-green-300">成果要求</h4>
          </div>
          <ul className="space-y-1.5">
            {section.requirements.map((r, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-slate-300">
                <CheckCircle2 size={14} className="mt-0.5 shrink-0 text-green-400/70" />
                {r}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default function StudentSection() {
  return (
    <section id="student" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-cyan-400">
            STUDENT MANUAL
          </p>
          <h2 className="text-3xl font-bold text-white sm:text-4xl">学员手册版</h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-slate-400">
            按实验步骤编写，包含目标、操作步骤、预期结果、常见问题与成果要求，可直接照着做。
          </p>
        </div>

        {/* 锚点导航 */}
        <div className="mb-8 flex flex-wrap justify-center gap-2">
          {studentManual.map((s) => (
            <button
              key={s.id}
              onClick={() => document.getElementById(s.id)?.scrollIntoView({ behavior: 'smooth' })}
              className="glass rounded-full px-4 py-1.5 text-xs text-slate-300 transition-colors hover:text-cyan-300"
            >
              {s.title}
            </button>
          ))}
        </div>

        {studentManual.map((section) => (
          <ManualCard key={section.id} section={section} />
        ))}
      </div>
    </section>
  );
}
