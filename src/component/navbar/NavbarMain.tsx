import React, { useEffect, useState } from "react";
import logohieploi from "../../assets/images/logohieploi.png"

import {
  Navbar,
  Collapse,
  Typography,
  Button,
  IconButton,
  List,
  ListItem,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import {
  ChevronDownIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  Bars4Icon,
  // GlobeAmericasIcon,
  // NewspaperIcon,
  // PhoneIcon,
  // RectangleGroupIcon,
   SquaresPlusIcon,
  // SunIcon,
  // TagIcon,
  UserGroupIcon,
} from "@heroicons/react/24/solid";

 
const navListMenuItemsSanPham = [
  {
    title: "Xe HONDA",
    description: "Các loại xe hãng Honda: Vision, Air Blade, SH, ...",
    icon: SquaresPlusIcon,
 
  },
  {
    title: "Xe YAMAHA",
    description: "Các loại xe hãng Honda: Exciter, Grande, Sirius, ...",
    icon: UserGroupIcon,
  },
  {
    title: "Xe Dien",
    description: "Các loại xe điện, xe đạp điện",
    icon: Bars4Icon,
  },

];
const navListMenuItemsDichVu = [
  {
    title: "DỊCH VỤ SỬA XE MÁY",
    description: "Tư vấn, bảo dưỡng các loại xe",
    icon: SquaresPlusIcon,
  },
  {
    title: "DỊCH VỤ BẢO HIỂM",
    description: "Bán các loại bảo hiểm xe máy",
    icon: UserGroupIcon,
  },
  {
    title: "DỊCH VỤ LÀM CÁC THỦ TỤC XE MÁY, OTO",
    description: "Nhận làm các thủ tục: sang tên, mất đăng kí,...",
    icon: Bars4Icon,
  }];

function NavListMenu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const [isNewMenuOpen, setIsNewMenuOpen] = React.useState(false);
  const [isNewMobileMenuOpen, setIsNewMobileMenuOpen] = React.useState(false);

  
  const renderItems = navListMenuItemsSanPham.map(
    ({ icon, title, description }, key) => (
      <a href={`/${title.toLowerCase().replace(/\s+/g, '-')}`} key={key}>
        <MenuItem className="flex items-center gap-3 rounded-lg" placeholder="">
          <div className="flex items-center justify-center rounded-lg !bg-blue-gray-50 p-2 ">
            {" "}
            {React.createElement(icon, {
              strokeWidth: 2,
              className: "h-6 text-gray-900 w-6",
            })}
          </div>
          <div>
            <Typography
              variant="h6"
              placeholder=""
              color="blue-gray"
              className="flex items-center text-sm font-bold"
            >
              {title}
            </Typography>
            <Typography
              variant="paragraph"
              placeholder=""
              className="text-xs !font-medium text-blue-gray-500"
            >
              {description}
            </Typography>
          </div>
        </MenuItem>
      </a>
    ),
  );
    const renderNewItems = navListMenuItemsDichVu.map(({ icon, title, description }, key) => (
      <a href="#" key={key}>
        <MenuItem placeholder="" className="flex items-center gap-3 rounded-lg">
          <div className="flex items-center justify-center rounded-lg !bg-blue-gray-50 p-2 ">
            {" "}
            {React.createElement(icon, {
              strokeWidth: 2,
              className: "h-6 text-gray-900 w-6",
            })}
          </div>
          <div>
            <Typography
              placeholder=""
              variant="h6"
              color="blue-gray"
              className="flex items-center text-sm font-bold"
            >
              {title}
            </Typography>
            <Typography
              placeholder=""
              variant="paragraph"
              className="text-xs !font-medium text-blue-gray-500"
            >
              {description}
            </Typography>
          </div>
        </MenuItem>
      </a>
    ));
 
  return (
    <React.Fragment>
      <Menu
        open={isMenuOpen}
        handler={setIsMenuOpen}
        offset={{ mainAxis: 20 }}
        placement="bottom"
        allowHover={true}
      >
        <MenuHandler>
          <Typography as="div" variant="small" className="font-medium" placeholder="">
            <ListItem
              placeholder=""
              className="flex items-center gap-2 py-2 pr-4 font-medium text-gray-900 text-xl"
              selected={isMenuOpen || isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((cur) => !cur)}
            >
              SẢN PHẨM
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`hidden h-3 w-3 transition-transform lg:block ${
                  isMenuOpen ? "rotate-180" : ""
                }`}
              />
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`block h-3 w-3 transition-transform lg:hidden ${
                  isMobileMenuOpen ? "rotate-180" : ""
                }`}
              />
            </ListItem>
          </Typography>
        </MenuHandler>
        <MenuList placeholder="" className="hidden max-w-screen-xl rounded-xl lg:block">
          <ul className="grid grid-cols-1 gap-y-2 outline-none outline-0">
            {renderItems}
          </ul>
        </MenuList>
      </Menu>
      <div className="block lg:hidden">
        <Collapse open={isMobileMenuOpen}>{renderItems}</Collapse>
      </div>

      <Menu
        open={isNewMenuOpen}
        handler={setIsNewMenuOpen}
        offset={{ mainAxis: 20 }}
        placement="bottom"
        allowHover={true}
      >
        <MenuHandler>
          <Typography placeholder="" as="div" variant="small" className="font-medium">
            <ListItem
              placeholder=""
              className="flex items-center gap-2 py-2 pr-4 font-medium text-gray-900 text-xl"
              selected={isNewMenuOpen}
              onClick={() => setIsNewMobileMenuOpen((cur) => !cur)}
            >
              DỊCH VỤ
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`hidden h-3 w-3 transition-transform lg:block ${
                  isNewMenuOpen ? "rotate-180" : ""
                }`}
              />
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`block h-3 w-3 transition-transform lg:hidden ${
                  isNewMenuOpen ? "rotate-180" : ""
                }`}
              />
            </ListItem>
          </Typography>
        </MenuHandler>
        <MenuList placeholder="" className="hidden max-w-screen-xl rounded-xl lg:block">
          <ul className="grid grid-cols-1 gap-y-2 outline-none outline-0">
            {renderNewItems}
          </ul>
        </MenuList>
      </Menu>
      
      
      <div className="block lg:hidden">
        <Collapse open={isNewMobileMenuOpen}>{renderNewItems}</Collapse>
      </div>
    </React.Fragment>
    
  );
}
 
