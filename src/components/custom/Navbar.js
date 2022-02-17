import { CreditCard, Home, User } from 'react-feather'
import Heading from './Heading'
import NavbarLInk from './NavbarLInk'

export default function Navbar() {
    return (
        <div
            className="bg-orange-500 text-white w-full h-12 p-3 top-0 sticky
    flex justify-center
        
        "
        >
            <div className="w-1/2 flex items-center justify-between">
                <Heading title="EBilling" size="lg" />
            </div>

            <div className="flex gap-5 items-center">
                <NavbarLInk
                    icon={<Home className="h-5 w-5" />}
                    path="/"
                    title="buy electricity"
                />

                <NavbarLInk
                    icon={<CreditCard className="h-5 w-5" />}
                    path="/addmeter"
                    title="add meter"
                />
                <NavbarLInk
                    icon={<User className="h-5 w-5" />}
                    path="/addclient"
                    title="add client"
                />
            </div>
        </div>
    )
}
