import { Head } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';
import { type User } from '@/types/index';

export default function UserList({
    users
}: {
    users: User[];
}) {
    return (
        <AppLayout>
            <Head title="User List" />

            <h1 className="sr-only">User List</h1>
            <div>
                <h1>Posts</h1>
                <ul>
                    {users.map((user) => (
                        <li key={user.id}>
                            <strong>{user.id}</strong> - {user.name}
                        </li>
                    ))}
                </ul>
            </div>
        </AppLayout>
    );
}
