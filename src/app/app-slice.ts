import {createSlice} from "@reduxjs/toolkit"

// export const changeThemeModeAC = createAction<{ themeMode: ThemeMode }>("app/changeThemeMode")

export const appSlice = createSlice({
  name: 'app',
  initialState: {
    themeMode: "light" as ThemeMode,
  },
  reducers: create => ({
    changeThemeModeAC: create.reducer<{themeMode: ThemeMode}>((state, action) => {
      state.themeMode = action.payload.themeMode
    })
  }),
  selectors: {
    selectThemeMode: state => state.themeMode
  }
})

export const {changeThemeModeAC} = appSlice.actions

export const appReducer = appSlice.reducer

// export const appSlice = createReducer(initialState, (builder) => {
//   builder.addCase(changeThemeModeAC, (state, action) => {
//     state.themeMode = action.payload.themeMode
//   })
// })

export type ThemeMode = "dark" | "light"
