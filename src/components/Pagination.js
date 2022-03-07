import React, {useState} from 'react'

function Pagination({pageProp, goBehind, goAhead}) {
  // let [pageNumber, setPage] = useState(1);
  // function goAhead() {
  //   setPage(pageNumber + 1);
  // }
  // function goBehind() {
  //   if(pageNumber > 1)
  //     setPage(pageNumber - 1);
  // }
  return (
    <div className="w-full flex justify-center m-4">
        <button className="border-indigo-500 text-indigo border-2 border-r-0 rounded-l-xl p-2" onClick={goBehind}>Previous</button>
        <button className="border-indigo-500 text-indigo border-2 bg-gray-300 p-2">{pageProp}</button>
        <button className="border-indigo-500 text-indigo border-2 border-l-0 rounded-r-xl p-2" onClick={goAhead}>Next</button>
    </div>
  )
}

export default Pagination