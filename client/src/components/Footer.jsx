import { Footer } from "flowbite-react"
//import { Link } from "react-router-dom"
export default function FooterCom() {
  return (
    <Footer container className="border border-t-8 border-teal-500">
        <div className="w-full max-w-7xl mx-auto">
            <div className="">
                    <div>
                        <Footer.Copyright
                        href="#"
                        by="Health and Wellness"
                        year={new Date().getFullYear()}
                        />
                    </div>          
                </div>
            </div>
    </Footer>
  )
}