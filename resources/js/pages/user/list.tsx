import { Form, Head } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';
import { type User } from '@/types/index';
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
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Designation</th>
                            <th scope="col">Manage User</th>
                            <th scope="col">Manage Leave</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user) => (
                            // <Form action="#" method="post">
                            //     {({
                            //         errors,
                            //         hasErrors,
                            //         processing,
                            //         progress,
                            //         wasSuccessful,
                            //         recentlySuccessful,
                            //         setError,
                            //         clearErrors,
                            //         resetAndClearErrors,
                            //         defaults,
                            //         isDirty,
                            //         reset,
                            //         submit,
                            //     }) => (
                            <tr>
                                <th scope="row">{user.id}</th>
                                <td>{user.name}</td>
                                <td>{user.designation}</td>
                                <td className="form-check">
                                    <input className="form-check-input" id="can_manage_user" type="checkbox" name="can_manage_user_checkbox" defaultChecked={user.can_manage_user === true} />
                                </td>
                                <td className="form-check">
                                    <input className="form-check-input" id="can_manage_leave" type="checkbox" name="can_manage_leave_checkbox" defaultChecked={user.can_manage_leave === true} />
                                </td>
                            </tr>
                            //     )}
                            // </Form>
                        ))}
                    </tbody>
                </table>
            </div>
        </AppLayout >
    );
}
