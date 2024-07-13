import { footerLinks } from "../constants"

const Footer = () => {
  return (
    <footer className="py-5 sm:px-10 px-5">
        <div className="screen-max-width">
            <div>
                <p className="font-semibold text-gray text-xs">
                    More ways to shop :{' '}
                    <span className="underline text-blue">
                     Find an Apple Store 
                    </span>
                    {' '}
                    or {' '}
                    <span className="underline text-blue">
                     other retailer 
                    </span>
                    {' '}
                    near you.
                </p>
                <p className="font-semibold text-gray text-xs mt-1">
                    Or Call 044-20031909
                </p>
            </div>
            <div className="bg-neutral-700 w-full h-[1px] my-5"/>
            <div className="flex md:flex-row flex-col md:items-center justify-between">
                <p className="font-semibold text-xs text-gray">Copyright @ 2024 Apple Inc. All Rights Reserved.</p>
                <div className="flex">
                    {footerLinks.map((item,i)=>(
                        <p key={item} className="font-semibold text-xs text-gray">
                            {item}{' '}
                            {i!=footerLinks.length-1 && (<span className="mx-2">|</span>)}
                        </p>
                    ))}
                </div>
            </div>
        </div>
    </footer>

)
}
export default Footer