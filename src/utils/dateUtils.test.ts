import '@testing-library/jest-dom/extend-expect';
import { getTimefromDate } from './dateUtils';

describe('dateUtils', () => {
    test('should return correct times differents in seconds', () => {
        const now = new Date().getTime() - 10;
        const diff = getTimefromDate(new Date(now));
        expect(diff).toEqual('10 secondes');
    });

    test('should return correct times differents in minutes', () => {
        const now = new Date().getTime() - 10 * 60;
        const diff = getTimefromDate(new Date(now));
        expect(diff).toEqual('10 minutes ');
    });

    test('should return correct times differents in heure', () => {
        const now = new Date().getTime() - 10 * 60 * 60 - 10 * 60 - 10;
        const diff = getTimefromDate(new Date(now));
        expect(diff).toEqual('10 heures 10 minutes 10 secondes');
    });
});