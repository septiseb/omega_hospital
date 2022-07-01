import axios from 'axios'

export const getDirectory = async () => {
    
    try {
        const req = await axios.get(`https://sheets.googleapis.com/v4/spreadsheets/1FoSD_8B14H4cndw7P9puTPFgKAJ6t-s_E5E44XNbaR4/values/Directorio!R1C1:R200C9`, {
            params: { key: process.env.REACT_APP_GOOGLE_API }
        })
        return await req
    }catch(e){
        console.log(e)
    }

}

