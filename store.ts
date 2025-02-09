import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

const initialFoodValue = {
  fish: 0,
  mouse: 0,
};

export const useFoodStore = create<typeof initialFoodValue>()(
  devtools(() => initialFoodValue)
);

export const addOneFish = () =>
  useFoodStore.setState((state) => ({ fish: state.fish + 1 }));

export const removeOneFish = () =>
  useFoodStore.setState((state) => ({ fish: state.fish - 1 }));

export const resetFish = () => useFoodStore.setState({ fish: 0 });
