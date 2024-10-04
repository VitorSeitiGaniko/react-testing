import { render, screen, fireEvent, getByTestId } from '@testing-library/react';
import App from './App';

const sum = (a: number, b: number) => a + b;

describe('App Component', () => {
    it('should sum correctly', () => {
        expect(sum(1, 2)).toBe(3);
        expect(sum(2, 2)).toBe(4);
    })

    it('should render app with message', () => {
        render(<App />);

        screen.getByText('Hello world!');
    })


    it('should change message when button is clicked', () => {
        render(<App />);

        screen.getByText("Let's learn more about testing in React")
        
        const button = screen.getByTestId('btn-message');

        fireEvent.click(button);

        screen.getByText('Testing is so fun!');
    })

    it('should change button color when clicked', () => {
        render(<App />);
        
        const button = screen.getByTestId('btn-message');

        expect(button).toHaveStyle({background: 'red'});

        fireEvent.click(button);

        expect(button).toHaveStyle({background: 'blue'});
    })
})

export default {}

//o describe espera um titulo e uma função CALLBACK que contem os testes
//o it espera um titulo e uma função CALLBACK que contem os testes
//os testes nada mais são que expectativas que esperamos que sejam verdadeiras

//Jest não foi feito para testas o DOM
//render - é necessário renderizar o componente (App) para que ele possa ser testado
//o screen é um objeto que contem funções para buscar elementos na tela
//o getByText busca um texto na tela - é case sensitive
//https://testing-library.com/docs/queries/about/

