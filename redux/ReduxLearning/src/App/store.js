import React from 'react'
import {configureStore} from '@reduxjs/toolkit'
import todoRuducer from "../Todo/TodoSlice"


export const store = configureStore({
    reducer: todoRuducer
})