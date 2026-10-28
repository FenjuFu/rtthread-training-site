import { Terminal } from 'lucide-react';

type TerminalBlockProps = {
  output: string;
  title?: string;
};

export default function TerminalBlock({ output, title = '终端输出' }: TerminalBlockProps) {
  return (
    <div className="terminal my-3">
      <div className="terminal-bar">
        <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-green-400/70" />
        <span className="ml-2 flex items-center gap-1.5 text-xs text-cyan-300/70">
          <Terminal size={12} />
          {title}
        </span>
      </div>
      <pre className="terminal-body">{output}</pre>
    </div>
  );
}
