// import create from 'zustand';
import { create } from 'zustand';
import * as SecureStore from 'expo-secure-store';

interface AuthState {
  token: string | null;
  email: string;
  userName: string;
  login: (token: string, email: string, userName: string) => void;
  logout: () => void;
  restoreToken: () => Promise<void>;
}

export const useAuthStore = create<AuthState>((set) => ({
  token: null,
  email: '', // Initialize email as an empty string
  userName: '', // Initialize userName as an empty string
  login: async (token: string, email: string, userName: string) => {
    await SecureStore.setItemAsync('userToken', token);
    set({ token, email, userName }); // Set token, email, and userName
  },
  logout: async () => {
    await SecureStore.deleteItemAsync('userToken');
    set({ token: null, email: '', userName: '' }); // Reset token, email, and userName
  },
  restoreToken: async () => {
    const token = await SecureStore.getItemAsync('userToken');
    set({ token });
  },
}));
