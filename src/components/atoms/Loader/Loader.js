import { CircularProgress } from '@mui/material'
import React from 'react'

const Loader = (loading) => {
  return (
    <div>
        {loading.loading ? (
            <CircularProgress />
        ) : (
            loading.children
        )}
    </div>
  )
}

export default Loader