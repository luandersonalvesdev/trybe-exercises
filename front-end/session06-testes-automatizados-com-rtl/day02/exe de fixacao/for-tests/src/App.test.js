// App.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import userEvent from '@testing-library/user-event';

describe('Renderize o <App> e ...', () => {
  test('Se renderiza com a primeira piada, fetch é chamado 1x, clicar no botao aparece outra piada, a antiga piada nao aparece mais, o fetch é chamado 2x', async () => {

    jest.spyOn(global, 'fetch').mockResolvedValue({
      json: async () => ({
        joke: 'uma piada',
      })
    })
    
    // ACESSAR
    render(<App />)
    const jokeEl = await screen.findByText(/uma piada/i);

    // AFERIR
    expect(jokeEl).toBeInTheDocument();
    expect(global.fetch).toBeCalledTimes(1);

    expect(screen.queryByText(/outra piada/i)).not.toBeInTheDocument();

    jest.spyOn(global, 'fetch').mockResolvedValue(({
      json: async () => ({
        joke: 'outra piada'
      })
    }));

    const btnEl = screen.getByRole('button', { name: /new joke/i });
    userEvent.click(btnEl);
    
    const jokeEle = await screen.findByText(/outra piada/i);

    expect(jokeEle).toBeInTheDocument();
    expect(screen.queryByText(/uma piada/i)).not.toBeInTheDocument();

    expect(global.fetch).toBeCalledTimes(2);
  });
});