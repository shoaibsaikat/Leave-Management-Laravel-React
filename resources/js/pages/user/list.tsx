import { Head } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';
import { type User } from '@/types/index';
import { dashboard } from '@/routes';
import { type BreadcrumbItem } from '@/types';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'User List',
        href: '/user/list',
    },
];
export default function UserList({
    users
}: {
    users: User[];
}) {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="User List" />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <h1>User List</h1>
                <ul>
                    {users.map((user) => (
                        <li key={user.id}>
                            <strong>{user.id}</strong> - {user.name}
                        </li>
                    ))}
                </ul>
            </div>
        </AppLayout >
    );
}
