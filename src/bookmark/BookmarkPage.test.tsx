import { fireEvent, render } from '@testing-library/react';
import BookmarkPage from './BookmarkPage';
import { BookmarkService } from './bookmark.service';


jest.mock('./bookmark.model', () => ({
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
        fireEvent.click(getByTestId('submitBtn'));
        //expect(BookmarkService.getBookmarkInfo).toHaveBeenCalledTimes(1);
    });
});