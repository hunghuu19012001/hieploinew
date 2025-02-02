import React, { useEffect, useState } from "react";
import logohieploi from "../../assets/images/logohieploi.png";
import {
  Navbar,
  Collapse,
  Typography,
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
  SquaresPlusIcon,
  UserGroupIcon,
} from "@heroicons/react/24/solid";

const menuItems = {
  sanPham: [
    {
      title: "Xe HONDA",
      description: "Các loại xe hãng Honda: Vision, Air Blade, SH, ...",
      icon: SquaresPlusIcon,
    },
    {
      title: "Xe YAMAHA",
      description: "Các loại xe hãng Yamaha: Exciter, Grande, Sirius, ...",
      icon: UserGroupIcon,
    },
    {
      title: "Xe Dien",
      description: "Các loại xe điện, xe đạp điện",
      icon: Bars4Icon,
    },
  ],
  dichVu: [
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
    },
  ],
};

const renderMenuItems = (items) =>
  items.map(({ icon, title, description }, key) => (
    <a href={`/${title.toLowerCase().replace(/\s+/g, '-')}`} key={key}>
      <MenuItem placeholder="" className="flex items-center gap-3 rounded-lg">
        <div className="flex items-center justify-center rounded-lg bg-blue-gray-50 p-2">
          {React.createElement(icon, {
            strokeWidth: 2,
            className: "h-6 text-gray-900 w-6",
          })}
        </div>
        <div>
          <Typography placeholder="" variant="h6" color="blue-gray" className="text-sm font-bold">
            {title}
          </Typography>
          <Typography placeholder="" className="text-xs font-medium text-blue-gray-500">
            {description}
          </Typography>
        </div>
      </MenuItem>
    </a>
  ));

function NavListMenu({ items, label }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <Menu
        open={isMenuOpen}
        handler={setIsMenuOpen}
        offset={{ mainAxis: 20 }}
        placement="bottom"
        allowHover={true}
      >
        <MenuHandler>
          <Typography placeholder="" as="div" variant="small" className="font-medium">
            <ListItem
						  placeholder=""
              className="flex items-center gap-2 py-2 pr-4 font-medium text-gray-900 text-xl"
              selected={isMenuOpen || isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((cur) => !cur)}
            >
              {label}
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
          <ul className="grid grid-cols-1 gap-y-2">{renderMenuItems(items)}</ul>
        </MenuList>
      </Menu>
      <div className="block lg:hidden">
        <Collapse open={isMobileMenuOpen}>{renderMenuItems(items)}</Collapse>
      </div>
    </>
  );
}

function NavList() {
  return (
    <List placeholder="" className="mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1 ">
      <Typography placeholder="" as="a" href="/" variant="small" color="blue-gray" className="font-medium text-xl">
        <ListItem placeholder="" className="flex items-center gap-2 py-2 pr-4">TRANG CHỦ</ListItem>
      </Typography>
      <NavListMenu items={menuItems.sanPham} label="SẢN PHẨM" />
      <NavListMenu items={menuItems.dichVu} label="DỊCH VỤ" />
      <Typography placeholder="" as="a" href="#" variant="small" color="blue-gray" className="font-medium text-xl">
        <ListItem placeholder="" className="flex items-center gap-2 py-2 pr-4">LIÊN HỆ</ListItem>
      </Typography>
    </List>
  );
}

export function NavbarWithMegaMenu() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = 100; // Cột mốc để thay đổi giao diện navbar
      setIsScrolled(window.scrollY > scrollThreshold);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 960) setOpenNav(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className={`sticky top-0 left-0 right-0 z-40  duration-300 ${isScrolled ? 'bg-transparent md:mt-4' : 'bg-white '}`}>
      <Navbar
				placeholder=""
        className={`mx-auto px-4 py-2 shadow-none ${isScrolled ? 'bg-white  md:mt-4 md:rounded-lg rounded-none' : 'bg-white rounded-none'} `}
      >
        <div className="flex items-center justify-between">
          <img src={logohieploi} alt="logo" />
          <div className="hidden lg:block">
            <NavList />
          </div>
          <IconButton placeholder=""  variant="text" color="blue-gray" className="lg:hidden" onClick={() => setOpenNav(!openNav)}>
            {openNav ? <XMarkIcon className="h-6 w-6" strokeWidth={2} /> : <Bars3Icon className="h-6 w-6" strokeWidth={2} />}
          </IconButton>
        </div>
        <Collapse open={openNav}>
          <NavList />
        </Collapse>
      </Navbar>
    </div>
  );
}
