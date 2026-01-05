import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Contact from '../Contact';

describe('Contact Page', () => {
    test('renders Contact page with main heading', () => {
        render(
            <BrowserRouter>
                <Contact />
            </BrowserRouter>
        );
        expect(screen.getAllByText(/contact.title/i)[0]).toBeInTheDocument();
        expect(screen.getAllByText(/contact.titleHighlight/i)[0]).toBeInTheDocument();
    });

    test('renders contact details and form', () => {
        render(
            <BrowserRouter>
                <Contact />
            </BrowserRouter>
        );
        expect(screen.getByText(/sandeep.kumar@owera.ca/i)).toBeInTheDocument();
        expect(screen.getByText(/contact.sendMessage/i)).toBeInTheDocument();
        expect(screen.getByPlaceholderText(/contact.placeholders.name/i)).toBeInTheDocument();
    });
});
