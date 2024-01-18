import { NextPage } from "next"
import Link from "next/link"

const NotFound: NextPage = () =>{
    return(
        <div>
            <div>
                Page Not Found Try Another Page 
            </div>
            <Link href="/search">search</Link>
        </div>
    )
}

export default NotFound