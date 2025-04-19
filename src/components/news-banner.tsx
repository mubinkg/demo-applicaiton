import { Button } from './ui/button'

const NewsBanner = () => {
    return (
        <div className="flex flex-col items-start gap-2.5 relative w-full bg-[#1b1b1b]">
            <div className="flex items-start gap-10 relative w-full bg-[#111620]">
                <div className="flex items-start relative flex-1 rounded-[0px_6px_6px_0px] overflow-hidden">
                    <div className="flex-col w-64 h-8 gap-[25px] px-[62px] py-[5px] rounded-[0px_35.5px_0px_0px] overflow-hidden border border-solid border-[#1e1e1e] [background:linear-gradient(164deg,rgba(27,48,89,1)_0%,rgba(17,22,32,1)_100%)] flex items-center relative">
                        <div className="inline-flex items-center gap-2.5 relative">
                            <img
                                className="w-5 h-5"
                                alt="Hot icon"
                                src="/hot-svgrepo-com.svg"
                            />
                            <span className="font-bold text-white text-[14px] text-center whitespace-nowrap">
                                Last week news
                            </span>
                        </div>
                    </div>

                    <div className="justify-between dm-mono-regular leading-0.5 pl-7 pr-[21px] py-1.5 flex-1 self-stretch grow flex items-center relative">
                        <div className="inline-flex items-center gap-[25px] relative">
                            <div className="font-normal text-sm tracking-[0.50px] leading-[13px] whitespace-nowrap">
                                <span className="text-[#4cacff] tracking-[0.07px]">
                                    Johnny Panait
                                </span>
                                <span className="text-[#b9b8b9] tracking-[0.07px]">
                                    {" "}
                                    just released{" "}
                                </span>
                                <span className="text-[#cdc581] tracking-[0.07px]">
                                    &quot;Latest Social Media Algorithm Changes&quot;.
                                </span>
                            </div>

                            <Button
                                variant="link"
                                className="inline-flex items-center gap-2.5 py-1 border-b border-[#dcff1e] rounded-none h-auto px-0"
                            >
                                <span className="text-[#dcff1e] text-[15px] tracking-[0.50px] leading-[13px] cursor-pointer">
                                    Download Now
                                </span>
                                <div className="w-3 h-3">
                                    <div className="bg-[url(/group-1.png)] relative w-[7px] h-3 left-[3px] bg-[100%_100%]" />
                                </div>
                            </Button>
                        </div>

                        <Button
                            variant="link"
                            className="inline-flex items-center gap-2.5 h-auto px-0 py-0"
                        >
                            <span className="text-[#ff991e] text-[15px] tracking-[0.50px] leading-[13px] cursor-pointer">
                                Find more
                            </span>
                            <div className="w-3 h-3">
                                <div className="bg-[url(/group-2.png)] relative w-[7px] h-3 left-[3px] bg-[100%_100%]" />
                            </div>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewsBanner