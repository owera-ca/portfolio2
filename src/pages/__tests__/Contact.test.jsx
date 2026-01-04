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
        expect(screen.getByText(/get in/i)).toBeInTheDocument();
        expect(screen.getByText(/touch/i)).toBeInTheDocument();
    });

    test('renders contact details and form', () => {
        render(
            <BrowserRouter>
                <Contact />
            </BrowserRouter>
        );
        expect(screen.getByText(/sandeep.kumar@owera.ca/i)).toBeInTheDocument();
        expect(screen.getByText(/send a message/i)).toBeInTheDocument();
        expect(screen.getByPlaceholderText(/john doe/i)).toBeInTheDocument();
    });
});
