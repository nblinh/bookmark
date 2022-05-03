import { FC, useState } from "react";
import BookmarkList from "./BookmarkList";
import { Bookmark, getBookmarkInfo } from "./model";

interface BookmarkPageProps {

}

const BookmarkPage: FC<BookmarkPageProps> = () => {
    const [bookmarks, setBookmarks] = useState<Bookmark[]>([]);
    const [url, setUrl] = useState("");
    const [error, setError] = useState(false);

    const handleSubmit = (evt: any) => {
        evt.preventDefault();

        getBookmarkInfo(url).then(bookmark => {
            bookmarks.push(bookmark);
            setBookmarks([...bookmarks]);
            setError(false);
        })
            .catch((error) => {
                console.error('Error:', error);
                setError(true);
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
                {error && <span style={{ color: 'red' }}> Please enter a valid URL!This application support only two URL type: flickr.com and vimeo.com</span>}
            </form>

            <BookmarkList bookmarks={bookmarks} setBookmarks={setBookmarks} />
        </div>
    );
}

export default BookmarkPage;