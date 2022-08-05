import React, { useEffect, useState } from 'react'
import { StyleImages, StyleImageWrapper } from './style.components'
import {fabric} from 'fabric'
import DotsLoader from '../../../../reusableUI/loaders/Dots'
import {useSelector} from 'react-redux'


const ImageFilters = () => {
    const canvas = useSelector(state => state.canvas.canvas)
    const navigate = useSelector(state => state.navigation.navigate)
    let [data, setData] = useState(null)
    const filters = [
        {filterObject: new fabric.Image.filters.Sepia(), filterName: 'Sepia'},
        {filterObject: new fabric.Image.filters.Brownie(), filterName: 'Brownie'},
        {filterObject: new fabric.Image.filters.Vintage(), filterName: 'Vintage'},
        {filterObject: new fabric.Image.filters.Technicolor(), filterName: 'Technicolor'},
        {filterObject: new fabric.Image.filters.Invert(), filterName: 'Invert'}
    ]

    const handleFilter = (name) => {
        const FO = filters.find(f => f.filterName === name)
        if(!FO) return
        if(FO.filterName === 'Normal') {
            const object = canvas.getActiveObject()
            object.filters = []
            object.applyFilters()
            canvas.renderAll()
            return
        }
        const object = canvas.getActiveObject()
        object.filters = []
        object.applyFilters()
        object.filters.push(FO.filterObject)
        object.applyFilters()
        canvas.renderAll()
    }

    useEffect(() => {
        let res = [];
        if(!canvas.getActiveObject()) return setData([])
        setData(null)
        setTimeout(() => {
            let quality =  {
                        format: 'jpeg',
                        quality: 0.3,
                    }
            filters.forEach((data, index) => {
                fabric.Image.fromURL(canvas.getActiveObject()?._element.src, (img) => {
                img.filters.push(data.filterObject)
                if(index === 0) res.push({src: img.toDataURL(quality), filterName: 'Normal'})
                img.applyFilters()
                res.push({src: img.toDataURL(quality), filterName: data.filterName})
                if(res.length === filters.length) setData(res)
            }, {crossOrigin: 'anonymous'})
            })
        },100)

    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[navigate.id])

     if(!data) return <DotsLoader />


    return (
        <StyleImages>
           {data.map((obj) => {
               return (
                    <StyleImageWrapper key={obj.filterName} onClick={() => handleFilter(obj.filterName)}><img width={'100px'}  src={obj.src} alt='types'/></StyleImageWrapper>
               )
           })}
        </StyleImages>
    )
}


export default ImageFilters