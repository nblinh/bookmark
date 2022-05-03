import BookmarkList from "./BookmarkList";
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import { Bookmark } from "./model";
import BookmarkItem from "./BookmarkItem";

const bookmarks: Bookmark[] = [
    {
        "view": "/videos/565486457",
        "url": "https://vimeo.com/565486457",
        "title": "Sylvain Lhommée @ Nation Entreprenante - Episode #5",
        "author": "BARTERLINK",
        "addDate": new Date(),
        "publicDate": new Date(),
        "duration": 1070
    },
    {
        "view": "https://live.staticflickr.com/65535/51930941655_d299489ab1_b.jpg",
        "url": "https://www.flickr.com/photos/feuilllu/51930941655/in/dateposted/",
        "title": "2022 Marche Vexin",
        "author": "Pierre Metivier",
        "addDate": new Date(),
        "publicDate": new Date(),
        "width": 1024,
        "height": 683
    }
]
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