import { Modal, Popover, Button, message } from 'antd';
import React from 'react';
import Foto from '../../../assets/bradns.jpeg';

export default function BrandsListBox() {
  return (
    <div className='list-box w-full flex items-center justify-between p-[1rem] border-solid border-b border-[#ccc]'>
        <p className='w-[20%] px-[1rem]'>1</p>
        <p className='w-[20%] px-[1rem]'>KIA</p>
        <div className='w-[25%] px-[1rem]'>
            <img src={Foto} alt="" className='w-[7rem]' />
        </div>
        <div className='action w-[35%] px-[1rem] flex items-center '>
            <Button className='bg-[#1677ff] text-[#fff] text-[1rem] mr-[1rem]'>Edit</Button>
            <Button className='bg-[#ff4d4f] text-[#fff]'>Delet</Button>
        </div>
    </div>
  )
}
