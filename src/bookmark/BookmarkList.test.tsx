
import BookmarkList from "./BookmarkList";
import { render } from '@testing-library/react';
import { Bookmark } from "./bookmark.model";

const bookmarks: Bookmark[] = [
    {
        "view": "/videos/565486457",
        "url": "https://vimeo.com/565486457",
        "title": "Sylvain Lhommée @ Nation Entreprenante - Episode #5",
        "author": "BARTERLINK",
        "addDate": new Date(),
        "publicDate": new Date(),
        "duration": 1070
    }
]

const setBookmarks = jest.fn()

describe('BookmarkList', () => {
    test('should render', () => {
        const { container } = render(<BookmarkList bookmarks={[]} setBookmarks={setBookmarks} />);
        expect(container).toMatchSnapshot();
    });

    test('should have table of bookmark with element', () => {
        const { getByTestId, getByText } = render(<BookmarkList bookmarks={bookmarks} setBookmarks={setBookmarks} />);
        expect(getByTestId('bookmarkTable')).toBeInTheDocument();
        expect(getByText('Sylvain Lhommée @ Nation Entreprenante - Episode #5')).toBeInTheDocument();
    });

});