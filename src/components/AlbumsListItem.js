import { useRemoveAlbumMutation } from "../store";
import Button from "./Button";
import ExpandablePane from "./ExpandablePane";
import { GoTrash } from "react-icons/go";
import PhotosList from "./PhotosList";

function AlbumsListItem({ album }) {
  const [removeAlbum, results] = useRemoveAlbumMutation();  

  const handleRemoveAlbum = () => {
    removeAlbum(album);
  }

  const header = <>
    <Button onClick={handleRemoveAlbum} loading={results.isLoading} className="mr-2" danger rounded>
        <GoTrash/>
    </Button>
    {album.title}
    </>;

  return (
    <ExpandablePane key={album.id} header={header} className='bg-indigo-100'>
      <PhotosList album={album}/>
    </ExpandablePane>
  );
}

export default AlbumsListItem;
