import Navbar from '@/Components/Navbar';
import { Head, Link } from '@inertiajs/react';

export default function Welcome({ auth, laravelVersion, phpVersion }) {
    const user = auth.user;
    console.log(user)
    return (
        <>
            <Head title="Eazy Blog" />
            <Navbar data={user} />
        </>
    );
}
