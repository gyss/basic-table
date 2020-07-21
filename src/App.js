/** @jsx jsx */

import React from 'react'
import styled from '@emotion/styled'
import {css, Global, jsx} from '@emotion/core'

import ErrorBoundary from './components/ErrorBoundary'
const WeatherTable = React.lazy(() => import('./components/WeatherTable'))

const globalStyles = css`
  html,
  body,
  #root {
    height: 100%;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    font-family: Circular, Arial, sans-serif;
    font-size: 18px;
    color: var(--font-color);
    background-color: var(--tertiary-color);
    padding: 0;
    margin: 0;
  }
`

const AppWrapper = styled.div`
  min-height: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`

export default function App() {
  return (
    <ErrorBoundary>
      <React.Suspense fallback={<div>Loading...</div>}>
        <Global styles={globalStyles} />
        <AppWrapper>
          <WeatherTable />
        </AppWrapper>
      </React.Suspense>
    </ErrorBoundary>
  )
}
