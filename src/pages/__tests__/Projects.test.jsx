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
        expect(screen.getAllByText(/projects.title/i)[0]).toBeInTheDocument();
        expect(screen.getAllByText(/projects.titleHighlight/i)[0]).toBeInTheDocument();
    });

    test('renders project cards', () => {
        render(
            <BrowserRouter>
                <Projects />
            </BrowserRouter>
        );
        expect(screen.getAllByText(/projects.items.p1Title/i)[0]).toBeInTheDocument();
        expect(screen.getAllByText(/projects.items.p2Title/i)[0]).toBeInTheDocument();
    });
});
