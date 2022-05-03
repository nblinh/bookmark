
import '@testing-library/jest-dom/extend-expect';
import { fireEvent, render } from '@testing-library/react';
import { Bookmark } from "./model";
import BookmarkItem from "./BookmarkItem";
import DeleteButton from "./DeleteButton";

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

describe('DeleteButton', () => {
    test('should render', () => {
        const { container } = render(<DeleteButton bookmarks={bookmarks} setBookmarks={setBookmarks} bookmark={bookmarks[0]} />);
        expect(container).toMatchSnapshot();
    });

    test('should have delete button', () => {
        const { container } = render(<DeleteButton bookmarks={bookmarks} setBookmarks={setBookmarks} bookmark={bookmarks[0]} />);
        expect(container.getElementsByTagName('input').item(0)?.value).toEqual('Supprimer');
    });

    test('should call update setBookmarks when click on Delete button', () => {
        const { getByTestId } = render(<BookmarkItem bookmarks={bookmarks} setBookmarks={setBookmarks} bookmark={bookmarks[0]} />);
        fireEvent.click(getByTestId('deleteButton'));
        expect(setBookmarks).toHaveBeenCalledTimes(1);
        expect(setBookmarks).toHaveBeenCalledWith([bookmarks[1]]);
    });
});