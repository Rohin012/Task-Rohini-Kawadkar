import { useState } from "react";
import React from "react";

const CurrentDate = ()=>{
        const date=new Date()
        

        return (
            <>
                 {date.toLocaleString()}
            </>
           )

}

export default CurrentDate