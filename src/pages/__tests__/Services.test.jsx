import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Services from '../Services';

describe('Services Page', () => {
    test('renders Services page with main heading', () => {
        render(
            <BrowserRouter>
                <Services />
            </BrowserRouter>
        );
        const heading = screen.getByRole('heading', { name: /our services/i });
        expect(heading).toBeInTheDocument();
    });

    test('renders specific service items', () => {
        render(
            <BrowserRouter>
                <Services />
            </BrowserRouter>
        );
        expect(screen.getByText(/web development/i)).toBeInTheDocument();
        expect(screen.getByText(/cloud solutions/i)).toBeInTheDocument();
    });
});
