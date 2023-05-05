import { Search, ShoppingCartOutlined, Person } from '@mui/icons-material'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { Badge, IconButton, Menu, MenuItem } from "@mui/material";
import { AccountCircle } from "@mui/icons-material";
import { logout } from '../redux/reducers/user'

const Navbar = () => {

    ////////////////////////////////////////////////////  Variables  /////////////////////////////////////////////
    const { currentUser: user } = useSelector(state => state.user)
    const dispatch = useDispatch()

    ///////////////////////////////////////////////////   States   /////////////////////////////////////////////
    const [showMobileAccountMenu, setMobileShowAccountMenu] = useState(false)
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const { quantity } = useSelector(state => state.cart)

    ////////////////////////////////////////////////////   useEffect   /////////////////////////////////////////////

    ////////////////////////////////////////////////////   Functions  /////////////////////////////////////////////
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const handleLogout = () => {
        dispatch(logout())
    }

    return (
        <nav className={`h-[60px] `} >

            <div className={`wrapper md:px-[1.5rem] px-[12px] py-[10px] flex justify-between items-center `} >

                {/* left */}
                <div className='center flex justify-start md:flex-1 ' >
                    <Link to="/" style={{ fontFamily: "cursive" }} className='font-bold text-[28px] text-start ' >NANO.</Link>
                </div>

                {/* center */}
                <div className='left flex items-center md:flex-1 ' >
                    <span className='language md:block hidden text-[14px] cursor-pointer ' >EN</span>
                    {/* search bar */}
                    <div className='searchContainer flex items-center md:max-w-fit max-w-[10rem] md:ml-[1.5rem] p-[4px] border-[1px] rounded-[2px] border-light-gray500 ' >
                        <input type='text' className='border-none outline-none bg-inherit md:w-fit w-[80%]' />
                        <button className='md:w-fit w-[20%] ' > <Search style={{ color: 'gray', fontSize: '20px' }} /></button>
                    </div>
                </div>

                {/* right */}
                <div className='right flex items-center justify-end md:gap-[1.5rem] sm:gap-[1rem] gap-[8px] md:flex-1 ' >
                    <Link to='/cart' className='menuItem text-[1rem] cursor-pointer ' >
                        <Badge badgeContent={quantity} color="primary"><ShoppingCartOutlined color="action" /></Badge>
                    </Link>
                    <>
                        {
                            user
                                ?
                                <>
                                    <IconButton onClick={handleClick} >
                                        <AccountCircle />
                                    </IconButton>
                                    <Menu
                                        anchorEl={anchorEl}
                                        keepMounted
                                        transformOrigin={{ vertical: "top", horizontal: "right" }}
                                        open={Boolean(anchorEl)}
                                        onClose={handleClose}
                                    >
                                        <MenuItem onClick={handleClose}>Profile</MenuItem>
                                        <MenuItem onClick={handleClose}>My account</MenuItem>
                                        <MenuItem onClick={handleLogout}>Logout</MenuItem>
                                    </Menu>
                                </>
                                :
                                <div className='md:flex hidden gap-[8px] ' >
                                    <Link to='/register' className='menuItem text-[1rem] cursor-pointer ' >Register</Link>
                                    <Link to='/login' className='menuItem text-[1rem] cursor-pointer ' >Login</Link>
                                </div>
                        }
                        <div className='relative md:hidden ' >
                            <button onClick={() => setMobileShowAccountMenu((pre) => !pre)} className='' ><Person /></button>
                            {
                                showMobileAccountMenu &&
                                <div className={`transition-all flex flex-col gap-[8px] absolute top-full right-[100%] z-50 p-[8px] bg-light-gray100 border-[1px] border-black rounded-[2px] `} >
                                    <Link to='/register' className='menuItem text-[1rem] cursor-pointer bg-black text-white px-[8px] py-[4px] rounded-[2px] ' >Register</Link>
                                    <Link to='/login' className='menuItem text-[1rem] cursor-pointer bg-transparent border-[1px] border-black px-[8px] py-[4px] rounded-[2px] ' >Login</Link>
                                </div>
                            }
                        </div>
                    </>
                </div>

            </div>

        </nav>
    )
}

export default Navbar