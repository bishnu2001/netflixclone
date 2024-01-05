import {configureStore} from"@reduxjs/toolkit";
import Netflixreducer from"./slice";

const store=configureStore({
    reducer:{
        netflix:Netflixreducer,
    }
})
export{store};