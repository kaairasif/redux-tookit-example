import { createSlice } from '@reduxjs/toolkit'

const test = createSlice({
    name: 'test1',
    initialState: {
      value: 0,
    },
    reducers: {
     clickToAdd: (state) => {
        state.value += 1
     }
    },
  })


  export default test;