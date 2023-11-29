"use client";
import { motion } from 'framer-motion'
import Image from 'next/image'
import {useState} from "react";

export default function Home() {
    const [event,setEvent] = useState(false);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="absolute">
            <div className="rotation-container" onMouseDown={()=>{
                setEvent(true);
                setTimeout(()=>{setEvent(false);},2000);
            }}>
            <Image className="absolute pistol" src="/Layer 1.png" width={400} height={400} alt="Pistol"/>
            <Image className={`absolute  top_liver ${event?'rotator1':''}`} src="/Layer 3.png" width={60} height={60} alt="top_liver"/>
            <Image className={`absolute  liver ${event?'rotator2':''}`} src='/Layer 4.png' width={42} height={42} alt="liver"/>
            {/*<Image className={`absolute  Rotator ${event?'rotator3':''}`} src='/Layer 5.png' width={66} height={65} alt="liver"/>*/}
            <div className={`absolute  Rotator ${event ? 'rotator3' : ''}`}>
            </div>
            </div>
        </div>
    </main>
  )
}
