import MapCardSvg from '../assets/images/svg/map-card.svg'
import LoremCardSvg from '../assets/images/svg/lorem-card.svg'
import { Dashboard, Demand, Dots, Events, Programmes } from "./Icons"
import strake from '../assets/images/png/stake.png'

export const MAP_CARDS = [
    {
        svgImage: MapCardSvg,
        heading: "Lorem ipsum",
        paragraph: "We have developed, capitalized, advised, and invested in $XXXmm of renewable energy projects over our careers.",
        readmore: "Read more"
    },
    {
        svgImage: MapCardSvg,
        heading: "Lorem ipsum",
        paragraph: "We have developed, capitalized, advised, and invested in $XXXmm of renewable energy projects over our careers.",
        readmore: "Read more"
    },
    {
        svgImage: MapCardSvg,
        heading: "Lorem ipsum",
        paragraph: "We have developed, capitalized, advised, and invested in $XXXmm of renewable energy projects over our careers.",
        readmore: "Read more"
    },
    {
        svgImage: MapCardSvg,
        heading: "Lorem ipsum",
        paragraph: "We have developed, capitalized, advised, and invested in $XXXmm of renewable energy projects over our careers.",
        readmore: "Read more"
    },
    {
        svgImage: MapCardSvg,
        heading: "Lorem ipsum",
        paragraph: "We have developed, capitalized, advised, and invested in $XXXmm of renewable energy projects over our careers.",
        readmore: "Read more"
    },
    {
        svgImage: MapCardSvg,
        heading: "Lorem ipsum",
        paragraph: "We have developed, capitalized, advised, and invested in $XXXmm of renewable energy projects over our careers.",
        readmore: "Read more"
    }
]
export const LOREM_CARDS = [
    {
        icon: LoremCardSvg,
        heading: "Lorem ipsum",
        paragraph: "We have developed, capitalized, advised, and invested in $XXXmm of renewable energy projects over our careers.",
        readmore: "Read more"
    },
    {
        icon: LoremCardSvg,
        heading: "Lorem ipsum",
        paragraph: "We have developed, capitalized, advised, and invested in $XXXmm of renewable energy projects over our careers.",
        readmore: "Read more"
    },
    {
        icon: LoremCardSvg,
        heading: "Lorem ipsum",
        paragraph: "We have developed, capitalized, advised, and invested in $XXXmm of renewable energy projects over our careers.",
        readmore: "Read more"
    }
]
export const FOOTER_LIST = [
    {
        list: "About website",
        content: [
            {
                listBtn: "Home",
                listBtnTwo: "How It Works",
                listBtnThree: "Testimonials",
                listBtnFour: "Why Choose Us",
            },
        ]
    },
    {
        list: "Follow links",
        content: [
            {
                listBtn: "Instagram",
                listBtnTwo: "Twitter",
                listBtnThree: "Discord",
                listBtnFour: "You Tube",
            },
        ]
    },
] 
export const SIDEBAR_BUTTON = [
    {
        id: 'tab-1',
        dots: <Dots />,
        sidebarSvg: <Dashboard />,
        text: "Dashboard"
    },
    {
        id: 'tab-2',
        dots: <Dots />,
        sidebarSvg: <Events />,
        text: "Events"
    },
    {
        id: 'tab-3',
        dots: <Dots />,
        sidebarSvg: <Demand />,
        text: "On demand"
    },
    {
        id: 'tab-4',
        dots: <Dots />,
        sidebarSvg: <Programmes />,
        text: "Programmes"
    }
]