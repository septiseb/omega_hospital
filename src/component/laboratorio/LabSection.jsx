import React from 'react'
import { useEffect } from 'react'
import { getLaboratory } from '../../services/api/sheets'
import LabCard from './LabCard'
import MainLab from './MainLab'
import FilterLab from './FilterTab'

const LabSection = () => {

useEffect(() => {
    getLaboratory().then(r =>{})
    }, [])

  return (
    <>
    <MainLab />
    <FilterLab />
    <LabCard />
    </>
  )
}

export default LabSection
