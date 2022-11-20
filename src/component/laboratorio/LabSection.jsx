import React from 'react'
import { useEffect } from 'react'
import { getLaboratory } from '../../services/api/sheets'
import LabCard from './LabCard'
import MainLab from './MainLab'

const LabSection = () => {

useEffect(() => {
    getLaboratory().then(r =>{})
    }, [])

  return (
    <>
    <MainLab />
    <LabCard />
    </>
  )
}

export default LabSection
