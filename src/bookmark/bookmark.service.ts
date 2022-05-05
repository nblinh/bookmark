import { Bookmark } from "./bookmark.model";
import { dataToBookmark } from "../utils/bookmarkUtils";

export const BookmarkService = {
    getBookmarkInfo: async (url: string): Promise<Bookmark> => {
        if (!url.includes('vimeo.com') && !url.includes('flickr.com')) {
            console.error('Not a valid bookmark url');
            throw new Error('Not a valid bookmark url');
        }
    
        return fetch('https://noembed.com/embed?url=' + url)
            .then(response => response.json())
            .then(data => dataToBookmark(data))
            .catch(error => {
                console.error('There was an error!', error);
                throw new Error('Get bookmark info error');
            });
    }
}