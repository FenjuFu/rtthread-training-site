import { CheckCircle2, Rocket, Github, Globe } from 'lucide-react';

const checklist = [
  '已完成开发环境搭建',
  '已成功编译下载 RT-Thread 工程',
  '已完成基础线程实验',
  '已理解线程、延时、消息队列等基础概念',
  '已完成一个专题成果',
  '已准备结营展示',
];

const studyPaths = [
  'BSP 与板级移植',
  '设备驱动框架',
  '软件包管理与组件集成',
  '网络、文件系统、GUI',
  '社区协作与开源贡献',
];

export default function Closing() {
  return (
    <section id="closing" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-cyan-400">
            WRAP UP
          </p>
          <h2 className="text-3xl font-bold text-white sm:text-4xl">结营与后续学习</h2>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {/* 结营检查清单 */}
          <div className="glass rounded-xl p-6 sm:p-8">
            <h3 className="mb-5 text-lg font-semibold text-white">结营检查清单</h3>
            <ul className="space-y-3">
              {checklist.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-slate-300">
                  <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-green-400" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* 后续学习路径 */}
          <div className="glass rounded-xl p-6 sm:p-8">
            <h3 className="mb-5 flex items-center gap-2 text-lg font-semibold text-white">
              <Rocket size={18} className="text-cyan-400" />
              后续学习路径
            </h3>
            <ol className="space-y-3">
              {studyPaths.map((path, i) => (
                <li key={i} className="flex items-center gap-3 text-sm text-slate-300">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-cyan-400/10 text-xs font-mono text-cyan-300">
                    {i + 1}
                  </span>
                  {path}
                </li>
              ))}
            </ol>
          </div>
        </div>

        {/* 部署说明 */}
        <div className="glass mt-6 rounded-xl p-6 sm:p-8">
          <h3 className="mb-4 text-lg font-semibold text-white">部署与分享</h3>
          <p className="mb-5 text-sm leading-relaxed text-slate-400">
            本站点为纯静态单页应用，可直接部署到 Vercel 或 GitHub Pages，无需后端服务。
          </p>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="flex items-start gap-3 rounded-lg border border-white/5 bg-white/[0.02] p-4">
              <Globe size={20} className="mt-0.5 shrink-0 text-cyan-400" />
              <div>
                <p className="text-sm font-semibold text-white">Vercel 部署</p>
                <p className="mt-1 font-mono text-xs text-slate-400">
                  npm run build → 导入仓库 → 自动部署
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3 rounded-lg border border-white/5 bg-white/[0.02] p-4">
              <Github size={20} className="mt-0.5 shrink-0 text-cyan-400" />
              <div>
                <p className="text-sm font-semibold text-white">GitHub Pages 部署</p>
                <p className="mt-1 font-mono text-xs text-slate-400">
                  npm run build → 推送 dist → 启用 Pages
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
