import { FC } from "react";
import { Bookmark } from "./bookmark.model";
import { getTimefromDate } from "../utils/dateUtils";
import './Bookmark.css'; 

const Border = {
    border: '1px solid black'
};

interface BookmarkPhotoItemProps {
    bookmark: Bookmark;
}
 
const BookmarkPhotoItem: FC<BookmarkPhotoItemProps> = ({bookmark}) => {
    return ( 
        <>
            <td style={Border}>
                <img src={bookmark.view} alt='' className="Image" />
            </td>
            <td style={Border}>
                <table>
                    <tr><td align='left'><li><b>URL:</b></li></td><td className="textLeft">{bookmark.url}</td></tr>
                    <tr><td align='left'><li><b>Titre de la photo:</b></li></td><td className="textLeft">{bookmark.title}</td></tr>
                    <tr><td align='left'><li><b>Auteur:</b></li></td><td className="textLeft">{bookmark.author}</td></tr>
                    <tr><td align='left'><li><b>Date d'ajout dans l'application:</b></li></td><td className="textLeft">
                        {getTimefromDate(bookmark.addDate).trim() !== '' ? 'il y a' : 'à l\'instant'} {getTimefromDate(bookmark.addDate)}</td></tr>
                    <tr><td align='left'><li><b>Date de publication sur Flickr:</b></li></td><td className="textLeft">
                    </td>
                    </tr>
                    <tr><td align='left'><li><b>Largeur x Hauteur:</b></li></td><td className="textLeft">{bookmark.width + 'x' + bookmark.height}</td></tr>
                </table>
            </td>
        </>
     );
}
 
export default BookmarkPhotoItem;