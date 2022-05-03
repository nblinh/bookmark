import { dataToBookmark } from "../utils/bookmarkUtils";

export class Bookmark {
    view: string;
    url: string;
    title: string;
    author: string;
    addDate: Date;
    publicDate: Date;
    duration?: number; //in seconde
    width?: number;
    height?: number;

    constructor(view: string, url: string, title: string, author: string, publicDate: string) {
        this.view = view;
        this.url = url;
        this.title = title;
        this.author = author;
        this.addDate = new Date();
        this.publicDate = new Date(publicDate);
    }
}

export const getBookmarkInfo = async (url: string): Promise<Bookmark> => {
    if (!url.includes('vimeo.com') && !url.includes('flickr.com')) {
        throw new Error();
    }

    return fetch('https://noembed.com/embed?url=' + url)
        .then(response => response.json())
        .then(data => dataToBookmark(data))
}