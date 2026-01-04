import '@testing-library/jest-dom';
import { TextEncoder, TextDecoder } from 'util';

Object.assign(global, { TextEncoder, TextDecoder });

global.IntersectionObserver = class IntersectionObserver {
    constructor(callback, options) {
        this.callback = callback;
    }
    observe(element) {
        // Trigger "in view" immediately for testing purposes if reasonable, 
        // or just ensure IT DOES NOT CRASH.
        // Ideally we might want to manually trigger, but for now avoiding crash is key.
        this.callback([{ isIntersecting: true, target: element }], this);
    }
    unobserve() { }
    disconnect() { }
};
