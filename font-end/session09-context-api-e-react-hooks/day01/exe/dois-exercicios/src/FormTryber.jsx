import { useState } from 'react';

export default function FormTryber() {
  const userInfosMock = {
    fullName: '',
    age: 0,
    city: '',
    module: '',
  }
  const [userInfos, setUserInfos] = useState(userInfosMock);

  const handleChange = ({target}) => {
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const { name } = target;
    setUserInfos((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <section>  
        <label htmlFor="fullName">
          Nome
          <input 
            id="fullName" 
            name="fullName" 
            type="text"
            value={ userInfos.fullName }
            onChange={ handleChange }
            />
        </label>
        <p>Nome: {userInfos.fullName }</p>
      </section>

      <section>  
        <label htmlFor="age">
          Idade
          <input 
            id="age" 
            name="age" 
            type="number"
            value={ userInfos.age }
            onChange={ handleChange }
            />
        </label>
        <p>Idade: {userInfos.age }</p>
      </section>

      <section>  
        <label htmlFor="city">
          Cidade
          <input 
            id="city" 
            name="city" 
            type="text"
            value={ userInfos.city }
            onChange={ handleChange }
            />
        </label>
        <p>Cidade: { userInfos.city }</p>
      </section>
      
      <section>  
        <label htmlFor="fundamentos">Fundamentos</label>
        <input type="radio" id="fundamentos" name="module" value="fundamentos" onChange={handleChange}/>

        <label htmlFor="frontend">FrontEnd</label>
        <input type="radio" id="frontend" name="module" value="frontend" onChange={handleChange}/>

        <label htmlFor="backend">Backend</label>
        <input type="radio" id="backend" name="module" value="backend" onChange={handleChange}/>

        <label htmlFor="cienciadacomputacao">Ciencia da Computacao</label>
        <input type="radio" id="cienciadacomputacao" name="module" value="cienciadacomputacao" onChange={handleChange}/>
      </section>
    </form>
  )
};
