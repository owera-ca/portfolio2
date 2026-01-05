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
        // "About" text from key 'about.title'. Using getAllByText as it might match multiple elements (title + highlight pattern)
        const headings = screen.getAllByText(/about.title/i);
        expect(headings[0]).toBeInTheDocument();
    });

    test('renders mission statement', () => {
        render(
            <BrowserRouter>
                <About />
            </BrowserRouter>
        );
        expect(screen.getByText(/about.slogan/i)).toBeInTheDocument();
        expect(screen.getByText(/about.missionTitle/i)).toBeInTheDocument();
    });
});
