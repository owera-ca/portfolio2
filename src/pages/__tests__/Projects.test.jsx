import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Projects from '../Projects';

describe('Projects Page', () => {
    test('renders Projects page with main heading', () => {
        render(
            <BrowserRouter>
                <Projects />
            </BrowserRouter>
        );
        expect(screen.getByText(/selected/i)).toBeInTheDocument();
        expect(screen.getByText(/work/i)).toBeInTheDocument();
    });

    test('renders project cards', () => {
        render(
            <BrowserRouter>
                <Projects />
            </BrowserRouter>
        );
        expect(screen.getByText(/fintech dashboard/i)).toBeInTheDocument();
        expect(screen.getByText(/e-commerce platform/i)).toBeInTheDocument();
    });
});
