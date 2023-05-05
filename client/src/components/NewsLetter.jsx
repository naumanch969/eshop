import { Send } from "@mui/icons-material"



const NewsLetter = () => {

    return (
        <section className="bg-light-pink flex flex-col justify-center items-center min-h-[70vh]  " >
            <h2 className="title text-[64px] font-bold mb-[20px] " >Newsletter</h2>
            <p className="description text-[24px] font-light mb-[20px] capitalize md:text-start text-center " >get timely updates from your favorite products.</p>

            <div className="inputContainer md:w-[50%] sm:w-[70%] w-[90%] h-[48px] rounded-[2px] overflow-hidden bg-white flex justify-between items-center border-[1px] border-light-gray500 ">
                <input type="" className="input h-full border-none outline-none bg-inherit flex-[8] pl-[20px] " placeholder="Your Email" />
                <button className="button h-full sm:flex-1 flex-[2] border-none bg-teal text-white " >
                    <Send />
                </button>
            </div>

        </section>
    )
}


export default NewsLetter;