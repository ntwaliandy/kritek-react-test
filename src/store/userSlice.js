import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import * as userApi from '../api/userApi';

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
  const users = await userApi.fetchUsers();
  return users;
});

export const createUser = createAsyncThunk('users/createUser', async (user) => {
  const newUser = await userApi.createUser(user);
  return newUser;
});

export const updateUser = createAsyncThunk('users/updateUser', async (user) => {
  const updatedUser = await userApi.updateUser(user);
  return updatedUser;
});

export const deleteUser = createAsyncThunk('users/deleteUser', async (userId) => {
  await userApi.deleteUser(userId);
  return userId;
});

const userSlice = createSlice({
  name: 'users',
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.fulfilled, (state, action) => {
        return action.payload;
      })
      .addCase(createUser.fulfilled, (state, action) => {
        state.push(action.payload);
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        const { id, name, email } = action.payload;
        const existingUser = state.find((user) => user.id === id);
        if (existingUser) {
          existingUser.name = name;
          existingUser.email = email;
        }
      })
      .addCase(deleteUser.fulfilled, (state, action) => {
        const userId = action.payload;
        return state.filter((user) => user.id !== userId);
      });
  },
});

export default userSlice.reducer;
