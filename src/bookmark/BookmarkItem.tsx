import { FC } from "react";
import { getTimefromDate, secondsToHms } from "../utils/dateUtils";
import DeleteButton from "./DeleteButton";
import { Bookmark } from "./model";

interface BookmarkItemProps {
    bookmarks: Bookmark[]
    setBookmarks: Function;
    bookmark: Bookmark;
}

const BookmarkItem: FC<BookmarkItemProps> = ({ bookmarks, setBookmarks, bookmark }) => {
    return (
        <tr>
            {bookmark.duration && (
                <>
                    <td style={{ border: '1px solid black' }}><iframe title={bookmark.title} src={'https://player.vimeo.com' + bookmark.view.replace('s', '')} width='250' height='150' allow='autoplay; fullscreen; picture-in-picture'></iframe></td>
                    <td style={{ paddingBottom: '20px', border: '1px solid black' }}>
                        <table>
                            <tr><td align='left'><li><b>URL:</b></li></td><td align='left' style={{ paddingLeft: '20px' }}>{bookmark.url}</td></tr>
                            <tr><td align='left'><li><b>Titre de la vidéo:</b></li></td><td align='left' style={{ paddingLeft: '20px' }}>{bookmark.title}</td></tr>
                            <tr><td align='left'><li><b>Auteur:</b></li></td><td align='left' style={{ paddingLeft: '20px' }}>{bookmark.author}</td></tr>
                            <tr><td align='left'><li><b>Date d'ajout dans l'application:</b></li></td><td align='left' style={{ paddingLeft: '20px' }}>
                                il y a {getTimefromDate(bookmark.addDate)}</td></tr>
                            <tr><td align='left'><li><b>Date de publication sur Vimeo:</b></li></td><td align='left' style={{ paddingLeft: '20px' }}>
                                <span>le {new Intl.DateTimeFormat("fr-FR", { year: "numeric", month: "long", day: "2-digit" }).format(bookmark.publicDate)}</span></td>
                            </tr>
                            <tr><td align='left'><li><b>Duration:</b></li></td><td align='left' style={{ paddingLeft: '20px' }}>{secondsToHms(bookmark.duration)}</td></tr>
                        </table>
                    </td>
                    <DeleteButton bookmarks={bookmarks} setBookmarks={setBookmarks} bookmark={bookmark} />

                </>
            )}
            {!bookmark.duration && (
                <>
                    <td style={{ border: '1px solid black' }}>
                        <img src={bookmark.view} alt='' style={{ width: '250px', height: '150px' }} />
                    </td>
                    <td style={{ border: '1px solid black' }}>
                        <table>
                            <tr><td align='left'><li><b>URL:</b></li></td><td align='left' style={{ paddingLeft: '20px' }}>{bookmark.url}</td></tr>
                            <tr><td align='left'><li><b>Titre de la photo:</b></li></td><td align='left' style={{ paddingLeft: '20px' }}>{bookmark.title}</td></tr>
                            <tr><td align='left'><li><b>Auteur:</b></li></td><td align='left' style={{ paddingLeft: '20px' }}>{bookmark.author}</td></tr>
                            <tr><td align='left'><li><b>Date d'ajout dans l'application:</b></li></td><td align='left' style={{ paddingLeft: '20px' }}>
                                il y a {getTimefromDate(bookmark.addDate)}</td></tr>
                            <tr><td align='left'><li><b>Date de publication sur Flickr:</b></li></td><td align='left' style={{ paddingLeft: '20px' }}>
                            </td>
                            </tr>
                            <tr><td align='left'><li><b>Largeur x Hauteur:</b></li></td><td align='left' style={{ paddingLeft: '20px' }}>{bookmark.width + 'x' + bookmark.height}</td></tr>
                        </table>
                    </td>
                    <DeleteButton bookmarks={bookmarks} setBookmarks={setBookmarks} bookmark={bookmark} />
                </>
            )}
        </tr>);
}

export default BookmarkItem;