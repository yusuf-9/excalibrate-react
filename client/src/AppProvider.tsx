import React from 'react'
import SocketProvider from '@/providers/socket'
import StoreProvider from '@/providers/store'
import App from '@/App'

const AppProvider = () => {
  return (
    <StoreProvider>
        <SocketProvider>
            <App />
        </SocketProvider>
    </StoreProvider>
  )
}

export default AppProvider