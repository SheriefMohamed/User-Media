import {GoTrash} from 'react-icons/go'
import Button from './Button';
import { removeUser } from '../store';
import { useThunk } from '../hooks/use-thunk';
import ExpandablePane from './ExpandablePane';
import AlbumsList from './AlbumsList';

function UsersListItem({ user }) {
    const [doRemoveUser, isLoading, error] = useThunk(removeUser);

    const header = <>
        <Button className='mr-3' loading={isLoading} onClick={() => doRemoveUser(user)}>
            <GoTrash/>
        </Button>
        {error && <div>Error deleting user.</div>}
        {user.name}
    </>;

    return (
        <ExpandablePane header={header}>
            <AlbumsList user={user}/>
        </ExpandablePane>
    );
}

export default UsersListItem;
