import React from 'react'
import { useState } from 'react';
import { SIDEBAR_BUTTON } from '../../common/Helper';
import ZarehImg from '../../assets/images/png/zareh.png'
import dashBoardLogo from '../../assets/images/png/dashboard-logo.png'
import Welcome from '../dashboard/Welcome';
import Events from './Events';
import Programmes from '../dashboard/Programmes';
import OnDemand from '../dashboard/OnDemand';

const SideBar = () => {
    const [openNav, setOpenNav] = useState(false);
    const [active, setActive] = useState('tab-1');

    const toggleMenu = () => {
        setOpenNav(!openNav)
    }

    const handleClick = (event) => {
        setActive(event.target.id);
        setOpenNav(false);
    };
    const handleBacklayClick = () => {
        setOpenNav(false);
    };
  return (
      <div id="tab-1" className={`flex bg-gray w-full relative overflow-y-hidden ${active === 'tab-1' ? 'active' : ''}`}>
          <div className={`absolute w-full h-full bg-black opacity-50 duration-700 md:hidden z-30 ${openNav ? '' : 'hidden'}`} onClick={handleBacklayClick}></div>
          <div className='w-6 h-5 md:hidden flex-col max-lg:flex gap-1 fixed left-2 top-3 z-40' onClick={toggleMenu}>
              <span className='w-6 h-1 bg-white drop-shadow-[2px_2px_1px_black]'></span>
              <span className='w-6 h-1 bg-white drop-shadow-[2px_2px_1px_black]'></span>
              <span className='w-6 h-1 bg-white drop-shadow-[2px_2px_1px_black]'></span>
          </div>
          <div className={`h-screen max-w-[240px] w-full bg-black flex flex-col justify-between max-md:fixed z-30 duration-700 ${openNav ? 'left-0' : 'left-[-100%]'}`}>
              <div onClick={handleClick}>
                  <div className='flex items-center justify-center pt-11 pb-[62px]'>
                      <img src={dashBoardLogo} alt="logo" className='w-[184px]' />
                  </div>
                  {SIDEBAR_BUTTON.map((obj) => (
                      <div key={obj.id} className={`mb-8 flex px-5 ${active === obj.id ? 'active' : ''}`}>
                          <a href="#" id={obj.id} onClick={handleClick} className={`sidebar-items-svg text-white flex items-center gap-4 ${active === obj.id ? 'text-yellow-500' : ''}`}> <span className={`sidebar-items-svg ${active === obj.id ? 'fill-yellow-500' : 'fill-white'}`}>{obj.dots}</span><span className={`${active === obj.id ? 'stroke-yellow-500 fill-yellow-500' : ''}`}>{obj.sidebarSvg}</span> {obj.text}
                          </a>
                      </div>
                  ))}
              </div>
              <div className='ps-10 pb-10'>
                  <div className='flex flex-col gap-4'>
                      <a href="#help" className='font-normal text-sm text-white opacity-50 hover:opacity-[1] duration-700'>Help</a>
                      <a href="#contact" className='font-normal text-sm text-white opacity-50 hover:opacity-[1] duration-700'>Contact us</a>
                      <a href="#logout" className='font-normal text-sm text-white opacity-50 hover:opacity-[1] duration-700'>Log out</a>
                  </div>
                  <div className='flex items-center gap-[14px] pt-11'>
                      <img src={ZarehImg} alt="zareh" className='w-8' />
                      <p className='font-normal text-sm text-white whitespace-nowrap'>Zareh Geertjes</p>
                  </div>
              </div>
          </div>
          <div className='w-full h-screen max-lg:overflow-y-scroll flex flex-col'>
              <Welcome />
              <div className='flex max-lg:flex-wrap w-full gap-4 px-8 relative z-20'>
                  {active === 'tab-2' && <Events active={active} />}
                  {active === 'tab-4' && <Programmes />}
                  {active === 'tab-1' && <><Events active={active} /> <Programmes /></>}
              </div>
              <div className='w-full ps-8'> {active === 'tab-3' && <OnDemand />}
                  {active === 'tab-1' && <OnDemand />}
              </div>
          </div>
      </div>
  )
}

export default SideBar
