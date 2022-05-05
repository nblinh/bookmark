import { FC, useState } from "react";
import BookmarkList from "./BookmarkList";
import { Bookmark } from "./bookmark.model";
import { BookmarkService } from "./bookmark.service";

interface BookmarkPageProps {

}

const BookmarkPage: FC<BookmarkPageProps> = () => {
    const [bookmarks, setBookmarks] = useState<Bookmark[]>([]);
    const [url, setUrl] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = (evt: any) => {
        evt.preventDefault();

        BookmarkService.getBookmarkInfo(url).then(bookmark => {
            bookmarks.push(bookmark);
            setBookmarks([...bookmarks]);
            setError("");
        })
            .catch((error) => {
                console.log(error);
                setError(error.message);
            });
    }
    return (
        <div>
            <form onSubmit={handleSubmit} style={{ paddingBottom: '30px' }}>
                <label>
                    Add URL:
                    <input
                        type="text"
                        value={url}
                        data-testid="urlText"
                        onChange={e => setUrl(e.target.value)}
                    />
                </label>
                <input type="submit" value="Submit" data-testid="submitBtn" />
                <br />
                <span style={{ color: 'red' }}> {error}</span>
            </form>

            <BookmarkList bookmarks={bookmarks} setBookmarks={setBookmarks} />
        </div>
    );
}

export default BookmarkPage;