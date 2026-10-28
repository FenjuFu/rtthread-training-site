import { Target, MessageSquare, Sparkles, HelpCircle, ArrowRight } from 'lucide-react';
import { teacherContent, type TeacherSection } from '@/data/teacherContent';
import TerminalBlock from './TerminalBlock';

function SectionCard({ section }: { section: TeacherSection }) {
  return (
    <div id={section.id} className="glass mb-6 scroll-mt-20 rounded-xl p-6 sm:p-8">
      {/* 标题行 */}
      <div className="mb-5 flex flex-wrap items-center gap-3">
        <span className="font-mono rounded-md bg-cyan-400/10 px-3 py-1 text-xs text-cyan-300">
          {section.time}
        </span>
        <h3 className="text-xl font-bold text-white">{section.title}</h3>
      </div>

      {/* 教学目标 */}
      <div className="mb-5">
        <div className="mb-2.5 flex items-center gap-2">
          <Target size={15} className="text-cyan-400" />
          <h4 className="text-sm font-semibold text-cyan-300">教学目标</h4>
        </div>
        <ul className="space-y-1.5">
          {section.goals.map((goal, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-slate-300">
              <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-cyan-400" />
              {goal}
            </li>
          ))}
        </ul>
      </div>

      {/* 讲师话术 */}
      <div className="mb-5">
        <div className="mb-2.5 flex items-center gap-2">
          <MessageSquare size={15} className="text-blue-400" />
          <h4 className="text-sm font-semibold text-blue-300">讲师授课话术</h4>
        </div>
        <div className="space-y-2">
          {section.script.map((line, i) => (
            <p key={i} className="rounded-lg border-l-2 border-blue-400/30 bg-blue-400/5 py-2 pl-3 pr-2 text-sm leading-relaxed text-slate-300">
              {line}
            </p>
          ))}
        </div>
      </div>

      {/* 讲授重点 */}
      <div className="mb-5">
        <div className="mb-2.5 flex items-center gap-2">
          <Sparkles size={15} className="text-amber-400" />
          <h4 className="text-sm font-semibold text-amber-300">讲授重点</h4>
        </div>
        <div className="flex flex-wrap gap-2">
          {section.highlights.map((h, i) => (
            <span
              key={i}
              className="rounded-md border border-amber-400/20 bg-amber-400/5 px-3 py-1.5 text-xs text-amber-200/80"
            >
              {h}
            </span>
          ))}
        </div>
      </div>

      {/* 互动问题 */}
      {section.interaction && (
        <div className="mb-5">
          <div className="mb-2.5 flex items-center gap-2">
            <HelpCircle size={15} className="text-purple-400" />
            <h4 className="text-sm font-semibold text-purple-300">互动提问</h4>
          </div>
          <ul className="space-y-1.5">
            {section.interaction.map((q, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-slate-300">
                <span className="mt-0.5 text-purple-400">Q{i + 1}</span>
                {q}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* 演示输出 */}
      {section.demoOutput && <TerminalBlock output={section.demoOutput} />}

      {/* 收尾话术 */}
      <div className="mt-5 flex items-start gap-2 rounded-lg border border-green-400/20 bg-green-400/5 p-3">
        <ArrowRight size={15} className="mt-0.5 shrink-0 text-green-400" />
        <p className="text-sm leading-relaxed text-green-200/80">{section.closing}</p>
      </div>
    </div>
  );
}

export default function TeacherSection() {
  return (
    <section id="teacher" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-cyan-400">
            INSTRUCTOR GUIDE
          </p>
          <h2 className="text-3xl font-bold text-white sm:text-4xl">讲师授课版</h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-slate-400">
            按培训时间轴展开，每节包含教学目标、讲师话术、讲授重点、互动提问与收尾话术，可直接用于授课。
          </p>
        </div>

        {/* 锚点快捷导航 */}
        <div className="mb-8 flex flex-wrap justify-center gap-2">
          {teacherContent.map((s) => (
            <button
              key={s.id}
              onClick={() => document.getElementById(s.id)?.scrollIntoView({ behavior: 'smooth' })}
              className="glass rounded-full px-4 py-1.5 text-xs text-slate-300 transition-colors hover:text-cyan-300"
            >
              {s.title}
            </button>
          ))}
        </div>

        {teacherContent.map((section) => (
          <SectionCard key={section.id} section={section} />
        ))}
      </div>
    </section>
  );
}
