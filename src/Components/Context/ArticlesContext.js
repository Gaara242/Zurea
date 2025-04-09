"use client"

import { createContext, useEffect, useState } from "react"

export const aricleContext = createContext()

export function ArticlesContext({children}) {
    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        async function daoload() {
            setLoading(true)
            try {
                setLoading(true)

                const response = await fetch("https://backgi.eces-code.com/api/articles")
                if (!response.ok) {
                    throw new Error(`Echec: ${response.statusText}`)
                }
                else{
                    const article = await response.json()
                    setLoading(false)
                    setArticles(article)
                    console.log(article)
                }
                
            } catch (e) {
                setLoading(false)
                setError(e.message)
            }
            finally{
                setLoading(false)
            }

        }
        daoload()
    }, [])

    return (
        <aricleContext.Provider value={{articles, loading, error}}>
            {children}
        </aricleContext.Provider>
    )
    
}