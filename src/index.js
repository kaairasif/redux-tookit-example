import React from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import App from './App'
import { store } from './data/store'

import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist'

let persistor = persistStore(store)


const container = document.getElementById('root')
const root = createRoot(container)
root.render(
<Provider store={store}>
    <PersistGate persistor={ persistor }>
        <App/>
    </PersistGate>
</Provider>
)
