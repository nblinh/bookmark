import { render } from '@testing-library/react';
import { bookmarks } from '../utils/testData';
import BookmarkPhotoItem from './BookmarkPhotoItem';


describe('BookmarkPhotoItem', () => {

    test('should show video when bookmark is vimeo.com', () => {
        const { container } = render(<BookmarkPhotoItem bookmark={bookmarks[0]} />);
        expect(container.getElementsByTagName('img').item(0)).toBeInTheDocument();
    });

});