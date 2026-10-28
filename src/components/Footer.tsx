export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <div className="flex items-center gap-2">
            <span className="inline-block h-5 w-5 rounded bg-gradient-to-br from-cyan-400 to-blue-600" />
            <span className="text-sm font-semibold text-slate-300">RT-Thread 开发实训营</span>
          </div>
          <p className="text-xs text-slate-500">
            共建共享共赢 · 与每一位开发者共创嵌入式未来
          </p>
        </div>
      </div>
    </footer>
  );
}
