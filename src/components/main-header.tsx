import { BellIcon, MessageSquareIcon, SearchIcon, SettingsIcon } from "lucide-react"
import { Input } from "./ui/input"
import { Button } from "./ui/button"
import { Avatar } from "./ui/avatar"
import { Badge } from "./ui/badge"

const MainHeader = () => {
    return (
        <div className="flex flex-col w-full">
            <div className="flex w-full h-[61px] items-end justify-between relative border-b border-[#1e1e1e] [background:radial-gradient(50%_50%_at_42%_-68%,rgba(35,39,46,1)_0%,rgba(16,16,18,1)_87%)]">
                <div className="flex items-center gap-[25px] relative flex-1">
                    <div className="h-[61px] flex items-center">
                        <div className="flex-col justify-center pl-5 pr-[11px] py-0 self-stretch inline-flex items-center">
                            <div className="gap-[10.68px] inline-flex items-center">
                                <div className="relative w-11 h-11">
                                    <div className="relative w-11 h-[37px] top-[7px]">
                                        <div className="relative h-[37px]">
                                            <img
                                                className="absolute w-[15px] h-[15px] top-[22px] left-[29px]"
                                                alt="Vector"
                                                src="/vector.svg"
                                            />
                                            <img
                                                className="absolute w-11 h-[29px] top-0 left-0"
                                                alt="Union"
                                                src="/union.svg"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col items-start justify-center">
                                    <div className="flex flex-col items-start justify-center gap-[9.9px]">
                                        <span className="font-bold text-white text-[17.8px] tracking-[1.24px] leading-normal whitespace-nowrap">
                                            ENTERPRISES
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="relative flex items-center w-[499px] h-[37px] gap-[7px] pl-[13px] pr-2.5 py-3 bg-[#1d1d20] rounded-md shadow-[inset_0px_0px_1px_0.5px_#ffffff2b]">
                        <SearchIcon className="w-4 h-4 text-gray-400" />
                        <Input
                            className="flex-1 border-0 bg-transparent shadow-none focus-visible:ring-0 text-[#b9b8b9] text-sm tracking-[-0.14px] leading-4 placeholder:text-[#b9b8b9] placeholder:opacity-50 h-auto px-0"
                            placeholder="I'm a smart assistant robot. I can help you find the information that you need..."
                        />
                    </div>
                </div>

                <div className="inline-flex items-center justify-end gap-3 px-3 py-0 rounded-md relative self-stretch">
                    <div className="inline-flex items-center justify-end gap-[6.5px]">
                        <div className="inline-flex justify-end gap-3 items-center">
                            <Button
                                variant="ghost"
                                size="icon"
                                className="rounded-full p-1"
                            >
                                <img className="w-6" alt="Svg" src="/svg-1.svg" />
                            </Button>
                        </div>

                        <Button
                            variant="ghost"
                            size="icon"
                            className="rounded-full w-[34px] py-[5px]"
                        >
                            <SettingsIcon className="w-[18px] h-[18px] text-gray-400" />
                        </Button>

                        <Button
                            variant="ghost"
                            size="icon"
                            className="rounded-full p-1.5 relative"
                        >
                            <BellIcon className="w-5 h-5 text-gray-400" />
                            <Badge className="absolute -top-px left-[21px] w-2 h-2 bg-[#0088ff] p-0">
                                <span className="sr-only">Notifications</span>
                            </Badge>
                        </Button>

                        <Button
                            variant="ghost"
                            size="icon"
                            className="rounded-full px-1.5 py-[5px]"
                        >
                            <MessageSquareIcon className="w-[22px] h-[22px] text-gray-400" />
                        </Button>

                        <Avatar className="w-[37px] h-[37px] rounded-[28.59px] border-[1.06px] border-solid border-[#2a2a2a] [background:url(..//svg.png)_50%_50%_/_cover]" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainHeader