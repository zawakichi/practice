'use client'
import { useEffect, useState } from "react"

export default function Page() {
    const [data, setData] = useState({ name: 'init'})

    useEffect(() => {
        const change = {name: 'change'}
        setData(change)
    }, [])

    return <div>hello {data.name}</div>
}