import { render } from '@testing-library/react';
import { Bookmark } from "./bookmark.model";
import BookmarkItem from "./BookmarkItem";
import { bookmarks } from '../utils/testData';

const setBookmarks = jest.fn();

describe('BookmarkItem', () => {

    test('should show video when bookmark is vimeo.com', () => {
        const { container } = render(<BookmarkItem bookmarks={bookmarks} setBookmarks={setBookmarks} bookmark={bookmarks[0]} />);
        expect(container.getElementsByTagName('iframe').item(0)?.title).toEqual('Sylvain Lhommée @ Nation Entreprenante - Episode #5');
    });

    test('should show photo when bookmark is flickr.com', () => {
        const { container } = render(<BookmarkItem bookmarks={bookmarks} setBookmarks={setBookmarks} bookmark={bookmarks[1]} />);
        expect(container.getElementsByTagName('img').item(0)).toBeInTheDocument();
    });

});