import React from 'react'
import { FiAlertCircle } from 'react-icons/fi'

import { Container } from './styles'

function ErrorMessage() {
  return (
    <Container>
      <FiAlertCircle size={32} />
      <h3>User doesn't exists!</h3>
    </Container>
  )
}

export default ErrorMessage