function NavList() {
  return (
    <List placeholder="" className="mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1 ">
      <Typography
        as="a"
        placeholder=""
        href="/"
        variant="small"
        color="blue-gray"
        className="font-medium text-xl" ///chinh text
      >
        <ListItem placeholder="" className="flex items-center gap-2 py-2 pr-4 " >TRANG CHỦ</ListItem>
      </Typography>
      <NavListMenu />
      <Typography
        as="a"
        placeholder=""
        href="#"
        variant="small"
        color="blue-gray"
        className="font-medium text-xl" ///chinh text
      >
        <ListItem placeholder="" className="flex items-center gap-2 py-2 pr-4">
          LIÊN HỆ
        </ListItem>
      </Typography>
    </List>
  );
} 
// home contact us
 
export function NavbarWithMegaMenu() {
  const [isCrolled, setIsCrolled] = useState(false);
  useEffect ( () => {
    const handleScroll = () => {
      const scrollThreshold = 20;
      const scrolled = window.scrollY > scrollThreshold;
      setIsCrolled(scrolled);
  };
  window.addEventListener('scroll', handleScroll);
  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
},[]);
///scrol-scren/////

  const [openNav, setOpenNav] = React.useState(false);
 
  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
  }, []);
 
  return (
    // <div className={`md:fixed z-40  top-5 w-full  shadow-indigo-500/10 	  ${isCrolled ? "bg-white 	top-0" : ""}`}>
      <div className="md:fixed z-40  top-5 w-full  shadow-indigo-500/10 " >
      {/* <div className="md:flex md:justify-between md:max-w-screen-2xl md:mx-auto">
        <div className="">
            <div>
              <p>Hotline: <span>0917973844 - 0914973844 - 0914672688</span></p>
            </div>
            
        </div>
        <div>
          Chào mứng đến với cửa hàng xe máy HIỆP LỢI
        </div>
      </div> */}
      <Navbar placeholder="" className= {`mx-auto max-w-screen-2xl px-4 py-2  ${isCrolled ? "bg-white shadow-none	" : ""}`}>
        <div className= {`flex items-center justify-between text-blue-gray-900`}>
          {/* <Typography
            as="a"
            href="#"
            variant="h6"
            className="mr-4 cursor-pointer py-1.5 lg:ml-2"
          >
            Material Tailwind
          </Typography> */}
          <img src={logohieploi} alt="" />
          <div className="hidden lg:block">
            <NavList />
          </div>
          <div className="hidden gap-2 lg:flex">
            <Button placeholder="" variant="text" size="sm" color="blue-gray">
              Log In
            </Button>
            <Button placeholder="" variant="gradient" size="sm">
              Sign In
            </Button>
          </div>
          <IconButton
          placeholder=""
            variant="text"
            color="blue-gray"
            className="lg:hidden"
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <XMarkIcon className="h-6 w-6" strokeWidth={2} />
            ) : (
              <Bars3Icon className="h-6 w-6" strokeWidth={2} />
            )}
          </IconButton>
        </div>
        <Collapse open={openNav}>
          <NavList />
          <div className="flex w-full flex-nowrap items-center gap-2 lg:hidden">
            <Button placeholder="" variant="outlined" size="sm" color="blue-gray" fullWidth>
              Log In
            </Button>
            <Button placeholder="" variant="gradient" size="sm" fullWidth>
              Sign In
            </Button>
          </div>
        </Collapse>
      </Navbar>
    </div>
    
  );
}