import '@testing-library/jest-dom/extend-expect';
import { dataToBookmark } from './bookmarkUtils';
import { photoData, videoData } from './testData';

describe('bookmarkUtils', () => {
    test('should return correct bookmark photo', () => {
        const bookmarkPhoto = dataToBookmark(photoData);
        expect(bookmarkPhoto.width).toEqual(1024);
        expect(bookmarkPhoto.height).toEqual(683);
        expect(bookmarkPhoto.url).toEqual("https://www.flickr.com/photos/feuilllu/51930941655/in/dateposted/");
    });

    test('should return correct bookmark video', () => {
        const bookmarkVideo = dataToBookmark(videoData);
        expect(bookmarkVideo.duration).toEqual(1070);
        expect(bookmarkVideo.url).toEqual("https://vimeo.com/565486457");
    });

});