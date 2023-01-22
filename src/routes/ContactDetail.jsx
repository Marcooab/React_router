import React from 'react'
import { useParams, useNavigate } from "react-router-dom"

const ContactDetail = () => {
  const { id } = useParams();

  const navigate = useNavigate()

  const handleContact = () => {
    console.log("Contato Enviado")
    return navigate("/")
  }

  return (
    <div>
      <h1>Mais Informacoes</h1>x
      <button onClick={handleContact}>Enviar Mensagem</button>
    </div>
  )
}

export default ContactDetail