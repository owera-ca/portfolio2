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
        const headings = screen.getAllByText(/services.title/i);
        expect(headings[0]).toBeInTheDocument();
    });

    test('renders specific service items', () => {
        render(
            <BrowserRouter>
                <Services />
            </BrowserRouter>
        );
        expect(screen.getAllByText(/services.items.webDev/i)[0]).toBeInTheDocument();
        expect(screen.getAllByText(/services.items.cloud/i)[0]).toBeInTheDocument();
    });
});
