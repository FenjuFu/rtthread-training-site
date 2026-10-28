import NavBar from '@/components/NavBar';
import Hero from '@/components/Hero';
import Highlights from '@/components/Highlights';
import Schedule from '@/components/Schedule';
import TeacherSection from '@/components/TeacherSection';
import StudentSection from '@/components/StudentSection';
import Showcase from '@/components/Showcase';
import Hardware from '@/components/Hardware';
import Closing from '@/components/Closing';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <NavBar />
      <main>
        <Hero />
        <Highlights />
        <Schedule />
        <TeacherSection />
        <StudentSection />
        <Showcase />
        <Hardware />
        <Closing />
      </main>
      <Footer />
    </div>
  );
}
