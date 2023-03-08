import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

function guidGenerator() {
  var S4 = function () {
    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
  };
  return (
    S4() +
    S4() +
    "-" +
    S4() +
    "-" +
    S4() +
    "-" +
    S4() +
    "-" +
    S4() +
    S4() +
    S4()
  );
}
export interface Person {
  id: number;
  name: string;
}

interface PersonState {
  persons: Person[];
}

const initialState: PersonState = {
  persons: [],
};

export const fetchPerson = createAsyncThunk(
  "person/fetch",
  async (thunkAPI) => {
    const response = await fetch(
      "https://movie-http-c62a0-default-rtdb.firebaseio.com/persons.json",
      {
        method: "GET",
      }
    );
    const data = response.json();
    console.log(">>>> fetchPerson: ", data);
    return data;
  }
);

export const savePerson = createAsyncThunk(
  "person/save",
  async (name: string, thunkAPI) => {
    const response = await fetch(
      "https://movie-http-c62a0-default-rtdb.firebaseio.com/persons.json",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: guidGenerator(),
          name,
        }),
      }
    );
    const data = await response.json();
    console.log(">>>>>", data.data);
    return data;
  }
);

export const PersonSlice = createSlice({
  name: "person",
  initialState,
  reducers: {
    addPerson: (state, action: PayloadAction<{ name: string }>) => {
      state.persons.push({
        id: state.persons.length,
        name: action.payload.name,
      });
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPerson.fulfilled, (state, action) => {
      console.log("extraReducers> fetchPerson", action.payload);
      state.persons = action.payload;
    });
    builder.addCase(savePerson.fulfilled, (state, action) => {
      console.log("extraReducers> savePerson", action.payload);
      state.persons.push(action.payload);
    });
  },
});

export default PersonSlice.reducer;
export const { addPerson } = PersonSlice.actions;
