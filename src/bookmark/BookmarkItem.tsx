import './Bookmark.css';
import { FC } from "react";
import DeleteButton from "./DeleteButton";
import { Bookmark } from "./bookmark.model";
import BookmarkPhotoItem from './BookmarkPhotoItem';
import BookmarkVideoItem from './BookmarkVideoItem';


interface BookmarkItemProps {
    bookmarks: Bookmark[]
    setBookmarks: Function;
    bookmark: Bookmark;
}

const BookmarkItem: FC<BookmarkItemProps> = ({ bookmarks, setBookmarks, bookmark }) => {

    const deleteBookmark = () => {
        setBookmarks([...bookmarks.filter(item => item.url !== bookmark.url)])
    }

    return (
        <tr>
            {bookmark.duration && (
                <>
                    <BookmarkVideoItem bookmark={bookmark}/>
                    <DeleteButton deleteBookmark = {deleteBookmark} />

                </>
            )}
            {!bookmark.duration && (
                <>
                    <BookmarkPhotoItem bookmark={bookmark}/>
                    <DeleteButton deleteBookmark = {deleteBookmark} />
                </>
            )}
        </tr>);
}

export default BookmarkItem;