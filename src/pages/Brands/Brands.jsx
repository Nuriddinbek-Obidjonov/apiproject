import { Modal, Popover, Button, message } from 'antd';
import React, {useState} from 'react';
import { IoMdExit } from "react-icons/io";
import { RiMenuFold3Fill } from "react-icons/ri";
import BrandsListBox from './BrandsListBox/BrandsListBox';

function Brands() {

  return (
    <div className='w-full h-[90vh]'>

      <div className='w-full flex justify-between items-center bg-[#fff] h-[6%]'>
        <div>
          <RiMenuFold3Fill />
        </div>
        <Button>
          <IoMdExit />
          Chiqish
        </Button>
      </div>

      <div className='brands_inner w-full p-[1.2rem] bg-[#f5f5f5] h-[94%]'>

        <div className='tables bg-[#fff] p-[1.4rem] rounded-[.6rem] h-full overflow-x-auto'>
          
          <div className='hed'>
            <h1 className='text-[1.8rem] font-bold' >Brands</h1>
            <Button className='bg-[#1677ff] text-[#fff]'>Add</Button>
          </div>

          <div className='teb-hed w-full'>
            <div className='teb-list-hed w-full flex items-center justify-between bg-[#f5f5f5] h-[3.6rem] px-[1.2rem]'>
              <p className='w-[20%] py-[4px] px-[14px] border-solid border-r border-[#ccc]'>Number</p>
              <p className='w-[20%] py-[4px] px-[14px] border-solid border-r border-[#ccc]'>Name</p>
              <p className='w-[25%] py-[4px] px-[14px] border-solid border-r border-[#ccc]'>Images</p>
              <p className='w-[35%] py-[4px] px-[14px]'>Action</p>
            </div>
            <div className='teb-list'>
              <BrandsListBox />
              <BrandsListBox />
              <BrandsListBox />
              <BrandsListBox />
              <BrandsListBox />
            </div>
          </div>

        </div>

      </div>
      
    </div>
  )
}

export default Brands