import { FC } from "react";
import { getTimefromDate, secondsToHms } from "../utils/dateUtils";

const Border = {
    border: '1px solid black'
};

interface BookmarkVideoItemProps {
    bookmark: Bookmark;
}
 
const BookmarkVideoItem: FC<BookmarkVideoItemProps> = ({bookmark}) => {
    return ( 
        <>
            <td style={Border}><iframe title={bookmark.title} src={'https://player.vimeo.com' + bookmark.view.replace('s', '')}  className="Video" allow='autoplay; fullscreen; picture-in-picture'></iframe></td>
            <td className="paddingBottom20" style={Border}>
                <table>
                    <tr><td align='left'><li><b>URL:</b></li></td><td className="textLeft">{bookmark.url}</td></tr>
                    <tr><td align='left'><li><b>Titre de la vidéo:</b></li></td><td className="textLeft">{bookmark.title}</td></tr>
                    <tr><td align='left'><li><b>Auteur:</b></li></td><td className="textLeft">{bookmark.author}</td></tr>
                    <tr><td align='left'><li><b>Date d'ajout dans l'application:</b></li></td><td className="textLeft">
                        {getTimefromDate(bookmark.addDate).trim() !== '' ? 'il y a' : 'à l\'instant'} {getTimefromDate(bookmark.addDate)}</td></tr>
                    <tr><td align='left'><li><b>Date de publication sur Vimeo:</b></li></td><td className="textLeft">
                        <span>le {new Intl.DateTimeFormat("fr-FR", { year: "numeric", month: "long", day: "2-digit" }).format(bookmark.publicDate)}</span></td>
                    </tr>
                    <tr><td align='left'><li><b>Duration:</b></li></td><td className="textLeft">{secondsToHms(bookmark.duration)}</td></tr>
                </table>
            </td>
        </>
     );
}
 
export default BookmarkVideoItem;