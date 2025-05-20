import Link from "next/link";

const links = [
    {
        title: 'Home',
        link: '/'
    },
    {
        title: 'Services',
        link: '/services'
    },
    {
        title: 'About',
        link: '/about'
    },
    {
        title: 'Bookings',
        link: '/bookings'
    }
]

export default function Navbar(){
    return (
        <nav>
            <div className="flex p-4 border-b">
                <h1 className="mr-auto">Universal Business Solutions</h1>
                <ul className="flex gap-2">
                    {
                        links.map((e, i) => (
                            <li key={i}>
                                <Link href={e.link}>
                                    {e.title}
                                </Link>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </nav>
    )
}