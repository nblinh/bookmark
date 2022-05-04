import { FC } from "react";
import BookmarkItem from "./BookmarkItem";
import { Bookmark } from "./model";

interface BookmarkListProps {
    bookmarks: Bookmark[];
    setBookmarks: Function;
}

const BookmarkList: FC<BookmarkListProps> = ({ bookmarks, setBookmarks }) => {
    const showBookmarks = bookmarks.sort((a, b)=>(b.addDate.getTime()-a.addDate.getTime())).map((bookmark: Bookmark) => <BookmarkItem bookmarks={bookmarks} setBookmarks={setBookmarks} bookmark={bookmark} />)
    return (
        <table data-testid='bookmarkTable' style={{ border: '1px solid black', borderCollapse: 'collapse' }}>
            {showBookmarks}
        </table>
    );
}

export default BookmarkList;