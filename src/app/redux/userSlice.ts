import { createSlice } from "@reduxjs/toolkit";

//Colocamos todos los estados(const/variables) que vamos a almacenar
const initialState = {
    name:"",
    username: "",
    email: ""
};

export const userSlice = createSlice({  //Son mini estados o porciones para manejar los datos
                                        //de manera mas simple
    name: "user",    //nombre del slice para hacer referencia en los componentes
    initialState,   //Inicializamos nuestros estados aqui(variables), los que esyan arriba
    reducers: {  //Acciones o funciones que queremos ejecutar o despachar desde los componentes
        addUser: (state, action) => { 
            const {name, username, email} = action.payload;  //el action.payload son los parametros que recibimos desde los componentes
            state.name = name;  
            state.username = username;
            state.email = email;
        },
        changeEmail: (state, action) => {
            state.email = action.payload;
        }
    }
})

export const { addUser, changeEmail } = userSlice.actions; //se coloca este para exportar cada una de nuestras funciones (reducers)
export default userSlice.reducer;  // Para importarlo todo en el store