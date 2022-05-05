import { render } from '@testing-library/react';
import { bookmarks } from '../utils/testData';
import BookmarkVideoItem from './BookmarkVideoItem';
describe('BookmarkVideoItem', () => {

    test('should render BookmarkVideoItem', () => {
        const { container } = render(<BookmarkVideoItem bookmarks={bookmarks} bookmark={bookmarks[0]} />);
        expect(container.getElementsByTagName('iframe').item(0)?.title).toEqual('Sylvain Lhommée @ Nation Entreprenante - Episode #5');
    });

});