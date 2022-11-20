import axios from 'axios'

export const getDirectory = async () => {
    try {
        const req = await axios.get(`https://sheets.googleapis.com/v4/spreadsheets/${process.env.REACT_APP_SPREADSHEET_ID}/values/Directorio!R1C1:R200C9`, {
            params: { key: process.env.REACT_APP_GOOGLE_API }
        })
        return await req
    }catch(e){
        console.log(e)
    }

}

export const getLaboratory = async () =>{
    try {
        const req = await axios.get(`https://sheets.googleapis.com/v4/spreadsheets/${process.env.REACT_APP_SPREADSHEET_ID}/values/Laboratorio!R1C1:R200C11`, {
            params: { key: process.env.REACT_APP_GOOGLE_API }
        })
        return await req
    }catch(e){
        console.log(e)
    }
}

