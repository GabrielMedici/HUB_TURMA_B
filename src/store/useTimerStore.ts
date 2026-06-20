import { create } from 'zustand';

type Mode = 'pomodoro' | 'shortBreak';

export const POMODORO_TIME = 25 * 60;
export const SHORT_BREAK_TIME = 5 * 60;

interface TimerState {
  timeLeft: number;
  isRunning: boolean;
  mode: Mode;
  start: () => void;
  pause: () => void;
  reset: () => void;
  tick: () => void;
  toggleMode: () => void;
}

export const useTimerStore = create<TimerState>((set) => ({
  timeLeft: POMODORO_TIME,
  isRunning: false,
  mode: 'pomodoro',
  start: () => set({ isRunning: true }),
  pause: () => set({ isRunning: false }),
  reset: () => set((state) => ({ 
    timeLeft: state.mode === 'pomodoro' ? POMODORO_TIME : SHORT_BREAK_TIME, 
    isRunning: false 
  })),
  tick: () => set((state) => {
    if (state.timeLeft > 0) {
      return { timeLeft: state.timeLeft - 1 };
    }
    return { isRunning: false, timeLeft: 0 };
  }),
  toggleMode: () => set((state) => {
    const newMode = state.mode === 'pomodoro' ? 'shortBreak' : 'pomodoro';
    return {
      mode: newMode,
      timeLeft: newMode === 'pomodoro' ? POMODORO_TIME : SHORT_BREAK_TIME,
      isRunning: false,
    };
  }),
}));
