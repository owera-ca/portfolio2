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
        // Expecting the translation key because of the mock
        const heading = screen.getByText(/hero.title/i);
        expect(heading).toBeInTheDocument();
    });

    test('renders start a project button', () => {
        render(
            <BrowserRouter>
                <Home />
            </BrowserRouter>
        );
        // Expecting the translation key
        const button = screen.getByText(/hero.startProject/i);
        expect(button).toBeInTheDocument();
    });
});
