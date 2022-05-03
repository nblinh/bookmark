import { Bookmark } from "../bookmark/model"

export const dataToBookmark = (data: any): Bookmark => {
    let bookmark: Bookmark
    if (data.duration) {
        bookmark = new Bookmark(data.uri, data.url, data.title, data.author_name, data.upload_date);
        bookmark.duration = data.duration;
    } else {
        bookmark = new Bookmark(data.media_url, data.url, data.title, data.author_name, data.upload_date);
        bookmark.width = data.width;
        bookmark.height = data.height;
    }
    return bookmark;
}