import { FC } from "react";

interface DeleteButtonProps {
    deleteBookmark: Function;
}

const DeleteButton: FC<DeleteButtonProps> = ({ deleteBookmark }) => {
    return (<td style={{ border: '1px solid black' }}><input type="button" value="Supprimer" onClick={()=>deleteBookmark()} data-testid='deleteButton' /></td>);
}

export default DeleteButton;