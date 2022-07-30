export const exerciseOptions = {

  method: 'GET',
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  }
};

export const youtubeOptions = {
  method: 'GET',
  headers: {
     'X-RapidAPI-Key':'e4fc791336mshb26a11c6110cc2ap1f99b0jsn6d89a86739f',
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
  }
};



export const fetchData = async (url, options)=>{
    const response = await fetch(url, options);
    const data = await response.json();

    return data;
}
