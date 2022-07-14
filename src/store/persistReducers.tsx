import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persisted = (reducers: any) => {
    const persistedReducer = persistReducer(
        {
            key: '07/22-aula-react-redux-erik-tavares',
            storage,
            whitelist: ['temperature']
        },
        reducers
    )

    return persistedReducer
}

export default persisted