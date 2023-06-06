import { useState, useEffect } from 'react'
import './FormTryber.css'



export default function TrybeMail() {
  const emailListMock = [
    {
      id: 1,
      title: 'Sua fatura zerou',
      status: 0,
    },
    {
      id: 2,
      title: 'Você foi promovido',
      status: 0,
    },
    {
      id: 3,
      title: 'Seu nome no Serasa está limpo!',
      status: 0,
    },
    
  ]
  const [emailList, setEmailList] = useState(emailListMock);

  function handleEmailRead(id) {
    const emailRead = emailList.map((email) => {
      if (email.id === id) {
        return {...email, status: 1}
      }
      return email
    });
    setEmailList(() => emailRead)
  }
  
  function allEmailRead() {
    const emailRead = emailList.map((email) => ({...email, status: 1 }))
    setEmailList(() => emailRead);
  }

  function handleEmailUnread(id) {
    const emailUnread = emailList.map((email) => {
      if (email.id === id) {
        return { ...email, status: 0 }
      }
      return email;
    })
    setEmailList(() => emailUnread)
  }

  function allEmailUnread() {
    const emailUnread = emailList.map((email) => ({...email, status: 0 }))
    setEmailList(() => emailUnread);
  }


  useEffect(() => {
    emailList.every((email) => email.status === 1) && alert('Todos os emails lidos!');
  }, [emailList])

  return (
    <div>
      <div>
        <button onClick={ allEmailRead }>Marcar todas como lida</button>
        <button onClick={ allEmailUnread }>Marcar todas como não lida</button>
      </div>

      <div>
        {
          emailList.map(({title, id, status}) => {
            return (
              <div key={ id }>
                <p className={status && 'read'}>{title}</p>
                <button onClick={() => handleEmailRead(id)}>Lida</button>
                <button onClick={() => handleEmailUnread(id)}>Não lida</button>
              </div>
            )
          })
        }
      </div>
    </div>
  )   
}