import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import About from '../About';

describe('About Page', () => {
    test('renders About page with main heading', () => {
        render(
            <BrowserRouter>
                <About />
            </BrowserRouter>
        );
        expect(screen.getByRole('heading', { name: /about owera/i })).toBeInTheDocument();
    });

    test('renders mission statement', () => {
        render(
            <BrowserRouter>
                <About />
            </BrowserRouter>
        );
        expect(screen.getByText(/much in little/i)).toBeInTheDocument();
        expect(screen.getByText(/our mission/i)).toBeInTheDocument();
    });
});
