import { Sidebar } from "@/components/Sidebar";
import { AmbientSound } from "@/components/AmbientSound";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentDate = new Intl.DateTimeFormat("pt-BR", {
    weekday: "long",
    day: "numeric",
    month: "long",
  }).format(new Date());

  // Capitalize first letter of the weekday
  const formattedDate = currentDate.charAt(0).toUpperCase() + currentDate.slice(1);

  return (
    <div className="flex h-screen overflow-hidden bg-background-base">
      <Sidebar />
      
      <main className="flex-1 flex flex-col overflow-hidden relative pb-24 md:pb-0">
        {/* Efeito de brilho sutil no fundo do dashboard */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent-gold/5 rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/3" />
        
        <header className="px-10 py-8 border-b border-white/5 bg-background-base/80 backdrop-blur-sm z-10">
          <div className="max-w-6xl mx-auto flex justify-between items-end">
            <div>
              <p className="text-text-secondary text-sm font-medium mb-1">
                {formattedDate}
              </p>
              <h1 className="font-playfair text-3xl text-text-primary tracking-tight">
                Bem-vindo, Acadêmico
              </h1>
            </div>
            
            <div className="flex items-center gap-4">
              <AmbientSound />
              <div className="w-10 h-10 rounded-full bg-background-surface border border-white/10 flex items-center justify-center text-accent-gold font-playfair font-medium shadow-sm cursor-default">
                A
              </div>
            </div>
          </div>
        </header>

        <div className="flex-1 overflow-y-auto z-10">
          <div className="p-10 max-w-6xl mx-auto">
            {children}
          </div>
        </div>

        {/* <Floating Pomodoro Timer /> */}
        <div className="fixed bottom-6 right-6 z-40 w-72 md:w-80 no-print hidden md:block">
          <PomodoroTimer />
        </div>
      </main>
    </div>
  );
}
