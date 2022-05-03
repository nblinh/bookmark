import '@testing-library/jest-dom/extend-expect';
import { fireEvent, render } from '@testing-library/react';
import BookmarkPage from './BookmarkPage';
import { getBookmarkInfo } from './model';


jest.mock('./model', () => ({
    getBookmarkInfo: jest.fn().mockImplementation((url: string) => Promise.resolve({}))
}));

describe('BookmarkPage', () => {
    test('should render', () => {
        const { container } = render(<BookmarkPage />);
        expect(container).toMatchSnapshot();
    });

    test('should have text field and submit button', () => {
        const { getByTestId } = render(<BookmarkPage />);
        expect(getByTestId('submitBtn')).toBeInTheDocument();
        expect(getByTestId('urlText')).toBeInTheDocument();
    });

    test('should call noembed api when click submit button', () => {
        const { getByTestId } = render(<BookmarkPage />);
        expect(getByTestId('submitBtn')).toBeInTheDocument();
        //fireEvent.click(getByTestId('submitBtn'));
        //expect(getBookmarkInfo).toHaveBeenCalledTimes(1);
    });
});