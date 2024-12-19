import React from 'react'

function CarousalCard({data}) {
    

  return (
    <div id='body' className='mx-auto  bg-slate-300 w-[90vw] px-3 h-[280px] md:w-[30vw] md:h-[350px] md:px-5 rounded-3xl flex flex-col justify-center items-center'>
            <h1 className=' text-2xl md:text-4xl font-bold font-playfair text-red-600' >{data.title}</h1>
        <div id='texts'>
            <h1 className='mb-5'>"Lorem ipsum odor amet, consectetuer adipiscing elit. Inceptos sodales urna pulvinar dapibus sapien lacinia senectus. Tortor potenti porta convallis volutpat et aenean habitant magnis."</h1>
            <a className='text-slate-700 font-semibold hover:text-slate-500 font-serif mt-3 text-xl ' href={data.url}> Click to veiw more.. </a>
        </div>
       
    </div>
  )
}

export default CarousalCard