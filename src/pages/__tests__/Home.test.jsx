import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Home from '../Home';

describe('Home Page', () => {
    test('renders Home page with main heading', () => {
        render(
            <BrowserRouter>
                <Home />
            </BrowserRouter>
        );
        const heading = screen.getByText(/owera/i);
        expect(heading).toBeInTheDocument();
    });

    test('renders start a project button', () => {
        render(
            <BrowserRouter>
                <Home />
            </BrowserRouter>
        );
        const button = screen.getByText(/start a project/i);
        expect(button).toBeInTheDocument();
    });
});
