
import { Facebook, Instagram, Twitter, Pinterest, Phone, MailOutline, Room } from "@mui/icons-material"

const Footer = () => {

    return (
        <section className='flex md:flex-row flex-col md:px-[3rem] py-[2rem] sm:px-[1rem] px-[12px] gap-[2rem] ' >

            {/* left */}
            <div className="left flex flex-col gap-[12px] flex-1 " >
                <h1 className='font-bold text-[32px] ' >NANO.</h1>
                <p className="description " >
                    There are many variations of passages of Lorem Ipsum availabl, but the majority have suffered alteration in some form, by injected humour, or randised words which dont look even slightly believable.
                </p>
                <div className="iconsContainer flex gap-[20px] " >
                    <div className="icon flex justify-center items-center w-[40px] h-[40px] rounded-full text-white bg-[#3b5999] cursor-pointer " ><Facebook /></div>
                    <div className="icon flex justify-center items-center w-[40px] h-[40px] rounded-full text-white bg-[#e4405f] cursor-pointer " ><Instagram /></div>
                    <div className="icon flex justify-center items-center w-[40px] h-[40px] rounded-full text-white bg-[#55acee] cursor-pointer " ><Twitter /></div>
                    <div className="icon flex justify-center items-center w-[40px] h-[40px] rounded-full text-white bg-[#e60023] cursor-pointer " ><Pinterest /></div>
                </div>
            </div>


            {/* center */}
            <div className="center flex-1 flex flex-col gap-[1rem] " >
                <h3 className="title font-bold text-[24px] ">Useful Links</h3>
                <ul className="list m-0 p-0 list-none flex flex-wrap " >
                    <li className="listItem lg:w-[50%] w-full mb-[12px] capitalize text-[1rem] font-medium cursor-pointer " >home</li>
                    <li className="listItem lg:w-[50%] w-full mb-[12px] capitalize text-[1rem] font-medium cursor-pointer " >cart</li>
                    <li className="listItem lg:w-[50%] w-full mb-[12px] capitalize text-[1rem] font-medium cursor-pointer " >Man Fasion</li>
                    <li className="listItem lg:w-[50%] w-full mb-[12px] capitalize text-[1rem] font-medium cursor-pointer " >Woman Fasion</li>
                    <li className="listItem lg:w-[50%] w-full mb-[12px] capitalize text-[1rem] font-medium cursor-pointer " >Accessories</li>
                    <li className="listItem lg:w-[50%] w-full mb-[12px] capitalize text-[1rem] font-medium cursor-pointer " >Order Tracking</li>
                    <li className="listItem lg:w-[50%] w-full mb-[12px] capitalize text-[1rem] font-medium cursor-pointer " >Wishlist</li>
                    <li className="listItem lg:w-[50%] w-full mb-[12px] capitalize text-[1rem] font-medium cursor-pointer " >Terms</li>
                </ul>
            </div>

            {/* right */}
            <div className="right flex-1 flex flex-col gap-[1rem] " >
                <h3 className="title font-bold text-[24px] ">Contact</h3>
                <div className="contact flex flex-col  " >
                    <div className="contactItem mb-[20px] flex items-center gap-[12px] " ><Room /> 622 Dixies Path , South Tobincheaster 98336</div>
                    <div className="contactItem mb-[20px] flex items-center gap-[12px] " ><Phone /> +1 234 52 39</div>
                    <div className="contactItem mb-[20px] flex items-center gap-[12px] " ><MailOutline /> contact@nano.dev</div>
                </div>
                <img src="" alt="" className="payment w-full  " />
            </div>

        </section>
    )
}

export default Footer