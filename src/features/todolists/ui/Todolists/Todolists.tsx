import {useAppDispatch, useAppSelector} from "@/common/hooks"
import {TodolistItem} from "./TodolistItem/TodolistItem"
import Grid from "@mui/material/Grid2"
import Paper from "@mui/material/Paper"
import {useEffect} from "react";
import {todolistsApi} from "@/features/todolists/api/todolistsApi.ts";
import {setTodolists} from "@/features/todolists/model/todolists-slice.ts";
import {selectTodolists} from "@/features/todolists/model/todolists-selectors.ts";

export const Todolists = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    todolistsApi.getTodolists().then(res => {
      dispatch(setTodolists({todolists: res.data}))
    })
  }, [])

  const todolists = useAppSelector(selectTodolists)

  return (
    <>
      {todolists.map((todolist) => (
        <Grid key={todolist.id}>
          <Paper sx={{ p: "0 20px 20px 20px" }}>
            <TodolistItem todolist={todolist} />
          </Paper>
        </Grid>
      ))}
    </>
  )
}
