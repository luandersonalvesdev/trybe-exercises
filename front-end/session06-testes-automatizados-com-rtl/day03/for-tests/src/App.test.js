// App.test.js
import App from "./App";
import renderWithRouter from './renderWithRouter';
import { screen, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe('ver se está renderizando a App', () => {
  it('renderize a App', () => {
    renderWithRouter(<App />);

    const getEl = screen.getByRole('heading', {  name: /você está na página início/i});

    expect(getEl).toBeInTheDocument();
  });

  it('ver se vai pra outra pagina', () => {
    const { history } = renderWithRouter(<App />);

    const aboutLink = screen.getByRole('link', {  name: /sobre/i});
    expect(aboutLink).toBeInTheDocument();

    act(() => {
      userEvent.click(aboutLink);
    })

    const { location: { pathname } } = history;
    expect(pathname).toBe('/about');

    const textAbout = screen.getByRole('heading', { name: /sobre/i });
    expect(textAbout).toBeDefined();
  });

  it('ver se mostra página nao existente', () => {
    const { history } = renderWithRouter(<App />);
    const { location: { pathname } } = history;

    expect(pathname).toBe('/');

    act(() => {
      history.push('/qualquercoisa');
    });

    const { location: { pathname: pathname2 } } = history;

    const notFoundEl = screen.getByRole('heading', {  name: /não encontrada/i});
    console.log(pathname2);

    expect(notFoundEl).toBeDefined();
    expect(pathname2).toBe('/qualquercoisa');
  });

});
