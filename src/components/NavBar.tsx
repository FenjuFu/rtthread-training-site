import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const navItems = [
  { id: 'hero', label: '首页' },
  { id: 'highlights', label: '亮点' },
  { id: 'schedule', label: '日程' },
  { id: 'teacher', label: '讲师授课版' },
  { id: 'student', label: '学员手册版' },
  { id: 'showcase', label: '示例成果' },
  { id: 'hardware', label: '硬件采购' },
  { id: 'closing', label: '结营' },
];

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeId, setActiveId] = useState('hero');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      const sections = navItems.map((n) => document.getElementById(n.id));
      const offset = window.scrollY + 120;
      for (let i = sections.length - 1; i >= 0; i--) {
        const sec = sections[i];
        if (sec && sec.offsetTop <= offset) {
          setActiveId(navItems[i].id);
          break;
        }
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleClick = (id: string) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled ? 'glass shadow-lg shadow-black/20' : 'bg-transparent'
      )}
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <button
            onClick={() => handleClick('hero')}
            className="flex items-center gap-2 text-left"
          >
            <span className="inline-block h-7 w-7 rounded-md bg-gradient-to-br from-cyan-400 to-blue-600" />
            <span className="text-sm font-bold tracking-wide text-white">
              RT-Thread 实训营
            </span>
          </button>

          {/* 桌面导航 */}
          <div className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleClick(item.id)}
                className={cn(
                  'rounded-md px-3 py-2 text-sm transition-colors',
                  activeId === item.id
                    ? 'text-cyan-300'
                    : 'text-slate-400 hover:text-white'
                )}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* 移动端菜单按钮 */}
          <button
            className="text-slate-300 lg:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="菜单"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* 移动端展开菜单 */}
        {menuOpen && (
          <div className="glass border-t border-white/5 pb-4 pt-2 lg:hidden">
            <div className="flex flex-col gap-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleClick(item.id)}
                  className={cn(
                    'rounded-md px-3 py-2.5 text-left text-sm transition-colors',
                    activeId === item.id
                      ? 'bg-cyan-500/10 text-cyan-300'
                      : 'text-slate-300 hover:bg-white/5'
                  )}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
