import { FC } from "react";
import { Bookmark } from "./model";

interface DeleteButtonProps {
    bookmarks: Bookmark[];
    setBookmarks: Function;
    bookmark: Bookmark;
}

const DeleteButton: FC<DeleteButtonProps> = ({ bookmarks, setBookmarks, bookmark }) => {
    const deleteBookmark = () => {
        setBookmarks([...bookmarks.filter(item => item.url !== bookmark.url)])
    }
    return (<td style={{ border: '1px solid black' }}><input type="button" value="Supprimer" onClick={deleteBookmark} data-testid='deleteButton' /></td>);
}

export default DeleteButton;