import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface User {
  id: string;
  email: string;
  name?: string;
}

const userSlice = createSlice({
  name: "user",
  initialState: null as User | null,
  reducers: {
    setUser: (_, action: PayloadAction<User>) => action.payload,
    clearUser: () => null,
  },
});

export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;
