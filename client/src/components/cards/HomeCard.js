import React from 'react'
import {FileEarmarkFontFill, FileCodeFill, QuestionCircleFill} from "react-bootstrap-icons"

export default function HomeCard({title, icon}) {
    if(icon === "FileEarmarkFontFill"){
        icon = <FileEarmarkFontFill size="50px"/>
    }
    else if(icon === "FileCodeFill"){
        icon = <FileCodeFill size="50px"/>
    }
    else{
        icon = <QuestionCircleFill size="50px"/>
    }
    return (
        <div className="col-md-4 card-box px-5">
            <div className='card'>
                <h4>{title}</h4>
                {icon}
                <button className="btn">Толығырақ</button>
            </div>
        </div>
    )
}
