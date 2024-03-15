import { Footer } from "flowbite-react"
import { Link } from "react-router-dom"
export default function FooterCom() {
  return (
    <Footer container className="border border-t-8 border-teal-500">
        <div className="">
            <div className="">
                <div className="">
                 <Link to="/" className="self-center whitespace-nowrap text-lg sm:text-xl font-semibold dark:text-white">
                    <span className="px-2 py-1 bg-gradient-to-r from-green-900 via-teal-600 to-slate-800 rounded-lg text-white">Health and Wellness</span>
                 </Link>
                </div>
                <div className="grid grid-col-2 gap-3 sm: mt-4 sm:grid-cols-3 sm:gap-6">
                    <div>
                    <Footer.Title title="About"/>
                    <Footer.LinkGroup col>
                        <Footer.Link
                        href='/about'
                        target="_blank"
                        rel="noopener noreferrer">
                            Health and Wellness
                        </Footer.Link>
                    </Footer.LinkGroup>
                    </div>
                    <div>
                        <Footer.Copyright
                        href="#"
                        by="Health and Wellness"
                        year={new Date().getFullYear()}
                        />
                    </div>          
                </div>
            </div>
        </div>
    </Footer>
  )
}
