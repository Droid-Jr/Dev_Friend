import React, { useState } from 'react'

export default function useFundamentos() {
 const [Fundamentos, setFundamentos] = useState(false);

 const changeFundamentos = () => {
    setFundamentos(!Fundamentos)
 }

 return [Fundamentos , changeFundamentos]


}
