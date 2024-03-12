import { queryClient } from '@core/query'
import NiceModal from '@ebay/nice-modal-react'
import { LayoutApp } from '@layouts/layout-app'
import { themeProject } from '@styles/global/theme'
import { QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools />
      <NiceModal.Provider>
        <ThemeProvider theme={themeProject}>
          <BrowserRouter>
            <LayoutApp />
          </BrowserRouter>
        </ThemeProvider>
      </NiceModal.Provider>
    </QueryClientProvider>
  )
}

export default App
