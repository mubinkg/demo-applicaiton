import {
  BellIcon,
  ChevronRightIcon,
  MessageSquareIcon,
  SearchIcon,
  SettingsIcon,
} from "lucide-react";
import { Avatar } from "./components/ui/avatar";
import { Badge } from "./components/ui/badge";
import { Button } from "./components/ui/button";
import { Card, CardContent } from "./components/ui/card";
import { Input } from "./components/ui/input";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "./components/ui/navigation-menu";
import { ScrollArea } from "./components/ui/scroll-area";
import { Separator } from "./components/ui/separator";
import { JSX } from "react";
import NewsBanner from "./components/news-banner";

export default function Layout(): JSX.Element {
  // Sidebar menu items data
  const servicesNatureItems = [
    { icon: "/icon-2.svg", label: "Findings", active: true, hasChevron: true },
    { icon: "/icon-6.svg", label: "Structure", active: false },
    { icon: "/icon-7.svg", label: "Management", active: false },
    { icon: "/icon-1.svg", label: "Systems", active: false },
  ];

  const alignmentToolsItems = [
    { icon: "/icon-3.svg", label: "Scope AI Assistant", active: false },
    { icon: "/icon-4.svg", label: "Legal AI Assistant", active: false },
    { icon: "/icon-5.svg", label: "Procedural AI Assistant", active: false },
  ];

  // Main content cards data
  const serviceCards = [
    { title: "Audits", active: false },
    { title: "Assessments", active: false },
    { title: "Analyses", active: false },
    { title: "Reports", active: true },
    { title: "Researches", active: false },
    { title: "Presentations", active: false },
  ];

  // Navigation menu items
  const navItems = [
    { label: "Company & Culture", active: false },
    { label: "Supply", active: true },
    { label: "Opportunities", active: false },
    { label: "Portfolio", active: false },
    { label: "Technicalities", active: false },
    { label: "Estimate & Test", active: false },
  ];

  // Action links
  const actionLinks = [
    { label: "Order an Assessment", color: "text-[#ff3f1e]" },
    { label: "Insights & Content", color: "text-[#4cacff]" },
    { label: "Book a meeting", color: "text-[#dcff1e]" },
  ];

  return (
    <div className="bg-[#0f1011] flex flex-row justify-center w-full">
      <div className="bg-[#0f1011] w-full max-w-[1728px] h-[1270px] relative">
        {/* Fixed Header */}
        <header className="flex flex-col w-full items-start fixed top-0 left-0 z-10">
          {/* News Banner */}
          <NewsBanner />

          {/* Main Header */}
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

          {/* Navigation Menu */}
          <nav className="flex flex-wrap w-full items-center relative bg-[#101011] border-b-[0.5px] border-[#1e1e1ef0]">
            <NavigationMenu className="flex-1">
              <NavigationMenuList className="flex items-start px-0 py-[26.25px] w-full">
                {navItems.map((item, index) => (
                  <NavigationMenuItem key={index} className="px-3.5">
                    <div className="inline-flex items-start pl-0 pr-[17.78px] py-0 relative">
                      <span
                        className={`relative w-fit mt-[-1.00px] font-manrope ${item.active ? "font-extrabold" : "font-medium"} text-white text-sm text-center tracking-[0.21px] leading-[18.0px] whitespace-nowrap overflow-hidden text-ellipsis`}
                      >
                        {item.label}
                      </span>
                      {item.label !== "Estimate & Test" && (
                        <div
                          className="flex flex-col w-[15px] h-[15px] items-start absolute top-0.5"
                          style={{ left: `${item.label.length * 7}px` }}
                        >
                          <div className="flex flex-col w-[14.99px] h-[14.99px] items-center justify-center px-[1.5px] py-[4.49px]">
                            <img
                              className="w-3 h-1.5"
                              alt="Down arrow"
                              src={
                                item.active
                                  ? "/down-arrow-red-svg-3.svg"
                                  : "/down-arrow-red-svg.svg"
                              }
                            />
                          </div>
                        </div>
                      )}
                    </div>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>

            {actionLinks.map((link, index) => (
              <div
                key={index}
                className="inline-flex items-center gap-[0.01px] pl-0 pr-5 py-0"
              >
                <div className="inline-flex items-center">
                  <div className="inline-flex pl-[28.01px] pr-0 py-0 flex-col items-start">
                    <div className="justify-center inline-flex items-start">
                      <div className="inline-flex flex-col items-start">
                        <span
                          className={`w-fit mt-[-1.00px] font-normal text-[15px] tracking-[0.07px] leading-normal whitespace-nowrap overflow-hidden text-ellipsis ${link.color}`}
                        >
                          {link.label}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </nav>
        </header>

        {/* Main Content Area */}
        <div className="flex flex-col max-w-[1980px] w-full items-start pl-3 pr-0 pt-3.5 pb-0 absolute top-[163px] left-0 border-t border-[#2b2b2d1a] [background:radial-gradient(50%_50%_at_35%_-51%,rgba(38,42,49,1)_0%,rgba(0,0,0,1)_100%)]">
          <div className="flex items-start relative self-stretch w-full">
            {/* Sidebar */}
            <div className="inline-flex flex-col items-start justify-center pl-[68px] pr-0 pt-[26px] pb-0 relative">
              <ScrollArea className="relative w-56 h-[520px] border-r border-[#2b2b2d33]">
                <div className="flex flex-col w-[199px] items-start gap-[22px] relative top-6 px-2">
                  <div className="flex flex-col items-start gap-4 relative self-stretch w-full">
                    {/* What's hot section */}
                    <Button
                      variant="ghost"
                      className="flex px-2 py-1.5 self-stretch w-full rounded-[18px] items-center justify-start h-auto"
                    >
                      <div className="inline-flex flex-col items-start">
                        <div className="inline-flex items-start">
                          <img className="w-4 h-4" alt="Icon" src="/icon.svg" />
                        </div>
                      </div>
                      <div className="flex w-[151px] px-2 py-0 flex-col items-start">
                        <div className="flex flex-col max-w-[135px] items-start w-full">
                          <span className="self-stretch mt-[-1.00px] font-bold text-[#e2e2e2] text-[12.8px] leading-5">
                            What&#39;s hot
                          </span>
                        </div>
                      </div>
                    </Button>

                    {/* Services' Nature section */}
                    <div className="flex items-center gap-2 relative self-stretch w-full">
                      <div className="inline-flex flex-col items-start">
                        <span className="w-fit mt-[-1.00px] font-bold text-wwwspaceshipcomcerulean text-[10px] tracking-[0.21px] leading-[10px] whitespace-nowrap">
                          SERVICES&apos; NATURE
                        </span>
                      </div>
                      <Separator className="flex-1 h-px bg-[#ffffff1a]" />
                    </div>

                    <div className="flex flex-col items-start gap-2 relative self-stretch w-full">
                      {servicesNatureItems.map((item, index) => (
                        <Button
                          key={index}
                          variant="ghost"
                          className={`flex px-2 py-1.5 self-stretch w-full rounded-[18px] items-center justify-start h-auto ${item.active ? "bg-[#39b9ff1f]" : ""}`}
                        >
                          <div className="inline-flex flex-col items-start">
                            <div className="inline-flex items-start">
                              <img
                                className="w-4 h-4"
                                alt="Icon"
                                src={item.icon}
                              />
                            </div>
                          </div>
                          <div className="flex px-2 py-0 flex-1 flex-col items-start">
                            <div className="flex flex-col max-w-[135px] items-start w-full">
                              <span
                                className={`self-stretch mt-[-1.00px] font-bold ${item.active ? "text-[#009de6]" : "text-[#e2e2e2]"} text-[13px] leading-5`}
                              >
                                {item.label}
                              </span>
                            </div>
                          </div>
                          {item.hasChevron && (
                            <ChevronRightIcon className="w-4 h-4 text-[#009de6]" />
                          )}
                        </Button>
                      ))}
                    </div>

                    {/* Alignment Tools section */}
                    <div className="flex items-center gap-2 relative self-stretch w-full">
                      <div className="inline-flex flex-col items-start">
                        <span className="w-fit mt-[-1.00px] font-bold text-wwwspaceshipcomcerulean text-[10px] tracking-[0.21px] leading-[10px] whitespace-nowrap">
                          ALIGNMENT TOOLS
                        </span>
                      </div>
                      <Separator className="flex-1 h-px bg-[#ffffff1a]" />
                    </div>

                    <div className="flex flex-col items-start gap-2 relative self-stretch w-full">
                      {alignmentToolsItems.map((item, index) => (
                        <Button
                          key={index}
                          variant="ghost"
                          className="flex px-2 py-1.5 self-stretch w-full rounded-[18px] items-center justify-start h-auto"
                        >
                          <div className="inline-flex flex-col items-start">
                            <div className="inline-flex items-start">
                              <img
                                className="w-4 h-4"
                                alt="Icon"
                                src={item.icon}
                              />
                            </div>
                          </div>
                          <div className="flex px-2 py-0 flex-1 flex-col items-start">
                            <div className="flex flex-col items-start self-stretch w-full">
                              <span className="self-stretch mt-[-1.00px] font-bold text-[#e2e2e2] text-[13px] leading-5">
                                {item.label}
                              </span>
                            </div>
                          </div>
                        </Button>
                      ))}
                    </div>
                  </div>
                </div>
              </ScrollArea>
            </div>

            {/* Main Content */}
            <div className="flex flex-col h-[520px] items-start relative flex-1">
              <ScrollArea className="flex flex-col max-h-[520px] items-start p-5 relative flex-1 self-stretch w-full">
                <div className="inline-flex flex-wrap max-w-[1150px] items-start gap-[27px_27px] relative flex-1">
                  {serviceCards.map((card, index) => (
                    <Card
                      key={index}
                      className={`max-w-[1372.04px] px-[17.2px] py-[16.13px] rounded-[8.6px] inline-flex items-start ${card.active ? "bg-[#0086c4e0]" : "bg-transparent"}`}
                    >
                      <CardContent className="p-0">
                        <div className="inline-flex flex-col items-start">
                          <div className="flex items-center self-stretch w-full">
                            <div className="inline-flex max-w-[245.87px] items-center justify-center gap-[10.75px] px-0 py-[4.3px] overflow-hidden">
                              <h3 className="w-fit mt-[-1.08px] font-bold text-white text-[20.9px] leading-[14.0px] whitespace-nowrap">
                                {card.title}
                              </h3>
                            </div>
                          </div>
                          <div className="inline-flex max-w-[245.87px] items-center justify-center gap-[10.75px] px-0 py-[4.3px] overflow-hidden">
                            <p className="flex-1 mt-[-1.08px] font-normal text-white text-[11.8px] tracking-[0.22px] leading-[18.3px]">
                              Browse your domain list, track importance info,
                              and tweak primary settings in seconds.
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </ScrollArea>
            </div>
          </div>

          {/* Scope Selector */}
          <div className="inline-flex flex-col items-start gap-2 absolute top-3.5 left-8">
            <div className="inline-flex items-center gap-2.5 pl-2.5 pr-[9px] py-1 relative mt-[-1.00px] ml-[-1.00px] mr-[-1.00px] bg-[#1e1e20] rounded-md overflow-hidden border border-solid border-[#ffffff2b]">
              <div className="inline-flex items-center gap-2.5">
                <span className="w-fit mt-[-1.00px] font-medium text-[#949494] text-[11.8px] tracking-[0.22px] leading-[18.3px] whitespace-nowrap">
                  Scope:
                </span>
                <span className="w-fit font-semibold text-[#d9d9d9] text-[11.8px] tracking-[0.22px] leading-[18.3px] whitespace-nowrap mt-[-1.00px]">
                  Opportunities
                </span>
              </div>
              <div className="relative w-4 h-4 rotate-90">
                <img
                  className="absolute w-4 h-4 top-0 left-0 -rotate-90"
                  alt="Information"
                  src="/information-direction-chevron-right.svg"
                />
              </div>
            </div>

            <div className="flex flex-col items-start justify-center gap-0.5 p-1 relative self-stretch w-full mb-[-1.00px] ml-[-1.00px] mr-[-1.00px] bg-[#1e1e20] rounded-md overflow-hidden border border-solid border-[#ffffff2b]">
              <div className="flex items-center justify-center gap-2.5 pl-2 pr-[7px] py-0.5 relative self-stretch w-full rounded-md">
                <span className="flex-1 mt-[-1.00px] font-semibold text-[#d9d9d9] text-[11.8px] tracking-[0.22px] leading-[18.3px]">
                  Solutions
                </span>
              </div>
              <div className="flex items-center justify-center gap-2.5 pl-2 pr-[7px] py-0.5 relative self-stretch w-full bg-[#2c2c2c] rounded-md">
                <span className="flex-1 font-semibold text-[#d9d9d9] text-[11.8px] tracking-[0.22px] leading-[18.3px] mt-[-1.00px]">
                  Opportunities
                </span>
                <div className="relative w-3.5 h-3.5 rotate-90">
                  <div className="h-3.5">
                    <div className="relative w-2.5 h-2.5 top-0.5 left-px -rotate-90">
                      <div className="relative w-[9px] h-[7px] top-0.5 bg-[url(/group.png)] bg-[100%_100%]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

