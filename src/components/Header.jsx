import React, { useState } from "react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isFeaturesOpen, setIsFeaturesOpen] = useState(false);
  const [isCompanyOpen, setIsCompanyOpen] = useState(false);

  return (
    <header className="header md:flex md:justify-between md:flex-row px-4 py-6 md:items-end xl:gap-20 xl:px-10 xl:py-5">
      <div className="flex justify-between md:items-start sm:flex-row gap-10 xl:gap-10">
        <div>
          <img src="images/logo.svg" alt="logo" className="" />
        </div>

        <div className={`md:hidden fixed top-0 left-0 w-screen h-screen bg-almostBlack transition-opacity duration-300 z-40
          ${isOpen ? 'opacity-80 pointer-events-none' : 'opacity-0 pointer-events-none'}`} onClick={() => setIsOpen(false)}>
        </div>

        <div className={`flex md:items-center pt-20 px-6 md:pt-0 top-0 md:py-0 md:relative flex-col md:flex-row gap-2 md:gap-5
          xl:gap-10 fixed h-screen md:h-auto w-[65%] md:w-auto bg-white md:bg-transparent duration-500 z-50
          ${isOpen ? 'right-0' : '-right-[100%] md:right-0'}`}>

        <div className="md:hidden absolute top-6 right-6 cursor-pointer" onClick={() => setIsOpen(false)}>
          <img src="images/icon-close-menu.svg" alt="close menu" />
        </div>
            
          <div className="dropdown relative">
            <div className="select flex items-center gap-3 xl:gap-2 cursor-pointer hover:brightness-0 duration-300"
              onClick={() => setIsFeaturesOpen(!isFeaturesOpen)}>
              <span className="selected text-mediumGray font-medium text-sm">Features</span>
              <img src="images/icon-arrow-down.svg" alt="arrow-down" className={`transition-transform duration-300
                 ${isFeaturesOpen ? 'rotate-180' : ''}`}/>
              {/* no need for the arrow-up since i used rotation for arrow down*/}
            </div>
            {isFeaturesOpen && (
            <div className=" md:absolute md:top-10 md:-left-16 md:bg-white md:p-6 px-4 pt-6
              pb-4 md:rounded-xl md:shadow-lg animate-fade">
              <ul className="space-y-3">
                <li className="flex items-center gap-4 text-sm">
                  <img src="images/icon-todo.svg" alt="todo icon" />
                  <a href="#" className="hover:underline text-mediumGray font-medium">Todo List</a>
                </li>
                <li className="flex items-center gap-4 text-sm">
                  <img src="images/icon-calendar.svg" alt="calender icon" />
                  <a href="#" className="hover:underline text-mediumGray font-medium">Calender</a>
                </li>
                <li className="flex items-center gap-4 text-sm">
                  <img src="images/icon-reminders.svg" alt="reminders icon" />
                  <a href="#" className="hover:underline text-mediumGray font-medium">Reminders</a>
                </li>
                <li className="flex items-center gap-4 text-sm">
                  <img src="images/icon-planning.svg" alt="planning icon" />
                  <a href="#" className="hover:underline text-mediumGray font-medium">Planning</a>
                </li>
              </ul>
            </div>
            )}
          </div>

          <div className="dropdown relative">
            <div className="select flex items-center gap-3 xl:gap-2 cursor-pointer hover:brightness-0 duration-300"
              onClick={() => setIsCompanyOpen(!isCompanyOpen)}>
              <span className="selected text-mediumGray font-medium text-sm">Company</span>
              <img src="images/icon-arrow-down.svg" alt="arrow-down" className={`transition-transform duration-300
                ${isCompanyOpen ? 'rotate-180' : ''}`}/>
              {/* no need for the arrow-up since i used rotation for arrow down*/}
            </div>
            {isCompanyOpen && (
            <div className="md:absolute md:top-10 md:-right-7 xl:-right-10 left-0 md:bg-white pt-6 px-4 pb-2 md:pb-6
              md:px-6 md:rounded-xl md:shadow-lg animate-fade">
              <ul className="space-y-3">
                <li className="text-sm">
                  <a href="#" className="hover:underline text-mediumGray font-medium">History</a>
                </li>
                <li className="text-sm">
                  <a href="#" className="hover:underline text-mediumGray font-medium">Our Team</a>
                </li>
                <li className="text-sm">
                  <a href="#" className="hover:underline text-mediumGray font-medium">Blog</a>
                </li>
              </ul>
            </div>
            )}
          </div>

          <div className="select">
            <span className="selected cursor-pointer text-mediumGray font-medium hover:text-almostBlack
              duration-300 text-sm">Careers</span>
          </div>

          <div className="select">
            <span className="selected cursor-pointer text-mediumGray font-medium hover:text-almostBlack
              duration-300 text-sm">About</span>
          </div>
        </div>

        {!isOpen && (
          <div className="hamburger md:hidden absolute right-4 top-7 cursor-pointer" onClick={() => setIsOpen(true)}>
            <img src="images/icon-menu.svg" alt="hamburger" />
          </div>
        )}
      </div>

      <div className=" flex-col hidden md:flex items-center sm:flex-row sm:gap-8 md:gap-4 xl:gap-10">
        <div>
          <button className="text-mediumGray font-medium hover:text-almostBlack duration-300 text-sm">Login</button>
        </div>
        <div>
          <button className="text-mediumGray border-2 py-2.5 px-5 border-mediumGray rounded-[0.875rem] text-sm
          first-letter:font-medium hover:text-almostBlack hover:border-almostBlack duration-300">Register</button>
        </div>
      </div>
    </header>
  );
}

export default Header;
