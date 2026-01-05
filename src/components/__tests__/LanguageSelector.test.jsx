import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import LanguageSelector from '../LanguageSelector';
// We need to mock the useTranslation hook to spy on i18n
import { useTranslation } from 'react-i18next';

jest.mock('lucide-react', () => ({
    Check: () => <span>CheckIcon</span>,
    ChevronDown: () => <span>ChevronDownIcon</span>,
    Globe: () => <span>GlobeIcon</span>,
}));

// Framer Motion mock
jest.mock('framer-motion', () => ({
    motion: {
        div: ({ children, className }) => <div className={className}>{children}</div>,
    },
    AnimatePresence: ({ children }) => <>{children}</>,
}));

describe('LanguageSelector Component', () => {
    const changeLanguageMock = jest.fn();

    beforeEach(() => {
        useTranslation.mockReturnValue({
            t: (str) => str,
            i18n: {
                resolvedLanguage: 'en',
                changeLanguage: changeLanguageMock,
            },
        });
        changeLanguageMock.mockClear();
    });

    test('renders current language short code', () => {
        render(<LanguageSelector />);
        expect(screen.getByText('EN')).toBeInTheDocument();
    });

    test('toggles dropdown when clicked', () => {
        render(<LanguageSelector />);

        // Initially dropdown should not be separate button items visible
        // But since we are mocking AnimatePresence, logic depends on state
        const trigger = screen.getByText('EN').closest('button');
        fireEvent.click(trigger);

        // Check for other languages
        expect(screen.getByText('Español')).toBeInTheDocument();
        expect(screen.getByText('Deutsch')).toBeInTheDocument();
    });

    test('calls changeLanguage when a language is selected', () => {
        render(<LanguageSelector />);

        const trigger = screen.getByText('EN').closest('button');
        fireEvent.click(trigger);

        const spanishOption = screen.getByText('Español');
        fireEvent.click(spanishOption);

        expect(changeLanguageMock).toHaveBeenCalledWith('es');
    });
});
