import { BiRadioCircle } from 'react-icons/bi';
import { TbCircleDotted } from "react-icons/tb";
import { LuMoreHorizontal } from 'react-icons/lu';
import { RiProgress4Line } from "react-icons/ri";
import { FaCheckCircle } from "react-icons/fa";
import { AiFillCloseCircle, AiFillWarning } from 'react-icons/ai';
import { BiSignal2, BiSignal3, BiSignal4 } from 'react-icons/bi';


export const getPriorityIcon = (priority: string) => {
    switch (priority) {
        case "No priority": return <LuMoreHorizontal color="#797d84" size={18} />
        case "Urgent": return <AiFillWarning color='#fc7840' size={20} />
        case "High": return <BiSignal4 color='#6b6f76' size={24} />
        case "Medium": return <BiSignal3 color='#6b6f76' size={24} />
        case "Low": return <BiSignal2 color='#6b6f76' size={24} />
        default: return <AiFillWarning color='#fc7840' size={14} />
    }
}

export const getStatusIcon = (priority: string) => {
    switch (priority) {
        case "Backlog": return <TbCircleDotted color='#6b6f76' size={20} />
        case "Todo": return <BiRadioCircle color='#e2e2e2' size={24} />
        case "In progress": return <RiProgress4Line color='#f1ca4b' size={16} />
        case "Done": return <FaCheckCircle color='#5e6ad2' size={16} />
        case "Canceled": return <AiFillCloseCircle color='#94a2b3' size={16} />
        default: return <AiFillCloseCircle color='#94a2b3' size={16} />
    }
}